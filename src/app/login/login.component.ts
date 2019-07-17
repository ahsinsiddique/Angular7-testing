import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login = {
      name: '',
      password: '',
  };
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.createForm();
  }
  get f() { return this.loginForm.controls; }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
}
onSubmit(): void {
  this.submitted = true;
  if (!this.loginForm.valid) {
    return;
  }
  console.log(this.loginForm.controls['name'].value);
}
}
