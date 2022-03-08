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
    window.scroll(0, 0);
  }

  checarSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  cadastrar() {
    this.usuario.tipoUsuario = 'admin';

    if (this.usuario.senhaUsuario != this.confirmarSenha) {
      alert('As senhas são diferentes!');
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/login']);
        alert('Usuário cadastrado com sucesso!');
      });
    }
  }
}
