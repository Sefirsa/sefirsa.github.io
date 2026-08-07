import { Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [

{
    path:'',
    component:PortfolioLayoutComponent,

    children:[

        {
            path:'',
            redirectTo:'about',
            pathMatch:'full'
        },

        {
            path:'about',
            component:AboutComponent
        },

        {
            path:'resume',
            component:ResumeComponent
        },

        {
            path:'projects',
            component:ProjectsComponent
        }

    ]

}

];
