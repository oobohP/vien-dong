import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  ngOnInit() {
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    document.getElementById("myNav").classList.toggle('middle-div');
    console.log(document.getElementById("myNav"))
  }

  closeNavbar() {
    this.navbarOpen = false;
    
  }

}
