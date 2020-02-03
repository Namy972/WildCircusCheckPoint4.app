import { Router } from '@angular/router';
import { User } from './../../shared/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private service: UserService,
              private formbuilder: FormBuilder,
              private router: Router) { }

  signInForm: FormGroup;

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required]
    });
  }

  connexion(user: User) {
    return this.service.connexion(user).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
  goHome() {
    this.router.navigate(['/homepage']);
  }
}
