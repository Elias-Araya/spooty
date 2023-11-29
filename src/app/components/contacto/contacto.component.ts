import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"],
})
export class ContactoComponent {
  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nombre: new FormControl("", Validators.required),
      generoMusical: new FormControl("", Validators.required),
      anioFormacion: new FormControl("", Validators.required),
      biografia: new FormControl("", Validators.required),
    });
  }
}
