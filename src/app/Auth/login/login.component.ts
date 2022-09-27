import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  inputForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginServer: LoginService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.inputForm.valid) {
      this.loginServer.login(this.inputForm.value).subscribe((resp) => {
        localStorage.setItem('Token', resp.token);
        this.route.navigate(['/dashboard']);
      });
    }
  }
}
