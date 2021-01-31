import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from './../../../services/loader.service';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qid:number
  qTitle:string
  questions=[];
  
  constructor(private mat:MatSnackBar,private loader:LoaderService,private route:ActivatedRoute,private admin:AdminService) { }

  ngOnInit(): void {
    this.qid=this.route.snapshot.params.qid;
    this.qTitle=this.route.snapshot.params.title;
    this.getQuestionsByCategory()
  }

  getQuestionsByCategory()
  {
    this.loader.changeLoader(true)
    this.admin.getQuestionsByQuiz(this.qid).subscribe((questions:Array<any>)=>{
      console.log(questions);
      this.questions=questions
      this.loader.changeLoader(false)
    },error=>{
      console.log(error);
      this.loader.changeLoader(false)
      
      
    })
  }


  //delete questions
  deleteQuestion(qid)
  {

    this.loader.changeLoader(true)
    this.admin.deleteQuestion(qid).subscribe((result)=>{
      this.loader.changeLoader(false);
      this.mat.open("Question is deleted successfully ",'ok')
      console.log(result);
      
      this.questions=this.questions.filter((item)=> item.questionId!=qid)
    },error=>{

      this.loader.changeLoader(false)
      console.log(error);
     
    })

  }
}
