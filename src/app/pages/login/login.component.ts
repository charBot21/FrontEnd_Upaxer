import { Component, OnInit } from '@angular/core';

/* Complementos de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide: boolean = true;

  /* Form */
  public loginForm: FormGroup;
  public userEmail: AbstractControl;
  public userPassword: AbstractControl;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      userEmail  : ['', [ Validators.required, Validators.email ] ],
      userPassword : ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(15) ] ]
    });

    this.userEmail  = this.loginForm.controls.userEmail;
    this.userPassword = this.loginForm.controls.userPassword;
  }

  ngOnInit(): void {
  }

}
