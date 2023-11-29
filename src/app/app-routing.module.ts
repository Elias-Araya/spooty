import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { CancionesComponent } from "./components/canciones/canciones.component";
import { AlbumesComponent } from "./components/albumes/albumes.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "albumes", component: AlbumesComponent },
  { path: "canciones", component: CancionesComponent },
  { path: "contacto", component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
