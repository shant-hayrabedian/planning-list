import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  submitted = false;
  registerForms: FormGroup;
  user: User = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.submitForm();
  }

  get f() {
    return this.registerForms.controls;
  }

  register() {
    if ( this.user.email !== '' && this.user.password !== '') {
      this.submitted = false;
      this.router.navigate(['/plan-list']);
    } else {
      this.submitted = true;
    }
  }

  submitForm() {
    this.registerForms = new FormGroup({
      email: new FormControl(null, [
        Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20),
      ]),
      password: new FormControl(null, [
        Validators.required, Validators.minLength(6), Validators.maxLength(10),
      ]),
    });
  }

}
