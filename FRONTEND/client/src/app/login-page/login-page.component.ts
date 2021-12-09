import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  opcion_seleccionada: string = 'Autenticación';
  ws_assets: string = environment.ws_assets + 'login/';
  ayuda_url: string = environment.ayuda_url;

  constructor() { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

}
