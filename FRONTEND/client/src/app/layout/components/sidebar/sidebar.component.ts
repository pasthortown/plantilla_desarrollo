import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
}
