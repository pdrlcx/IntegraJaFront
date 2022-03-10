import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './tema/tema.component';
import { DeletePostagemComponent } from './delete/delete-postagem/delete-postagem.component';
import { EditPostagemComponent } from './edit/edit-postagem/edit-postagem.component';
import { EditTemaComponent } from './edit/edit-tema/edit-tema.component';
import { DeleteTemaComponent } from './delete/delete-tema/delete-tema.component';
import { EditUsuarioComponent } from './edit/edit-usuario/edit-usuario.component';

FormsModule;
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    TemaComponent,
    DeletePostagemComponent,
    EditPostagemComponent,
    EditTemaComponent,
    DeleteTemaComponent,
    EditUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
