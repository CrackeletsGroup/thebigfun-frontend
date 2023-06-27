import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLoggedIn: boolean = false;
  userType: string = '';

  Login(){
    this.isLoggedIn = true;
    this.userType ='organizer';
  }
}
