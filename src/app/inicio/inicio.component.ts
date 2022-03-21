import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  tituloPost: string;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  nomeTema: string;
  idTema: number;

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;

  //Ordenacao
  key = 'dataPost';
  reverse = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login']);
    }
    this.auth.refreshToken();
    this.auth.getUsuarioInfo();
    this.findByIdUsuario();
    this.getAllTemas();
    this.getAllPostagens();
  }

  findByIdUsuario() {
    this.auth.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  findByNomeTema() {
    if (this.nomeTema == '') {
      this.getAllTemas();
    } else {
      this.temaService
        .getByNomeTema(this.nomeTema)
        .subscribe((resp: Tema[]) => {
          this.listaTemas = resp;
        });
    }
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  postTemImg(imagem: string) {
    let tem = false;
    if (imagem != undefined) {
      tem = true;
    }
    return tem;
  }

  findByTituloPostagem() {
    if (this.tituloPost == '') {
      this.getAllPostagens();
    } else {
      this.postagemService
        .getByTituloPostagem(this.tituloPost)
        .subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  publicar() {
    this.tema.idTema = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.id = this.idUsuario;
    this.postagem.usuario = this.usuario;

    this.postagem.likesPost = 0;

    this.postagemService
      .postPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        alert('Postagem realizada com sucesso!');
        this.postagem = new Postagem();
        this.getAllPostagens();
      });
  }
}
