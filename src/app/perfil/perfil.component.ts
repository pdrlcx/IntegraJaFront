import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment.prod';
import { EditUsuarioComponent } from '../edit/edit-usuario/edit-usuario.component';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  modalR: BsModalRef;
  usuario: Usuario = new Usuario();
  idUsuario: number;

  //Ordenacao
  key = 'dataPost';
  reverse = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
    public usuarioService: UsuarioService,
    public modalService: BsModalService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['login']);
    }
    this.idUsuario = this.route.snapshot.params['id'];
    this.findUsuarioById(this.idUsuario);
  }

  findUsuarioById(id: number) {
    this.usuarioService.getUsuarioById(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  abrirEditUserModal(usuario: Usuario) {
    const initialState = { usuario: usuario };
    this.modalR = this.modalService.show(EditUsuarioComponent, {
      initialState,
      class: 'modal-xl',
    });
  }

  podeEditar() {
    let pode = false;
    if (this.usuario.id == environment.id) {
      pode = true;
    }
    return pode;
  }

  postTemImg(imagem: string) {
    let tem = false;
    if (imagem != undefined) {
      tem = true;
    }
    return tem;
  }

  taPreenchido(campo: string) {
    let preenchido = false;
    if (campo != null) {
      preenchido = true;
    }
    return preenchido;
  }
}
