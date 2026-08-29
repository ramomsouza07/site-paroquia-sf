import { useEffect, useRef, type ChangeEvent, type ReactNode } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { enviarImagem } from "../../api/upload";
import "./editor-tiptap.css";

interface EditorArtigoProps {
    value: string;
    onChange: (html: string) => void;
    token: string | null;
    onNaoAutorizado: () => void;
}

export default function EditorArtigo({ value, onChange, token, onNaoAutorizado }: EditorArtigoProps) {
    const inputImagemRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                HTMLAttributes: { style: "max-width:100%;border-radius:8px;" },
            }),
            Link.configure({ openOnClick: false, autolink: true }),
            Placeholder.configure({ placeholder: "Escreva o conteúdo do artigo aqui..." }),
        ],
        content: value,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        editorProps: {
            attributes: {
                class:
                    "px-[15px] py-[12px] focus:outline-none " +
                    "[&_p]:mb-[12px] " +
                    "[&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:mb-[10px] [&_h2]:mt-[16px] " +
                    "[&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:mb-[8px] [&_h3]:mt-[14px] " +
                    "[&_ul]:list-disc [&_ul]:pl-[24px] [&_ul]:mb-[12px] " +
                    "[&_ol]:list-decimal [&_ol]:pl-[24px] [&_ol]:mb-[12px] " +
                    "[&_blockquote]:border-l-[4px] [&_blockquote]:border-mostarda [&_blockquote]:pl-[14px] [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-[12px] " +
                    "[&_a]:text-mostarda [&_a]:underline " +
                    "[&_img]:my-[14px] [&_img]:rounded-[8px]",
            },
        },
    });

    // Sincroniza se o "value" externo mudar por fora do editor
    // (útil no futuro, ao carregar um artigo existente pra edição)
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value, { emitUpdate: false });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, editor]);

    async function handleArquivoImagem(e: ChangeEvent<HTMLInputElement>) {
        const arquivo = e.target.files?.[0] ?? null;
        e.target.value = "";
        if (!arquivo || !editor) return;

        if (!token) {
            onNaoAutorizado();
            return;
        }

        try {
            const url = await enviarImagem(arquivo, token);
            editor.chain().focus().setImage({ src: url }).run();
        } catch (err) {
            if (err instanceof Error && err.message === "Não autorizado") {
                onNaoAutorizado();
                return;
            }
            alert(err instanceof Error ? err.message : "Erro ao enviar imagem.");
        }
    }

    function handleInserirLink() {
        if (!editor) return;

        const urlAtual = editor.getAttributes("link").href as string | undefined;
        const url = window.prompt("URL do link:", urlAtual ?? "https://");

        if (url === null) return; // cancelou

        if (url === "") {
            editor.chain().focus().unsetLink().run();
            return;
        }

        editor.chain().focus().setLink({ href: url }).run();
    }

    if (!editor) return null;

    return (
        <div className="border border-gray-300 rounded-[8px] overflow-hidden focus-within:border-mostarda">
            <Toolbar editor={editor} onInserirImagem={() => inputImagemRef.current?.click()} onInserirLink={handleInserirLink} />

            <EditorContent editor={editor} />

            <input
                ref={inputImagemRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleArquivoImagem}
                className="hidden"
            />
        </div>
    );
}

function Toolbar({
    editor,
    onInserirImagem,
    onInserirLink,
}: {
    editor: Editor;
    onInserirImagem: () => void;
    onInserirLink: () => void;
}) {
    return (
        <div className="flex flex-wrap items-center gap-[4px] px-[10px] py-[8px] border-b border-gray-200 bg-gray-50">
            <BotaoToolbar
                ativo={editor.isActive("bold")}
                onClick={() => editor.chain().focus().toggleBold().run()}
                titulo="Negrito"
            >
                <strong>N</strong>
            </BotaoToolbar>

            <BotaoToolbar
                ativo={editor.isActive("italic")}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                titulo="Itálico"
            >
                <em>I</em>
            </BotaoToolbar>

            <Separador />

            <BotaoToolbar
                ativo={editor.isActive("heading", { level: 2 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                titulo="Título"
            >
                H2
            </BotaoToolbar>

            <BotaoToolbar
                ativo={editor.isActive("heading", { level: 3 })}
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                titulo="Subtítulo"
            >
                H3
            </BotaoToolbar>

            <Separador />

            <BotaoToolbar
                ativo={editor.isActive("bulletList")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                titulo="Lista"
            >
                •—
            </BotaoToolbar>

            <BotaoToolbar
                ativo={editor.isActive("orderedList")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                titulo="Lista numerada"
            >
                1.
            </BotaoToolbar>

            <BotaoToolbar
                ativo={editor.isActive("blockquote")}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                titulo="Citação"
            >
                "
            </BotaoToolbar>

            <Separador />

            <BotaoToolbar ativo={editor.isActive("link")} onClick={onInserirLink} titulo="Link">
                🔗
            </BotaoToolbar>

            <BotaoToolbar ativo={false} onClick={onInserirImagem} titulo="Inserir imagem">
                🖼️
            </BotaoToolbar>

            <Separador />

            <BotaoToolbar
                ativo={false}
                onClick={() => editor.chain().focus().undo().run()}
                titulo="Desfazer"
            >
                ↶
            </BotaoToolbar>

            <BotaoToolbar
                ativo={false}
                onClick={() => editor.chain().focus().redo().run()}
                titulo="Refazer"
            >
                ↷
            </BotaoToolbar>
        </div>
    );
}

function BotaoToolbar({
    ativo,
    onClick,
    titulo,
    children,
}: {
    ativo: boolean;
    onClick: () => void;
    titulo: string;
    children: ReactNode;
}) {
    return (
        <button
            type="button"
            title={titulo}
            onClick={onClick}
            className={
                "w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-[14px] transition-colors duration-150 " +
                (ativo
                    ? "bg-marrom-escuro text-branco"
                    : "text-marrom-escuro hover:bg-gray-200")
            }
        >
            {children}
        </button>
    );
}

function Separador() {
    return <div className="w-px h-[20px] bg-gray-300 mx-[4px]" />;
}