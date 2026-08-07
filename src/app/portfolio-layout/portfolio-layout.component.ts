import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-portfolio-layout',
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.scss'],
  imports: [IonContent, SidebarComponent, NavbarComponent, RouterOutlet],
})
export class PortfolioLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
