import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css'],
})
export class EditUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUsuario: number;
  confirmarSenha: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      alert('Sua seção expirou para sua segurança! Faça o login novamente!');
      this.router.navigate(['/login']);
    }
    this.idUsuario = this.route.snapshot.params['id'];
    this.findByIdUsuario(this.idUsuario);
    this.authService.refreshToken();
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  atualizar() {
    if (this.usuario.senhaUsuario != this.confirmarSenha) {
      alert('As senhas não conferem!');
    } else {
      this.authService
        .atualizarUsuario(this.usuario)
        .subscribe((resp: Usuario) => {
          this.usuario = resp;
          this.router.navigate(['/inicio']);
          alert('Usuário atualizado com sucesso!');
          environment.token = '';
          environment.nome = '';
          environment.foto = '';
          environment.tipo = '';
          environment.id = 0;
          this.router.navigate(['/login']);
        });
    }
  }
}
