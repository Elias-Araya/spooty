import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ContactoService } from "src/app/service/contacto.service";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"],
})
export class ContactoComponent implements OnInit {
  contactoForm: FormGroup;
  id_usuario: any;

  constructor(private fb: FormBuilder, private contactoSvc: ContactoService) {
    this.contactoForm = this.fb.group({
      asunto: new FormControl("", Validators.required),
      estado: new FormControl("", Validators.required),
      mensaje: new FormControl("", Validators.required),
    });
    this.id_usuario = localStorage.getItem("id_usuario");
  }

  ngOnInit(): void {
    /* this.contactoSvc.login(this.loginForm.value).subscribe({
      next: (success: any) => {
        console.log("Login exitoso", success);
      },
      error: (e) => {
        console.log("Error en la wea", e);
        console.log("ERROR MENSAJE ", e.error.mensaje);
      },
    }); */
    console.log("THIS ID ", this.id_usuario);
    let obj = {
      id_usuario: this.id_usuario,
    };
    this.contactoSvc.obtenerContacto(obj).subscribe({
      next: (success: any) => {
        console.log("SUCCES ", success);

        this.contactoForm.get("asunto")?.setValue(success.data.asunto);
        this.contactoForm.get("estado")?.setValue(success.data.estado);
        this.contactoForm.get("mensaje")?.setValue(success.data.mensaje);
      },
      error: (e) => {
        console.log("Error en la wea", e);
        console.log("ERROR MENSAJE ", e.error.mensaje);
      },
    });
  }

  guardarContacto() {
    if (this.contactoForm.valid) {
      let obj = {
        ...this.contactoForm.value,
        id_usuario: this.id_usuario,
      };
      console.log("ENTRE ACA", obj);
      console.log("OBJETO A MADNDr ", this.contactoForm.value);
      this.contactoSvc.crearContacto(obj).subscribe({
        next: (success: any) => {
          console.log("CONTACTO CREADO EXITOSAMENTE", success);
          alert("Contacto guardado exitosamente");
        },
        error: (e) => {
          console.log("Error en la wea", e);
          console.log("ERROR MENSAJE ", e.error.mensaje);
        },
      });
    }
  }
}
