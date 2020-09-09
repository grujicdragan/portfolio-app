import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    const flexNav = document.getElementsByClassName('flex-nav')[0];
    const icons = document.getElementsByClassName('icons-i')[0];
    const x = document.getElementsByClassName('toggle-button')[0]
    const y = document.getElementsByClassName('navbar-1')[0]

    flexNav.classList.toggle('active');
    icons.classList.toggle('active');
    x.classList.toggle('active');
    y.classList.toggle('active');
  }

  toHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }

  toAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }

  toPortfolio() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  }

  toContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }


}
