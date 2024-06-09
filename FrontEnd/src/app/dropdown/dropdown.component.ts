import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  accountForm: FormGroup;
  accountTypes = [
    // { name: 'Admin', value: 'admin-sign-in' },
    { name: 'Restaurant Owner', value: 'res-owner-sign-up' },
    { name: 'Delivery Partner', value: 'delivery-partner-sign-up' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.accountForm = this.fb.group({
      accountType: [null]
    });
  }

  onSubmit() {
    const selectedAccountType = this.accountForm.get('accountType').value;
    if (selectedAccountType) {
      this.router.navigate([selectedAccountType]);
    }
  }

}
