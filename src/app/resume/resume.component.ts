import { Component, OnInit } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { bookOutline, briefcaseOutline } from 'ionicons/icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  imports: [IonIcon],
})
export class ResumeComponent  implements OnInit {

  constructor() { addIcons( { bookOutline, briefcaseOutline } ) }

  ngOnInit() {}

  sections = [
    {
      title: 'Formation',
      icon: 'book-outline',
      items: [
        {
          title: 'DUT Informatique - Parcours C',
          period: '2023 - 2026',
          description: 'IUT de Montreuil'
        },
        {
          title: 'Baccalauréat Technologique (STI2D)',
          period: '2021 - 2023',
          description: 'Lycée Henri Bergson'
        }
      ]
    },
    {
      title: 'Expérience',
      icon: 'briefcase-outline',
      items: [
        {
          title: 'Développeur Fullstack',
          period: 'Mai 2025 - Juillet 2025',
          description: 'DSIN de l\'Université Paris Cité'
        }
      ]
    }, 
  ];

}
