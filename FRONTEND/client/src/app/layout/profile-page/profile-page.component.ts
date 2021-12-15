import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: any = {};
  password_confirm: string = '';
  new_password: string = '';
  password_min_length: number = 8;
  password_caracteres_numericos: boolean = true;
  password_caracteres_especiales: boolean = true;
  password_caracteres_mayusculas: boolean = true;
  password_caracteres_minusculas: boolean = true;

  errores: string[] = [];

  constructor(private authDataService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.password_confirm = '';
    this.new_password = '';
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
  }

  save_profile() {
    if (this.errores.length !== 0) {
      return;
    }
    let toSave: any = {
      fullname: this.user.fullname
    };
    if (this.new_password != '') {
      toSave.password = this.new_password;
    }
    this.authDataService.update_user_data(this.user.item_id, toSave).then( r => {
      Swal.fire({
        title: 'Actualización de Datos',
        html: 'Datos Guardados Correctamente, por favor inicie sesión nuevamente.',
        icon: 'success'
      }).then( (r: any) => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      });
    }).catch( e => { console.log(e); })
  }

  validate_password() {
    this.errores = [];
    if (this.new_password !== this.password_confirm) {
      this.errores.push('Las contraseñas no coinciden');
    }
    if (this.new_password.length < this.password_min_length) {
      this.errores.push('Longitud mínima de 8 caracteres');
    }
    let validated_password_caracteres_numericos = false;
    let validated_password_caracteres_especiales = false;
    let validated_password_caracteres_mayusculas = false;
    let validated_password_caracteres_minusculas = false;
    this.new_password.split('').forEach(element => {
      if (element.match('[0-9]')) {
        validated_password_caracteres_numericos = true;
      }
      if (element.match('[^A-Za-z0-9]')) {
        validated_password_caracteres_especiales = true;
      }
      if (element.match('[A-Z]')) {
        validated_password_caracteres_mayusculas = true;
      }
      if (element.match('[a-z]')) {
        validated_password_caracteres_minusculas = true;
      }
    });
    if (this.password_caracteres_numericos) {
      if (!validated_password_caracteres_numericos) {
        this.errores.push('Debe contener al menos un número');
      }
    }
    if (this.password_caracteres_especiales) {
      if (!validated_password_caracteres_especiales) {
        this.errores.push('Debe contener al menos un caracter especial');
      }
    }
    if (this.password_caracteres_mayusculas) {
      if (!validated_password_caracteres_mayusculas) {
        this.errores.push('Debe contener al menos una letra mayúscula');
      }
    }
    if (this.password_caracteres_minusculas) {
      if (!validated_password_caracteres_minusculas) {
        this.errores.push('Debe contener al menos una letra minúscula');
      }
    }
  }
}
