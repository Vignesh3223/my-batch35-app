import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor() { }
  myForm1: FormGroup | any;
  username: FormControl | any;
  password: FormControl | any;
  ngOnInit() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,16}$/)
    ]);
    this.myForm1 = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Success',
      })
      form.reset();
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Enter valid credentials',
      })
    }
  }
}
