import { Postagem } from './Postagem';

export class Usuario {
  public id: number;
  public nome: string;
  public telefone: string;
  public email: string;
  public senha: string;
  public foto: string;
  public tipoUsuario: string;
  public biografia: string;
  public cidade: string;
  public formacao: string;
  public areaDeAtuacao: string;
  public idiomas: string;
  public certificado: string;
  public linkedin: string;
  public postagens: Postagem[];
}
