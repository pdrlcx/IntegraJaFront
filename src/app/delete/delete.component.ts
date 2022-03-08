import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  postagem: Postagem = new Postagem()
  idPost: number
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)
    
    if(environment.token == ""){
      this.router.navigate(["/login"])

    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)

  }
  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }
  
  apagar() {
    this.postagemService.deletePostagem(this.idPost).subscribe(() => {
      alert('Postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }
  }
