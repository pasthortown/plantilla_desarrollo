import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options: any = {};

  constructor(private http: HttpClient) { }

  build_headers() {
    let headers: HttpHeaders = new HttpHeaders().set('token', sessionStorage.getItem('token') as string)
    this.options = {headers: headers};
  }

  login(email: string, password: string): Promise<any> {
    const data = { email: email, password: password };
    return this.http.post(environment.api_auth + 'login', JSON.stringify(data)).toPromise();
  }

  register(user: any): Promise<any> {
    const data = { userdata: user, email: user.email };
    return this.http.post(environment.api_auth + 'register', JSON.stringify(data)).toPromise();
  }

  password_recovery(email: string): Promise<any> {
    const data = { email: email };
    return this.http.post(environment.api_auth + 'recovery', JSON.stringify(data)).toPromise();
  }

  update_user_data(item_id: string, userdata: any): Promise<any> {
    this.build_headers();
    const data = { item_id: item_id, userdata: userdata };
    return this.http.post(environment.api_auth + 'admin/users/update_user_data', JSON.stringify(data), this.options).toPromise();
  }
}
