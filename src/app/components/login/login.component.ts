import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
}

onSubmit() {
  const formData = this.loginForm.value;
  this.http.post('https://dummyjson.com/auth/login', formData).subscribe({
    next: (res) => {
      console.log('Login success:', res);
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.error('Login failed:', err);
    }
  });
}
}
