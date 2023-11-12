import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TestApi} from "../api/test.api";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private score$ = new BehaviorSubject<any>({});
  getScore: number = 0
  setScore(score: any) {
    this.score$.next(score);
    this.getScore += score;
    debugger
  }

  constructor(private http: HttpClient) { }
  getQuestion(id: number){
    return this.http.get(TestApi + `/${id}`)
  }
}
