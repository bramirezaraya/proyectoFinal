import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalIComponent } from './principal-i/principal-i.component';
import { ArtistasIiComponent } from './artistas-ii/artistas-ii.component';
import { NoticiasIiiComponent } from './noticias-iii/noticias-iii.component';
import { TeamIvComponent } from './team-iv/team-iv.component';
import { MatDividerModule } from '@angular/material/divider';

import{HttpClientModule} from '@angular/common/http';
import { InformacionArtistasComponent } from './informacion-artistas/informacion-artistas.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalIComponent,
    ArtistasIiComponent,
    NoticiasIiiComponent,
    TeamIvComponent,
    InformacionArtistasComponent,
  ],
  imports: [
    BrowserModule, MatDividerModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
