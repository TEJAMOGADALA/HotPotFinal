<<<<<<< HEAD
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
=======
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { TokenserviceService } from '../../shared/tokenservice.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrl: './cart-display.component.css'
})

export class CartDisplayComponent implements OnInit {

  Biryani : string = "assets/images/chicken-biryani.jpg";
  Burger : string = "assets/images/burger.jpg";
  EmptyCartImg:string="assets/images/empty-cart-img.png"
  carts: any[] = [{
    cartId: 0,
    customerId: 0,
    restaurantId: 0,
    menuItemId: 0,
    menuTitle: '',
    quantity: 0,
    price: 0,
    menuImage: ''
  }];
  cartNotEmpty: boolean = true;
  userId = parseInt(this.tokenservice.getUser());
  authHeader = this.tokenservice.getHeaderObject();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private tokenservice : TokenserviceService,
<<<<<<< HEAD
    private cdr : ChangeDetectorRef
=======
<<<<<<< HEAD
=======
    private cdr : ChangeDetectorRef
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fetchCartItems();
    });
    
  }

  fetchCartItems(): void {
    
    const url = `http://localhost:36000/api/Customer/ViewCart?userId=${this.userId}`;
    this.http.get<any[]>(url, this.authHeader)
      .subscribe(
        response => {
          console.log(response)
          this.carts = response;
          this.cartNotEmpty = this.carts.length > 0;
        },
        error => {
          console.log(error);
          this.cartNotEmpty = false;
        }
      );
  }

  increaseCartItemQuantity(cartID: number): void {
    
    const increaseCart = `http://localhost:36000/api/Customer/IncreaseCartItemQuantity?cartId=${cartID}`;
    this.http.put(increaseCart, null, this.authHeader)
      .subscribe(
<<<<<<< HEAD
=======
<<<<<<< HEAD
        response => console.log(response),
        error => console.log(error)
      );
=======
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
        response => {
          console.log(response);
          this.fetchCartItems();
        },
        error => console.log(error),
        
      );
     
<<<<<<< HEAD
=======
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
  }

  decreaseCartItemQuantity(cartID: number): void {
    const decreaseCart = `http://localhost:36000/api/Customer/DecreaseCartItemQuantity?cartId=${cartID}`;
    this.http.put(decreaseCart, null, this.authHeader)
      .subscribe(
<<<<<<< HEAD
=======
<<<<<<< HEAD
        response => console.log(response),
        error => console.log(error)
      );
=======
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
        response => {
          console.log(response);
          this.fetchCartItems();
        },
        error => console.log(error),
        
      );
      this.cdr.detectChanges();
<<<<<<< HEAD
=======
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
  }

  deleteCartItem(cartID: number): void {
    const deleteCart = `http://localhost:36000/api/Customer/DeleteCartItem?cartId=${cartID}`;
    this.http.put(deleteCart, null, this.authHeader)
      .subscribe(
<<<<<<< HEAD
=======
<<<<<<< HEAD
        response => console.log(response),
        error => console.log(error)
      );
=======
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
        response => 
          {console.log(response);
            this.fetchCartItems();
          },
        error => console.log(error)
      );
      this.cdr.detectChanges();
<<<<<<< HEAD
=======
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
  }

  emptyCart(customerID: string): void {

    const emptyCartUrl = `http://localhost:36000/api/Customer/EmptyCart?customerId=${customerID}`;
    this.http.put(emptyCartUrl, null, this.authHeader)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
<<<<<<< HEAD
      this.cdr.detectChanges();
=======
<<<<<<< HEAD
=======
      this.cdr.detectChanges();
>>>>>>> 46c0901 (Initial commit - Added project files excluding .vs directory)
>>>>>>> 952a35f9d879de756371e65815067a1a9cefd054
  }

  purchaseAllItems(): void {
    this.router.navigate(['/checkoutpage']);
  }
}

