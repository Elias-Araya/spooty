import { Component } from "@angular/core";

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

  logOut() {
    console.log("log gout");
  }
}
