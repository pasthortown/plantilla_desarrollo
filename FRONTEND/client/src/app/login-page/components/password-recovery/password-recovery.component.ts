import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {
  @Output('opcion') opcion: EventEmitter<string> = new EventEmitter<string>();

  email: string = '';

  errores: any[] = [];
  email_validated: boolean = false;

  constructor(private authDataService: AuthService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  change_page(opcion: string) {
    this.opcion.emit(opcion);
  }

  validate_email(): boolean {
    this.errores = [];
    this.email_validated = false;
    if (this.email == '') {
      this.errores.push( { title: 'Correo Electrónico Incorrecto', message: 'Debe ingresar el Correo Electrónico'} );
      this.email_validated = false;
      return false;
    }
    const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email.toString());
    if (!isOk) {
      this.errores.push( { title: 'Correo Electrónico Incorrecto', message: 'El Correo Electrónico no se encuentra escrito correctamente'} );
    }
    this.email_validated = isOk;
    return isOk;
  }

  show_alert(title: string, message: string, icon: SweetAlertIcon): Promise<any> {
    return Swal.fire({
      title: title,
      html: message,
      icon: icon,
    });
  }

  password_recovery() {
    this.validate_email();
    if (this.errores.length > 0) {
      this.errores.forEach((error: any) => {
        this.toastr.error(error.message, error.title);
      });
      return;
    }
    this.spinner.show();
    this.authDataService.password_recovery(this.email).then( r => {
      this.spinner.hide();
      if (r.status == 200) {
        this.show_alert('Recuperar Contraseña', r.response, 'info').then( response => {
          this.change_page('Autenticación');
        });
      } else {
        this.show_alert('Recuperar Contraseña', r.response, 'error').then( response => {
          this.email = '';
          this.email_validated = false;
        });
      }
    }).catch( e => { console.log(e); });
  }
}
