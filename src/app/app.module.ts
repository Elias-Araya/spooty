import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "./components/login/login.component";
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { AlbumesComponent } from "./components/albumes/albumes.component";
import { CancionesComponent } from "./components/canciones/canciones.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { HttpClientModule } from "@angular/common/http";
import { GuardarAlbumComponent } from "./components/modals/guardar-album/guardar-album.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AlbumesComponent,
    CancionesComponent,
    ContactoComponent,
    GuardarAlbumComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, MatIconModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
