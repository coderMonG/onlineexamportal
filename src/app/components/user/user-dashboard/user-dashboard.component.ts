import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  categories=[]
  givenCId:any;
  givenCTitle:any="Quizzes";

  quizzez:any;

  home=false;

  loading=false
  constructor(private admin:AdminService,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    
    this.loadCategories()
   
    this.activatedRoute.params.subscribe(param=>{
      this.givenCId=this.activatedRoute.snapshot.params.id;
      this.givenCTitle=this.activatedRoute.snapshot.params.title;
      if(this.givenCId==0)
      {
        this.getAllQuizzes()
      }else if (this.givenCId>0){
        this.loadQuizOfCategory()
      }else
      {
        this.home=true
      }



    })
  }

  loadCategories()
  {
    this.admin.getCategories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories)
    },error=>{
      console.log(error)
    })
  }

  loadQuizOfCategory(){
    this.loading=true
    this.admin.getQuizOfCategory(this.givenCId).subscribe((data)=>{
      console.log(data);
      this.quizzez=data;
      this.loading=false
      
    },error=>{
      console.log(error);
      this.loading=false
    })
  }
  getAllQuizzes(){
    this.loading=true
    this.admin.getAllQuizzes().subscribe((data)=>{
      console.log(data);
      this.quizzez=data;
      this.loading=false
      
    },error=>{
      console.log(error);
      this.loading=false
    })
  }

}
