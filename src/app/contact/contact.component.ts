import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  btnText = "SEND";
  loading = false;
  messageText = "";

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



  constructor(
    private http: HttpClient,
    private service: HttpService
  ) { }

  ngOnInit(): void {
  }

  sendMail() {
    this.loading = true;
    console.log("Loading...");
    this.btnText = "Sending...";
    let contact = {
      name: this.name.value,
      phone: this.phone.value,
      mail: this.mail.value,
      message: this.message.value
    }
    this.service.sendEmail("http://localhost:3000/send", contact).subscribe(
      data => {
        let res: any = data;
        console.log(`${contact.name} has sent you an email!`)
      },
      err => {
        console.log(err);
        this.loading = false;
        this.btnText = "SEND";
      }, () => {
        this.loading = false;
        console.log("Done loading.");
        this.btnText = "SEND";
        this.messageText = "Message sent."
      }
    );
  }
}
