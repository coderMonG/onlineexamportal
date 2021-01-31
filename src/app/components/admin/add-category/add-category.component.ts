import { LoaderService } from './../../../services/loader.service';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = { title: '', description: '' };

  constructor(
    private snack: MatSnackBar,
    private admin: AdminService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {}
  submitForm() {
    if (
      this.category.title != '' &&
      this.category.description != '' &&
      this.category.title != null &&
      this.category.description != null
    ) {
      //alert(submit the form)
      this.loader.changeLoader(true);
      this.admin.addCategory(this.category).subscribe(
        (data: any) => {
          this.loader.changeLoader(false);
          this.snack.open('Category is added successfully !!', 'ok');
        },
        (error) => {
          this.loader.changeLoader(false);
          this.snack.open('Something went wrong !!', 'ok');
        }
      );
    } else {
      this.snack.open('Values are required !!', 'ok');
    }
  }
}
