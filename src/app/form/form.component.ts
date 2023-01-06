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
  invalidEmail: boolean = false;
  invalidPostalCode: boolean = false;
  invalidFirstName: boolean = false;
  invalidLastName: boolean = false;
  invalidCity: boolean = false;
  isFull: boolean = false;

  check() {
    if (this.user.title != '' && this.user.firstName != '' && this.user.lastName != '' && this.user.email != '' && this.user.postalCode != '' && this.user.city != '' && this.user.country != '' && this.user.address != '' && this.user.phone != '' && this.user.login != '' && this.user.password != '') this.isFull = true ;

  }

  validatePhoneNumber() {
      const phoneNumberPattern = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
      this.invalidPhoneNumber = !phoneNumberPattern.test(this.user.phone);
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.invalidEmail = !emailPattern.test(this.user.email)
  }

  validatePostalCode() {
    const postalCodePattern = /^[0-9]{5}$/;
    this.invalidPostalCode = !postalCodePattern.test(this.user.postalCode)
  }

  validateFirstName() {
    const firstNamePattern = /^[A-Z][a-zéèàêûîôäëüïö-]{1,29}$/;
    this.invalidFirstName = !firstNamePattern.test(this.user.firstName);
  }

  validateLastName() {
    const lastNamePattern = /^[A-Z][a-zéèàêûîôäëüïö-]{1,29}$/;
    this.invalidLastName = !lastNamePattern.test(this.user.lastName);
  }
  
  validateCity() {
    const cityPattern = /^[A-Z][a-zéèàêûîôäëüïö-]{1,29}$/;
    this.invalidCity = !cityPattern.test(this.user.city);
  }

  onSubmit() {
    if (!this.invalidPhoneNumber && !this.invalidEmail && !this.invalidPostalCode && !this.invalidFirstName && !this.invalidLastName && !this.invalidCity && this.isFull)  this.display_info = true
  }
}