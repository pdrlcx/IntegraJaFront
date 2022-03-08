import { Postagem } from "./Postagem";

export class Usuario {
    public idUsuario: number;
    public nomeUsuario: string;
    public emailUsuario: string;
    public senhaUsuario: string;
    public fotoUsuario: string;
    public tipoUsuario: string;
    public telefoneUsuario: string;
    public postagens: Postagem[];
}