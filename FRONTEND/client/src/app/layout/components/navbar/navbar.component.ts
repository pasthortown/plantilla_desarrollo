import { NavigationEnd, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input('user') user: any = {};

  constructor(private router: Router) {
    this.router.events.subscribe( val => {
      if ( val instanceof NavigationEnd && window.innerWidth <= 992 && this.is_toggled()) {
        this.toggle_sidebar();
      }
    });
  }

  ngOnInit(): void {
  }

  is_toggled(): boolean {
    const dom: any = document.querySelector('body');
    return dom.classList.contains('push-right');
  }

  toggle_sidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
