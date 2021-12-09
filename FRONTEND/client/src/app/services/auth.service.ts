import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
}
