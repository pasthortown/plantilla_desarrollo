import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input('user') user: any = {};
  showMenu: string = '0';

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

  addExpandClass(element: string) {
    if (element == this.showMenu) {
      this.showMenu = '0'
    } else {
      this.showMenu = element;
    }
  }
}
