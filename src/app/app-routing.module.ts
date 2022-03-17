import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { componentFactoryName } from '@angular/compiler';
import { DeletePostagemComponent } from './delete/delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete/delete-tema/delete-tema.component';
import { EditPostagemComponent } from './edit/edit-postagem/edit-postagem.component';
import { EditUsuarioComponent } from './edit/edit-usuario/edit-usuario.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tema', component: TemaComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },  
  { path: 'perfil/:id', component: PerfilComponent },

  { path: 'edit-tema/:id', component: EditTemaComponent },
  { path: 'delete-tema/:id', component: DeleteTemaComponent },
  { path: 'edit-postagem/:id', component: EditPostagemComponent },
  { path: 'delete-postagem/:id', component: DeletePostagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
