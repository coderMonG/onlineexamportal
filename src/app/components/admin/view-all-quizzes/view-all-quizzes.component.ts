import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-quizzes',
  templateUrl: './view-all-quizzes.component.html',
  styleUrls: ['./view-all-quizzes.component.css']
})
export class ViewAllQuizzesComponent implements OnInit {

  quizzes=[]

  allQuizz=[]

  categories:[]

  constructor(private admin:AdminService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.loadAllQuizzes()
    this.loadCategories()
  }


  loadAllQuizzes()
  {
    this.admin.getQuizzes().subscribe((data:any)=>{
      this.quizzes=data;
      this.allQuizz=this.quizzes;
      console.log(this.quizzes);
      
    },error=>{
      this.snack.open("Error in loading quizzes !!",'ok')
      
    })
  }

  loadCategories()
  {
    this.admin.getCategories().subscribe((data:any)=>{
      this.categories=data;
    },error=>{
      console.log(error);
      this.snack.open("Error in loading Categories !!",'ok')
    })
  }

  categoryChanged(sCId:number)
  {
    if(sCId==0)
    {
      this.quizzes=this.allQuizz;
      return;
    }
   this.quizzes=this.allQuizz.filter((a:any)=>{
     return a.category.id==sCId;
   })
  }

}
