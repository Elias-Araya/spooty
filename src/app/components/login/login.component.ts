import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  registro: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    clave: new FormControl("", Validators.required),
  });

  registroForm = new FormGroup({
    rut: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    clave: new FormControl("", Validators.required),
    nombre: new FormControl("", Validators.required),
  });

  constructor(private userSvc: UsuarioService, private route: Router) {}

  login() {
    console.log("CLICK ");
    if (this.loginForm.valid) {
      console.log("CLICK LOG");
      this.userSvc.login(this.loginForm.value).subscribe({
        next: (success: any) => {
          console.log("Login exitoso", success);
          /* this.logSucess();
            this.router.navigate(['/']); */
          localStorage.setItem("nombre", success.data);
          localStorage.setItem("email", success.email);
          this.route.navigate(["/home"]);
        },
        error: (e) => {
          console.log("Error en la wea", e);
          console.log("ERROR MENSAJE ", e.error.mensaje);
          /* this.logFailed(e.error.mensaje); */
        },
      });
    } else {
      alert("RUT O CLAVE INCORRECTOS");
    }
  }

  registrar() {
    if (this.registroForm.valid) {
      console.log("REGISTOR FOR M", this.registroForm.value);
      this.userSvc.registrar(this.registroForm.value).subscribe({
        next: (success: any) => {
          console.log("Login exitoso", success);
          /* this.logSucess();
            this.router.navigate(['/']); */
          localStorage.setItem("nombre", success.data);
          localStorage.setItem("email", success.email);
          this.route.navigate(["/home"]);
        },
        error: (e) => {
          console.log("Error en la wea", e);
          console.log("ERROR MENSAJE ", e.error.mensaje);
          alert(e.error.mensaje);
          /* this.logFailed(e.error.mensaje); */
        },
      });
    } else {
      console.log("REGISTRO INVALIDO");
    }
  }
}
