import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: any = {};

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
  }

}
