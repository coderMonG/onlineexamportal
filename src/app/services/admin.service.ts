import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //get the categories
  getCategories() {
    return this.http.get(`${baseUrl}/admin/get-categories`);
  }
  //add new category service
  addCategory(category: any) {
    return this.http.post(`${baseUrl}/admin/add-category`, category);
  }

  //adding new quiz to server
  addQuiz(quiz: any) {
    return this.http.post(`${baseUrl}/admin/add-quiz`, quiz);
  }
  //load all the quizzes

  getQuizzes() {
    return this.http.get(`${baseUrl}/admin/get-quizzes`);
  }

  //get the questions by category

  getQuestionsByQuiz(qid) {
    return this.http.get(`${baseUrl}/admin/questions-of-quiz/${qid}`);
  }

  //add new questions
  addQuestion(question) {
    return this.http.post(`${baseUrl}/admin/add-question`, question);
  }

  deleteQuestion(qid) {
    return this.http.delete(`${baseUrl}/admin/question/${qid}`);
  }
  //get the questions of the quiz
  getQuestionsOfQuiz(qid) {
    return this.http.get(`/admin/questions-of-quiz`);
  }

  //get quiz of the category

  getQuizOfCategory(cid) {
    return this.http.get(`${baseUrl}/admin/quiz-of-category/${cid}`);
  }

  //get all quizzes

  getAllQuizzes() {
    return this.http.get(`${baseUrl}/admin/get-quizzes`);
  }

  //get quiz by id
  getQuizById(qid) {
    return this.http.get(`${baseUrl}/admin/quiz/${qid}`);
  }

  //register user
  registerUser(user) {
    return this.http.post(`${baseUrl}/user/register`, user);
  }
}
