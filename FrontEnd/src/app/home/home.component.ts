<<<<<<< HEAD
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TokenserviceService } from '../shared/tokenservice.service';
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
<<<<<<< HEAD
=======
  customerId = parseInt(this.tokenservice.getUser());
  authHeader = this.tokenservice.getHeaderObject();
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
  VegLollipop : string = "assets/images/veg-Lollipop.jpg";
  EggBiryani : string = "assets/images/egg-biryani.jpg";
  Cake : string = "assets/images/cake.jpg";
  ChilliChicken : string = "assets/images/chilli-chicken.jpg";
  Burger : string = "assets/images/burger.jpg";

<<<<<<< HEAD
  @ViewChild('carousel', {static: false}) carousel: ElementRef | undefined;
  
  constructor() { }
=======
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
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)

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

<<<<<<< HEAD
=======
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

>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)

}



