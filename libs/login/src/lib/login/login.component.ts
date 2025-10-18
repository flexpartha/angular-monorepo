import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-monorepo/material';
import { User } from '@angular-monorepo/dmodel';
import { NotificationFactoryService } from '@notification-library/notification';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  @Output() submitForm: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private notificationFactory: NotificationFactoryService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    this.submitForm.emit(this.loginForm.value);
    console.log(this.loginForm.value);
    if (
      this.loginForm.controls['username'].value === 'admin-order' &&
      this.loginForm.controls['password'].value === 'admin'
    ) {
      this._router.navigate(['/orders']);
    } else if (
      this.loginForm.controls['username'].value === 'admin-product' &&
      this.loginForm.controls['password'].value === 'admin'
    ) {
      this._router.navigate(['/products']);
    }
  }

  showSuccess() {
    const notification = this.notificationFactory.createNotification('success');
    notification.show('Login Successful!');
  }

  showError() {
    const notification = this.notificationFactory.createNotification('error');
    notification.show('Login Failed! Please check your credentials.');
  }

  showWarning() {
    const notification = this.notificationFactory.createNotification('warning');
    notification.show('Warning: Multiple failed login attempts detected.');
  }
}
