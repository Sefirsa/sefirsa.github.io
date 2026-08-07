import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [],
})
export class AboutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  services = [
  {
    title: 'Dévelopment',
    icon: 'assets/images/data.svg',
    description: 'J\'aprécie créer des applications et explorer de nouvelles technologies.'
  },
  {
    title: 'Apprentissage',
    icon: 'assets/images/history-book.svg',
    description: 'J\'ai soif de connaisances et j\'aime en apprendre plus sur les domaines qui m\'intéressent.'
  },
  {
    title: 'Jeux vidéos',
    icon: 'assets/images/pc.svg',
    description: 'Passionné de jeux vidéos depuis des années, je m\'écloigne de plus en plus des jeux compétitifs au profit des jeux coop et des CRPG.'
  },
  {
    title: 'Lecture',
    icon: 'assets/images/open-book.svg',
    description: 'La lecture a toujours fait partie de mes passions. Désormais, je lis beaucoup en anglais lorsqu\'aucune traduction n\'a été faite ou que je n\'ai pas la patience de l\'attendre.'
  }
];

}
