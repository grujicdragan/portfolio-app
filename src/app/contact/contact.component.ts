import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  mail = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);
  

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
  }

  getErrorMessagePhone() {
    if (this.phone.hasError('required')) {
      return 'You must enter your phone';
    }
  }

  getErrorMessageMail() {
    if (this.mail.hasError('required')) {
      return 'You must enter your mail';
    }
    return this.mail.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageMessage() {
    if (this.message.hasError('required')) {
      return 'You must enter a message';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
