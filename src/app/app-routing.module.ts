import { QuizStartComponent } from './components/user/quiz-start/quiz-start.component';
import { HomeGuard } from './services/home.guard';
import { UserGuardGuard } from './services/user-guard.guard';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { ViewQuestionsComponent } from './components/admin/view-questions/view-questions.component';
import { ViewAllQuizzesComponent } from './components/admin/view-all-quizzes/view-all-quizzes.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminCheckGuard } from './services/admin-check.guard';
import { AuthGuardService } from './services/auth-guard.service';
import { OnGoingQuizComponent } from './components/user/on-going-quiz/on-going-quiz.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ForgotpassComponent} from './components/user/forgotpass/forgotpass.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
  },
  {
    path: 'forgotpass',
    component: ForgotpassComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
  },
  {
    path: 'dashboard/add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },
  {
    path: 'dashboard/view-categories',
    component: ViewCategoriesComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },
  {
    path: 'dashboard/add-quiz',
    component: AddQuizComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },
  {
    path: 'dashboard/quizzes',
    component: ViewAllQuizzesComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },
  {
    path: 'dashboard/quiz/questions/:qid/:title',
    component: ViewQuestionsComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },
  {
    path: 'dashboard/add-question/:qid',
    component: AddQuestionComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },
  {
    path: 'user/:id/:title',
    component: UserDashboardComponent,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'user/quiz/start/:qid',
    component: QuizStartComponent,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'user/quiz/ongoing/:qid',
    component: OnGoingQuizComponent,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService, AdminCheckGuard],
  },

  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
