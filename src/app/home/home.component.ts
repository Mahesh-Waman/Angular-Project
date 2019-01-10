import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title;
  constructor(private _router:Router) { }

  ngOnInit() {
   this.title= sessionStorage.getItem("LoginUser");
  }
  backClick(){
    this._router.navigateByUrl('/login');
  }

}
