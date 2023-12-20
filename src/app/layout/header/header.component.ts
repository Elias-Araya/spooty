import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  userInfo = {
    nombre: "Testeo",
    apellido: "prueba",
  };

  constructor(private router: Router) {
    this.userInfo.nombre = localStorage.getItem("nombre")!;
    console.log("ASD", localStorage.getItem("nombre"));
  }
  logOut() {
    console.log("log gout");
    this.router.navigate(["/login"]);
  }
}
