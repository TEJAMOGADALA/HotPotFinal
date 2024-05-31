import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from '../../shared/tokenservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrl: './admin-sign-in.component.css'
})
export class AdminSignInComponent {
  constructor( private http : HttpClient, private router : Router, private location:Location, private tokenservice : TokenserviceService )
  {
  }
  ngOnInit(): void {
    this.tokenservice.clear();
    this.disableBackButton(); 
  }
  disableBackButton() {
    history.pushState(null, '', window.location.href); 
    this.location.subscribe((event) => {
      history.pushState(null, '', window.location.href);
    });
  }

  
  loginObj :  any ={
    "UserName":"",
    "Password":"",
    "Role":"",
    "Token":"",
  };
  hidepassword : boolean = false;
  onSubmit(){
    this.http.post('http://localhost:36000/api/Admin/LogIn',this.loginObj,{observe: 'response' }).subscribe({
      next:data=>{
        console.log(data)
        alert("Login Successful !")
        this.router.navigateByUrl('/adminpage')
      },
      error:err=>{
        console.log(err)
        alert("Invalid Credentials !")
      }
    })  
  }

  HidePassword(){
    this.hidepassword = !this.hidepassword;

  }
  }


