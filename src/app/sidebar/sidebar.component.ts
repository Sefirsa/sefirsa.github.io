import { Component, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chevronDown, mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoGithub, logoLinkedin } from 'ionicons/icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [IonIcon],
})
export class SidebarComponent  implements OnInit {

  constructor() {
    addIcons( { chevronDown, mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoGithub, logoLinkedin } )  
  }

  ngOnInit() {}

  isExpanded = false;

  contacts = [
    {
      label:'Email',
      type: 'email',
      icon:'mail-outline',
      value:'aalexandre.bontemps@gmail.com'
    },
    {
      label:'Téléphone',
      type: 'phone',
      icon:'phone-portrait-outline',
      value:'+33 6 29 84 75 18'
    },
    {
      label:'Date de naissance',
      type: 'birthday',
      icon:'calendar-outline',
      value:'05 Décembre 2004'
    },
     {
      label:'Addresse',
      type: 'address',
      icon:'location-outline',
      value:'75020 Paris'
    }
  ];

  socialLinks = [
    {
      url: "https://github.com/Sefirsa",
      icon: "logo-github"
    },
    {
      url: "https://linkedin.com/in/alexandre-bontemps-7255282aa",
      icon: "logo-linkedin"
    }
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
