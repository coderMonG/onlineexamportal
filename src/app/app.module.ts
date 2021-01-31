import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthGuardService } from './services/auth-guard.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  AuthInterceptor,
  authInterceptorProviders,
} from './services/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminService } from './services/admin.service';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { MatList, MatListModule } from '@angular/material/list';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { MatRippleModule } from '@angular/material/core';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { MatSelectModule } from '@angular/material/select';
import { ViewAllQuizzesComponent } from './components/admin/view-all-quizzes/view-all-quizzes.component';
import { ViewQuestionsComponent } from './components/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { QuizStartComponent } from './components/user/quiz-start/quiz-start.component';
import { OnGoingQuizComponent } from './components/user/on-going-quiz/on-going-quiz.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RegisterComponent } from './components/user/register/register.component';
import { ForgotpassComponent } from './components/user/forgotpass/forgotpass.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    LoaderComponent,

    SidebarComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    AddQuizComponent,
    ViewAllQuizzesComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UserDashboardComponent,
    QuizStartComponent,
    OnGoingQuizComponent,
    RegisterComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    CKEditorModule,
  ],
  providers: [
    AdminService,
    LoginService,
    AuthGuardService,
    [authInterceptorProviders],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
