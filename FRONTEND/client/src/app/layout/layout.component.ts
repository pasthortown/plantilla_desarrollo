import { CatalogService } from 'src/app/services/catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: any = {};
  side_menu: any[] = [];

  constructor(private catalogDataService: CatalogService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
    this.build_menu();
  }

  build_menu() {
    this.side_menu = [];
    let output_model: any = {
      name: 1,
      icon: 1,
      text: 1,
      class: 1,
      expand_class: 1,
      rols_able: 1,
      items: 1,
    };
    this.catalogDataService.get_items('side-menu', output_model).then( r => {
      if (r.status == 200) {
        this.side_menu = r.response;
      }
    }).catch( e => { console.log(e); });
  }

}
