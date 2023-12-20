import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AlbumService } from "src/app/service/album.service";

@Component({
  selector: "app-guardar-album",
  templateUrl: "./guardar-album.component.html",
  styleUrls: ["./guardar-album.component.scss"],
})
export class GuardarAlbumComponent {
  @Input() id_banda: any;
  albumForm = new FormGroup({
    titulo: new FormControl("", Validators.required),
    fecha_lanzamiento: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
  });

  constructor(public activeModal: NgbActiveModal, private albumSvc: AlbumService) {}

  ngOnInit(): void {}

  agregar() {
    if (this.albumForm.valid) {
      console.log("THIS FORM ", this.albumForm.value);
      let obj = { ...this.albumForm.value, id_banda: this.id_banda };
      this.albumSvc.crearAlbum(obj).subscribe({
        next: (success: any) => {
          console.log("Album creado exitosamente", success);
          /* this.logSucess();
            this.router.navigate(['/']); */
          delete obj.id_banda;
          this.activeModal.close({ estado: true, data: obj });
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
