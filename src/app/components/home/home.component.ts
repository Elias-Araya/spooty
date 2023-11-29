import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
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
