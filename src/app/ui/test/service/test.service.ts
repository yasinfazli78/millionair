import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  getQuestion(index: number){
    return this.http.get(`assets/mock/question_${index}.json`)
  }
}
