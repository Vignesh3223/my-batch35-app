import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  demo = new RegForm();
  designation: string[] = ['Designer', 'Developer', 'Tester', 'HR', 'Manager'];
  constructor() { }

  onSubmit(form: any) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Signed Up successfully',
    })
    form.resetForm();
  }
  
  ngOnInit(): void { }
}

export class RegForm {
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public designation!: string;
  public phoneNumber!: number;
  public password!: string;
}