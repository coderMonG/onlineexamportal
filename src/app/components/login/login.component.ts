import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { LoaderService } from 'src/app/services/loader.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   credentials={username:"", password:""}
 

  constructor(private admin:AdminService,private login:LoginService,private loader:LoaderService,private mat_snack:MatSnackBar) { }

  ngOnInit(): void {
    
  }

  //form submit
  onSubmit()
  {
    if((this.credentials.username!=''&&this.credentials.password!='')&&(this.credentials.username!=null&&this.credentials.password!=null))
    {
      //try lo login by calling to web services
      this.loader.changeLoader(true);
      this.login.generateAndSaveToken(this.credentials.username,this.credentials.password).subscribe(
        (res:any)=>{
          // console.log(res.token)       
          this.login.loginUser(res.token)   
          
          this.admin.getCurrentUser().subscribe(
           ( user:any)=>{
                this.login.setUser(user)
                this.loader.changeLoader(false)
                console.log(this.login.getUser());
                if(this.login.getUserRole()=='ROLE_ADMIN')
                {
                  window.location.href="/dashboard"
                }else if(this.login.getUserRole()=='ROLE_NORMAL')
                {
                    window.location.href="/user/0/all"
                }
                
            },error=>{
                this.loader.changeLoader(false)
                this.mat_snack.open("Unable to fetch user ")
                this.login.logout()
            }
          )
  
        
        },
        error=>{

          this.loader.changeLoader(false)
          console.log(error)
          if(error.status==0)
          {
            this.mat_snack.open("Check your internet connection !!","OK",{
              duration:10000
            })
          }else{
            this.mat_snack.open("Invalid Crendentials","OK",{
              duration:10000
            })
          }
         
        }
      )
    }
  }
  //reset form
  resetForm()
  {
    alert("resetting")
    this.credentials.password='';
    this.credentials.password='';
  }

  
}
