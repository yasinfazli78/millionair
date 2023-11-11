import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TestService} from "../../service/test.service";
import {QuestionModel} from "../../model/question.model";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
   questionModel!: QuestionModel;
   id: number = 1;
   showAnswer: boolean = false;


  constructor(private _snackBar: MatSnackBar, private testService: TestService, ) {
  }

  ngOnInit(): void {
    this.getQs(this.id);
  }


  getQs(index: number) {
    this.testService.getQuestion(index).pipe().subscribe(
      {
        next: (result: any) => {
          this.questionModel = result;
        }
      }
    );
  }

  getAnswer(isCorrect: boolean, point: number) {
    this.showAnswer = true;
    this.testService.setScore(isCorrect ? point : 0)
  }

  next() {
    this.showAnswer = false;
    this.id++;
    this.getQs(this.id);
  }

  previous() {
    this.showAnswer = false;
    this.id--;
    this.getQs(this.id);
  }
}
