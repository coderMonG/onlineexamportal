import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor(
    private mat: MatSnackBar,
    private admin: AdminService,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.user.username == '' ||
      this.user.username == null ||
      this.user.email == '' ||
      this.user.email == null ||
      this.user.password == ''
    ) {
      return;
    }

    this.loader.changeLoader(true);
    this.admin.registerUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.loader.changeLoader(false);
        this.user = {
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        };
        this.mat.open(`User crated `, 'Login');
      },
      (error) => {
        console.log(error);
        this.loader.changeLoader(false);
        this.mat.open('Something went wrong !!', 'Try we another username');
      }
    );
  }
}
