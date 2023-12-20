import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { BandaService } from "src/app/service/banda.service";
import { UsuarioService } from "src/app/service/usuario.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  perfilForm: FormGroup;
  id_usuario: any;

  constructor(private fb: FormBuilder, private userSvc: UsuarioService, private bandaSvc: BandaService) {
    this.perfilForm = this.fb.group({
      nombre: new FormControl("", Validators.required),
      generoMusical: new FormControl("", Validators.required),
      anioFormacion: new FormControl("", Validators.required),
      biografia: new FormControl("", Validators.required),
    });
  }
  ngOnInit(): void {
    let email = { email: localStorage.getItem("email") };
    console.log("EMAIL ", email);
    this.userSvc.listar(email).subscribe({
      next: (success: any) => {
        console.log("Login exitoso", success);
        /* this.logSucess();
          this.router.navigate(['/']); */
        localStorage.setItem("id_usuario", success.data);
        this.id_usuario = success.data;
        this.obtenerBanda();
      },
      error: (e) => {
        console.log("Error en la wea", e);
        console.log("ERROR MENSAJE ", e.error.mensaje);
        /* this.logFailed(e.error.mensaje); */
      },
    });
  }

  obtenerBanda() {
    let obj = {
      id_usuario: this.id_usuario,
    };
    console.log("OBJ ", obj);
    this.bandaSvc.obtenerBanda(obj).subscribe({
      next: (success: any) => {
        console.log("Banda obtenida exitosamente", success);
        if (success.data) {
          this.perfilForm.get("nombre")?.setValue(success.data.nombre);
          this.perfilForm.get("generoMusical")?.setValue(success.data.genero);
          this.perfilForm.get("anioFormacion")?.setValue(success.data.fecha_formacion);
          this.perfilForm.get("biografia")?.setValue(success.data.biografia);
        }
      },
      error: (e) => {
        console.log("Error en la wea", e);
        console.log("ERROR MENSAJE ", e.error.mensaje);
        /* this.logFailed(e.error.mensaje); */
      },
    });
  }
  guardarBanda() {
    if (this.perfilForm.valid) {
      console.log("PERFIL ", this.perfilForm.value);
      let obj = {
        ...this.perfilForm.value,
        id_usuario: this.id_usuario,
      };

      this.bandaSvc.crearBanda(obj).subscribe({
        next: (success: any) => {
          console.log("Login exitoso", success);
          /* this.logSucess();
            this.router.navigate(['/']); */
          alert("Configuracion guardada exitosamente");
        },
        error: (e) => {
          console.log("Error en la wea", e);
          console.log("ERROR MENSAJE ", e.error.mensaje);
          /* this.logFailed(e.error.mensaje); */
        },
      });
    }
  }
}
