import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  confirmarSenha: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0,0);
  }

  checarSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  cadastrar() {
      this.usuario.tipo = 'Admin';
      this.usuario.cidade = 'Não informado'
      this.usuario.idiomas = 'Não informado'
      this.usuario.formacao = 'Não informado'
      this.usuario.linkedin = 'Não informado'
      this.usuario.biografia = 'Não informado'
      this.usuario.certificado = 'Não informado'
      this.usuario.areaDeAtuacao = 'Não informado'

    if (this.usuario.senha != this.confirmarSenha) {
      alert('A senha está incorreta!');
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      });
    }
  }
}
