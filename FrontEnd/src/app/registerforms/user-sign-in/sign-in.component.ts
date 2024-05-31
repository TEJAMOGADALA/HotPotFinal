import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdtologinService } from '../../shared/userdtologin.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenserviceService } from '../../shared/tokenservice.service';
import { Location } from '@angular/common';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class SignInComponent {
  constructor(
    public objservice: UserdtologinService,
    private http: HttpClient,
    private router: Router,
    private tokenservice: TokenserviceService,
    private location: Location
  ) {}

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

  loginObj: any = {
    "UserName": "",
    "Password": "",
    "Role": "",
    "Token": "",
  };

  hidepassword: boolean = false;

  onSubmit() {
    this.http.post<any>('http://localhost:36000/api/Customer/LogIn', this.loginObj, { observe: 'response' }).subscribe({
      next: data => {
        console.log(data['body']);
        const decodedToken = jwtDecode(data['body'].token); // Corrected usage with import *
        // const userRole = decodedToken.role; // Extract the role from the decoded token
        this.tokenservice.addToken(data['body'].token, data['body'].userId);
        sessionStorage.setItem('userdata',JSON.stringify(data['body']));

        alert("Login Successful!");
        if(decodedToken['role']=='Customer'){
          this.router.navigateByUrl('/home');
        }
        if(decodedToken['role']=='RestaurantOwner'){
          this.router.navigateByUrl('/restaurant-owner');
        }
        if(decodedToken['role']=='Admin'){
          this.router.navigateByUrl('/adminpage');
        }
        if(decodedToken['role']=='DeliveryPartner'){
          this.router.navigateByUrl('/delivery-partner-profile');
        }


        // this.router.navigateByUrl('/home');
        console.log('User Role:', decodedToken['role']); // Log the user role
      },
      error: err => {
        console.log(err);
        alert("Invalid Credentials!");
      }
    });
  }

  HidePassword() {
    this.hidepassword = !this.hidepassword;
  }
}
