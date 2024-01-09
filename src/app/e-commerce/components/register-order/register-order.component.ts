import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css'],
})
export class RegisterOrderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {
    // send order object to server order endpoint
    this.router.navigate(['/e-commerce/success-order']);
  }
}
