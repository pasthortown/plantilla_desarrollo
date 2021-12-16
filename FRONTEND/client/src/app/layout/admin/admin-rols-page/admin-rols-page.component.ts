import { ToastrService } from 'ngx-toastr';
import { CatalogService } from 'src/app/services/catalog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-rols-page',
  templateUrl: './admin-rols-page.component.html',
  styleUrls: ['./admin-rols-page.component.scss']
})
export class AdminRolsPageComponent implements OnInit {
  new_rol: any = {
    nombre: ''
  };
  rol_selected: any = {};
  editing: boolean = false;
  rols: any[] = [];

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService,private catalogDataService: CatalogService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.new_rol.nombre = '';
    this.editing = false;
    this.get_rols();
  }

  select_rol(rol: any) {
    this.rol_selected = rol;
  }

  get_rols() {
    this.rols = [];
    let output_model: any = {
      nombre: 1
    };
    this.catalogDataService.get_items('rols', output_model).then( r => {
      if (r.status == 200) {
        this.rols = r.response;
      }
    }).catch( e => { console.log(e); });
  }

  save_new_rol() {
    this.spinner.show();
    this.catalogDataService.upload_items('rols', [this.new_rol]).then( r => {
      this.spinner.hide();
      this.toastr.success('Rol Guardado Correctamente', 'Guardar Rol');
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  delete_rol(rol: any) {
    this.spinner.show();
    this.catalogDataService.delete_item('rols', rol.item_id).then( r => {
      this.spinner.hide();
      this.toastr.success('Rol Eliminado Correctamente', 'Eliminar Rol');
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  update_rol(rol: any) {
    this.spinner.show();
    this.catalogDataService.update_item('rols', rol.item_id, rol).then( r => {
      this.spinner.hide();
      this.toastr.success('Rol Actualizado Correctamente', 'Actualizar Rol');
      this.refresh();
    }).catch( e => { console.log(e); });
  }

  edit_rol() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.refresh();
    }
  }
}
