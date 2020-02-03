import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './../../shared/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private service: SignupService,
              private router: Router) { }

    signUpForm: FormGroup;


    ngOnInit() {
      this.signUpForm = this.formbuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        lastname: ['', Validators.required],
        firstname: ['', Validators.required]
      });
    }
    onSubmit(element) {
      console.log(this.signUpForm.value);
      this.service.postNewUser(element).subscribe(() => {
        this.signUpForm.reset();
      });

    }
    goHome() {
      this.router.navigate(['/homepage']);
    }
  }


