import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-postagem',
  templateUrl: './edit-postagem.component.html',
  styleUrls: ['./edit-postagem.component.css'],
})
export class EditPostagemComponent implements OnInit {
  postagem: Postagem = new Postagem();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
  ) {}

  ngOnInit(): void {
    window.scroll(0,0);

    if (environment.token == '') {
      this.router.navigate(['/login']);
    }

    let id = this.route.snapshot.params['id'];
    this.findByIdPostagem(id);
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    });
  }

  atualizar() {
    this.postagemService
      .putPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        alert('Postagem atualizada com sucesso!');
        this.router.navigate(['/inicio']);
      });
  }
}
