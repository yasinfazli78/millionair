import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {registerApi} from "../api/register.api";
import {RegisterModel} from "../model/register.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postUser(body: RegisterModel){
    return this.http.post(registerApi, body);
  }
}
