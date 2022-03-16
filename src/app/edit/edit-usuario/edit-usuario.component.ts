import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
  idUsuario: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    public modalRef: BsModalRef
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      alert('Sua seção expirou para sua segurança! Faça o login novamente!');
      this.router.navigate(['/login']);
    }
    this.findByIdUsuario(this.idUsuario);
    this.authService.refreshToken();
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  atualizar() {
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
