import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];


  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.cargarMenu();
  }


  cargarMenu(){
    this.menuService.getMenu().subscribe(dato => {
      console.log(dato);
      this.menu = dato;

    })
  }
}
