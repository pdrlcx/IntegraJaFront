import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  Usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)    
  }

  confirmeSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUser = event.target.value
  }

  cadastrar() {
    this.Usuario.tipoUsuario = this.tipoUser

    if(this.Usuario.senhaUsuario != this.confirmarSenha){
      alert('As senhas estão incorretas.')
      
    }
    else{
     this.authService.cadastrar(this.Usuario).subscribe((resp:Usuario) => {this.Usuario = resp})
     this.router.navigate(['/login'])
     alert("Usuario cadastrado com sucesso")      
    }
  }

}
