import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Interfaces/users';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  public token: string = '';
  public usersProfile: Users[] | undefined;



  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private router: Router, private authService: AuthService, private userService: UsersService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  getoPrivate() {
    this.router.navigate(['/app'])
  }

  login() {
    if (!this.loginForm.valid) return;
    this.authService.authenticate(this.loginForm.value)
      .subscribe(response => {
        localStorage.setItem('token', response.data.token)
      });

    this.getoPrivate()

  }
}
