import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public idPost: number;
  public tituloPost: string;
  public textoPost: string;
  public dataPost: Date;
  public imagemPost: string;
  public likesPost: number;
  public usuario: Usuario;
  public tema: Tema;
}
