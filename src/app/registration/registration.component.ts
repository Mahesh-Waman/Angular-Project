import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[LoginServiceService]
})
export class RegistrationComponent implements OnInit {
  public name;userName;email;password;confirmPassword
  constructor(private _service:LoginServiceService,private _router:Router) { }

  ngOnInit() {
  }
  submitClick(){
    console.log(this.name);
    console.log(this.userName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword)
    var body={
      
      "Name": this.name,
      "userName":this.userName,
      "emailId": this.email,
      "password":this.password
    }
    this._service.insertProduct(body).subscribe(response=>{
      console.log(response)
      this._router.navigateByUrl('/login');
    })
    alert("Submitted");
  }
  loginRedirect(){
    this._router.navigateByUrl('/login');
  }
}
