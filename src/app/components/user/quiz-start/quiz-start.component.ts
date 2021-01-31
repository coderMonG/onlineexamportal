import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css'],
})
export class QuizStartComponent implements OnInit {
  paramQId: any;
  quiz: any;

  constructor(
    private admin: AdminService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.paramQId = this.activatedRoute.snapshot.params.qid;
    console.log(this.paramQId);
    this.loadQuiz();
  }

  loadQuiz() {
    this.admin.getQuizById(this.paramQId).subscribe(
      (quiz) => {
        this.quiz = quiz;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  start() {
    let b = confirm('want to start quiz?');
    if (b) {
      this.route.navigate(['/user/quiz/ongoing/' + this.quiz.quizId]);
    }
  }
}
