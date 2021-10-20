import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router : Router) { }
  form = new FormGroup({});
  model = {};
  ngOnInit(): void {
  }
  
  onsubmit() {
    this.router.navigate(['/dashboard']);
  }
}