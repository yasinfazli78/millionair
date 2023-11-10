import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginApi} from "../api/login.api";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isUserExist(email: string, password: string){
    return this.http.get(LoginApi, {
      params: {
        email: email,
        password: password,
      }
    })
  }
}
