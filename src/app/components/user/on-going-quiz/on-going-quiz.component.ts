// import { LocationStrategy } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { AdminService } from 'src/app/services/admin.service';
// import { LoaderService } from 'src/app/services/loader.service';

// @Component({
//   selector: 'app-on-going-quiz',
//   templateUrl: './on-going-quiz.component.html',
//   styleUrls: ['./on-going-quiz.component.css'],
// })
// export class OnGoingQuizComponent implements OnInit {
//   quizId: any;
//   questions: any
//   timer: any;

//   marksGot = 0;
//   correctAnswers = 0;
//   attempted = 0;
//   result:"Sorry";

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private admin: AdminService,
//     private loader: LoaderService,
//     private locationStrategy: LocationStrategy
//   ) {}

//   ngOnInit(): void {
//     this.quizId = this.activatedRoute.snapshot.params.qid;
//     console.log(this.quizId);
//     this.loadQuestions();
//   }

//   loadQuestions() {
//     this.loader.changeLoader(true);
//     this.admin.getQuestionsByQuiz(this.quizId).subscribe(
//       (questions) => {
//         console.log(questions);
//         this.questions = questions;
//         this.questions.forEach((e) => {
//           e['givenAnswer'] = '';
//         });
//         this.loader.changeLoader(false);
//         this.timer = this.questions.length * 1 * 60;
//         this.getFormattedTime();
//         this.preventBackButton();
//         this.startTimer();
//       },
//       (error) => {
//         console.log(error);
//         this.loader.changeLoader(false);
//       }
//     );
//   }
//   startTimer() {
//     let r = window.setInterval(() => {
//       if (this.timer == 0) {
//         clearInterval(r);
//       } else {
//         this.timer--;
//       }
//     }, 1000);
//   }

//   preventBackButton() {
//     history.pushState(null, null, location.href);
//     this.locationStrategy.onPopState(() => {
//       history.pushState(null, null, location.href);
//     });
//   }

//   getFormattedTime() {
//     let minutes = Math.floor(this.timer / 60);
//     let seconds = this.timer - minutes * 60;
//     return `${minutes} min : ${seconds} sec`;
//   }

//   submitQuiz() {
//     let ch = confirm('Are you sure , want to submit quiz? ');
//     if (ch) {
//       this.loader.changeLoader(true);
//       console.log(this.questions);
//       this.questions.forEach((q) => {
//         if (q.answer == q.givenAnswer) {
//           // this.correctAnswers++;
//           this.correctAnswers++;
//           this.marksGot +=
//             this.questions[0].quiz.maxMarks / this.questions.length;
//         }
//         // if (q.givenAnswer != '') {
//         //   this.attempted++;
//         // }
//         if (q.givenAnswer != '') {
//           this.attempted++;
//         }
//         if(this.marksGot >=(0.4*this.questions[0].quiz.maxMarks))
//             this.result = "Pass";
//       });

//       // console.log('conrrct answers : ', this.correctAnswers);
//       // console.log('Marks GOT : ', this.marksGot);
//       // console.log('Attempted : ', this.attempted);
//       // console.log('Result : ',  );
//       console.log('conrrct answers : ',this.correctAnswers);
//       console.log('Marks GOT : ',this.marksGot);
//       console.log('Attempted : ',this.attempted );
//       console.log('Result : ', this.result);

//       this.loader.changeLoader(false);
//     } else {
//     }
//   }

//   // print() {
//   //   window.print();
//   // }
//  }
//-------------------------------------------------------------------

import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminService } from 'src/app/services/admin.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-on-going-quiz',
  templateUrl: './on-going-quiz.component.html',
  styleUrls: ['./on-going-quiz.component.css'],
})
export class OnGoingQuizComponent implements OnInit {
  quizId: any;
  questions: any;
  timer: any;

  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  result = "Sorry! Try for Next Attempt.";
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private admin: AdminService,
    private loader: LoaderService,
    private locationStrategy: LocationStrategy
  ) {}

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params.qid;
    console.log(this.quizId);
    this.loadQuestions();
  }

  loadQuestions() {
    this.loader.changeLoader(true);
    this.admin.getQuestionsByQuiz(this.quizId).subscribe(
      (questions) => {
        console.log(questions);
        this.questions = questions;
        this.questions.forEach((e) => {
          e['givenAnswer'] = '';
        });
        this.loader.changeLoader(false);
        this.timer = this.questions.length * 0.25 * 60;  //Time change logic
        this.getFormattedTime();
        this.preventBackButton();
        this.startTimer();
      },
      (error) => {
        console.log(error);
        this.loader.changeLoader(false);
      }
    );
  }
  startTimer() {
    let r = window.setInterval(() => {
      if (this.timer == 0) {
        this.submitQuiz();
        clearInterval(r);
      } else {
        this.timer--;
      }
    }, 1000);
  }

  preventBackButton() {
    history.pushState(null, null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    });
  }

  getFormattedTime() {
    let minutes = Math.floor(this.timer / 60);
    let seconds = this.timer - minutes * 60;
    //return `${minutes} min : ${seconds} sec`;
    return (minutes+" : "+seconds);
  }

  submitQuiz() {
    let ch = confirm('Are you sure , want to submit quiz? ');
    if (ch) {
      this.loader.changeLoader(true);
      console.log(this.questions);
      this.questions.forEach((q) => {
        if (q.answer == q.givenAnswer) {
          this.correctAnswers++;
          this.marksGot +=
            this.questions[0].quiz.maxMarks / this.questions.length;
        }
        if (q.givenAnswer != '') {
          this.attempted++;
        }
        if(this.marksGot>=(0.4*this.questions[0].quiz.maxMarks))
          
            this.result="PASS";
          
      });

      // console.log('conrrct answers ', this.correctAnswers);
      // console.log('Marks GOT ', this.marksGot);
      // console.log('Attempted ', this.attempted);
      console.log('Rsult ',this.result);

      this.loader.changeLoader(false);
    } else {
    }
  }

  print() {
    window.print();
  }
}