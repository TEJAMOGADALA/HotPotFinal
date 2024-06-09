import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TokenserviceService } from '../shared/tokenservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  customerId = parseInt(this.tokenservice.getUser());
  authHeader = this.tokenservice.getHeaderObject();
  VegLollipop : string = "assets/images/veg-Lollipop.jpg";
  EggBiryani : string = "assets/images/egg-biryani.jpg";
  Cake : string = "assets/images/cake.jpg";
  ChilliChicken : string = "assets/images/chilli-chicken.jpg";
  Burger : string = "assets/images/burger.jpg";

  customerDetails: any = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    userName: ''
  };

  ngOnInit(): void {
    this.fetchCustomerDetails();
  }

  @ViewChild('carousel', {static: false}) carousel: ElementRef | undefined;
 
  
  constructor(private http: HttpClient,private tokenservice : TokenserviceService) { }

  ngAfterViewInit(): void {
    this.startSlideInterval();
  }

  startSlideInterval() {
    setInterval(() => {
      this.nextSlide();
    }, 500);
  }

  nextSlide() {
    if (this.carousel) {
      this.carousel.nativeElement.carousel('next');
    }
  }

  fetchCustomerDetails(): void {
    const url=`http://localhost:36000/api/Customer/GetCustomerDetails?customerId=${this.customerId}`
    this.http.get<any>(url, this.authHeader)
      
    .subscribe(response => {
      this.customerDetails = response;
      console.log(this.customerDetails);
    }, error => {
      console.log(error);
    });
}


}



