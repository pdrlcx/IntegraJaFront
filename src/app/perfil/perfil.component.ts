import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUsuario: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
    public usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['login']);
    }
    this.idUsuario = this.route.snapshot.params['id'];
    this.findUsuarioById(this.idUsuario);
    console.log(this.idUsuario);
  }

  findUsuarioById(id: number) {
    this.usuarioService.getUsuarioById(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }
}
