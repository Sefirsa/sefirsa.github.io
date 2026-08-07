import { Component, inject, OnInit } from '@angular/core';
import { IonIcon, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chevronDown, eyeOutline} from 'ionicons/icons';
import { ProjectService } from '../services/project.services';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [IonIcon],
})
export class ProjectsComponent  implements OnInit {

  private readonly projectService = inject(ProjectService);
  private readonly modalController = inject(ModalController);

  projects = this.projectService.getAllProjects();

  constructor() { addIcons( {chevronDown, eyeOutline} ) }

  ngOnInit() {}

  async openProject(projectId: number): Promise<void> {
    
    const modal = await this.modalController.create({
      component: ProjectCardComponent,
      componentProps: {
        projectId
      },
      cssClass: 'project-modal'
    });

    await modal.present();

  }

}
