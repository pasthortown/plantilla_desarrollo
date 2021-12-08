import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output('opcion') opcion: EventEmitter<string> = new EventEmitter<string>();
  email: string = '';
  password: string = '';

  constructor( private authDataService: AuthService,
               private spinner: NgxSpinnerService,
               private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  change_page(opcion: string) {
    this.opcion.emit(opcion);
  }

  login() {

    this.authDataService.login(this.email, this.password).then( r => {
      console.log(r);
    }).catch( e => { console.log(e); });
  }
}
