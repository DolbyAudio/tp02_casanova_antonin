import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent{

  display_info = false ;

  user: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    postalCode: string;
    city: string;
    country: string;
    address: string;
    phone: string;
    login: string;
    password: string;
  } = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    postalCode: '',
    city: '',
    country: '',
    address: '',
    phone: '',
    login: '',
    password: ''
  }

  invalidPhoneNumber: boolean = false;

  validatePhoneNumber() {
      const phoneNumberPattern = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
      this.invalidPhoneNumber = !phoneNumberPattern.test(this.user.phone);
  }

  onSubmit() {
    if (!this.invalidPhoneNumber)  this.display_info = true
  }
}