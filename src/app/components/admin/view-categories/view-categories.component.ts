import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
})
export class ViewCategoriesComponent implements OnInit {
  categories: any;

  constructor(private mat:MatSnackBar,private admin: AdminService, private loader: LoaderService) {}

  ngOnInit(): void {
    this.loader.changeLoader(true);
    this.admin.getCategories().subscribe(
      (categories: any) => {
        this.loader.changeLoader(false);
        console.log(categories);
        this.categories = categories;
      },
      (error) => {
        this.loader.changeLoader(false);
        console.log(error);
        this.mat.open("Error !! Try to relogin again","OK")
      }
    );
  }
}
