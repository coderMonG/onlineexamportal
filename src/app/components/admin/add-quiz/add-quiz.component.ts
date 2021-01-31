import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from './../../../services/loader.service';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  quiz: any = {
    category: {},
    active: false,
  };

  selectedCategoryId: any;

  categories: [];

  constructor(
    private admin: AdminService,
    private loader: LoaderService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  categoryChanged(event) {
    // alert(this.quiz.category)
    this.quiz.category['id'] = this.quiz.selectedCid;
  }

  loadCategories() {
    this.loader.changeLoader(true);
    this.admin.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
        // console.log(this.categories);
        this.loader.changeLoader(false);
      },
      (error) => {
        this.loader.changeLoader(false);
        console.log(error);
        this.snack.open('Something went wrong !! Try to re login !!');
      }
    );
  }
  //add the quiz
  submitForm() {
    if (this.quiz.title == null && this.quiz.content == null) {
      this.snack.open('Quiz title and description is must !!', 'Enter');
      return;
    }

    this.loader.changeLoader(true);
    this.admin.addQuiz(this.quiz).subscribe(
      (data) => {
        this.loader.changeLoader(false);
        console.log(data);

        this.snack.open('Quiz is added successfully', 'View');
        this.quiz = {
          category: {},
          active: false,
        };
      },
      (error) => {
        this.loader.changeLoader(false);
        console.log(error);
        this.snack.open('Error !! try again after some time ', 'ok');
      }
    );
  }
}
