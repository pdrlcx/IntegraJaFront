
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] 
  
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    
  ) { }

  ngOnInit(){

    if(environment.token == ""){
       this.router.navigate(["/login"])

    }
  }

    publicar(){

    }
}
