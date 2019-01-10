import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers:[LoginServiceService]
})
export class LoginpageComponent implements OnInit {

  public uName;
  public uPassword;
  public loginName;
  constructor(private _service:LoginServiceService,private _router:Router) { }

  ngOnInit() {
  }

  loginClick(){
    console.log(this.uName);
    this._service.getProduct(this.uName).subscribe(response =>{
      debugger;
      console.log(response);
      // if(response.length==1){
      //   if(response.userName==this.uName && response.password==this.uPassword){
      //     alert("Login Successfully");
      //   }
      //   else{
      //     alert("Please Enter Valid user name and password");
      //   }
      // }
      // else if(response.length>1){
        for(let i=0;i<response.length;i++){
          if(response[i].userName==this.uName && response[i].password==this.uPassword){
            alert("Login Successfully");
            this.loginName=response[i].Name;
            sessionStorage.setItem("LoginUser",this.loginName);
            this._router.navigateByUrl('/Home');
            return true;
           
          }
          else{
            if((response.length-1)==i){
              alert("Please Enter Valid user name and password");
              return false;
            }
            
          }
        }
      // }
      
    },
    error=>console.log(error)
    )
  }
  createNew(){
    // alert("clicked");
    this._router.navigateByUrl('/registration');
  }
}
