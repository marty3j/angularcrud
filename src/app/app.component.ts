import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loginPage : boolean = true;
  constructor(private router: Router,
    private activatedRoute:ActivatedRoute){
    console.log('url=1',window.location.href);
  }
  ngAfterViewInit(): void {
    
    console.log('url=2',window.location.pathname);
  }
  ngOnInit(): void {
    if (window.location.pathname === "/loginpage"){
      this.loginPage = true;
    } else {
      this.loginPage = false;
    }
  }
  title = 'my-app';

}
