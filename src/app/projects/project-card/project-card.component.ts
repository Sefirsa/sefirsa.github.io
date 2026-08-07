import { Component, inject, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, ModalController } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { closeOutline, logoGithub, openOutline } from 'ionicons/icons';
import { Project } from 'src/app/models/project.models';
import { ProjectService } from 'src/app/services/project.services';
import { ProjectGalleryComponent } from "./project-gallery/project-gallery.component";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, ProjectGalleryComponent],
})
export class ProjectCardComponent  implements OnInit {

  @Input({ required: true }) projectId!: number;

  private readonly projectService = inject(ProjectService);
  private readonly modalController = inject(ModalController);

  project!: Project;

  constructor() { addIcons( { closeOutline, logoGithub, openOutline } ) }

  ngOnInit() {
    this.project = this.projectService.getProjectById(this.projectId);
  }

   close(): void {
    this.modalController.dismiss();
  }
  

}
