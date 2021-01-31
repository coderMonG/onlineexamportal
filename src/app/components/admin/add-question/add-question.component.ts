import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  qid: number;
  question = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };
  public Editor = ClassicEditor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private admin: AdminService,
    private mat: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qid = this.activatedRoute.snapshot.params.qid;
    this.question.quiz['quizId'] = this.qid;
    this.Editor;
  }
  addQuestion() {
    //checks
    if (this.question.content == '' && this.question.answer == '') {
      return;
    }

    this.admin.addQuestion(this.question).subscribe(
      (data: any) => {
        this.question = {
          quiz: {},
          content: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          answer: '',
        };
        this.question.quiz['quizId'] = this.qid;
        this.mat.open(`Question is added succesfully`, 'OK');
      },
      (error) => {
        this.mat.open('Something went wrong !!', 'OK');
      }
    );
  }
}
