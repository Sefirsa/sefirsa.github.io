import {Injectable} from '@angular/core';
import { Project } from "../models/project.models";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    
    private readonly projects: Project[] = [
        {
            id: 0,
            title: "Z-Hellda",
            description: 
            "Z-Hellda est un projet unversitaire réalisé en trio en utilisant la méthode agile sur une période de 7 semaines. " +
            "Nous devions réaliser un petit jeu zelda-like en 2D avec plusieurs ennemis différents et un boss de fin en utilisant Java et l'architecture MVC (modèle vue contrôleur). " +
            "Une autre contrainte nous avais été imposée, en plus des actions classiques d'un jeu vidéo, notre personnage devait avoir accès à un large pannel d'armes différentes et à des objets uniques servant à varier le gameplay. " +
            "Pour la gestion de notre projet, nous avons utilisé github et trello, puis notre projet a été répartie en plusieurs sprints réalisés à peu près tous les 10 jours. ",
            image: 'z-hellda.png',
            period: 'Année 2024',
            technologies: ['Java', 'SceneBuilder'],
            githubRepoUrl: "https://github.com/bsy44/Z-Hellda",
            screenshots: ['z-hellda-gameplay.png', 'z-hellda-settings.png']
        },  
        {
            id: 1,
            title: "F1 Database",
            description: 
            "F1 Database est un projet unversitaire réalisé en quatuor dont le but était de faire la refonte d'une base de données et de réaliser une application pemettant l'analyse de ces mêmes données. " +
            "Notre équipe était consitutée de deux développeurs chargés de la réalisation de l'application et de deux personnes chargés de la refonte de la DB. ",
            image: 'f1-database.png',
            period: 'Année 2025',
            technologies: ['PostgreSQL', 'Qlik', 'PHP'],
        },
        {
            id: 2,
            title: "Analyse de la qualité de l'air",
            description: 
            "Dans le cardre d'un projet universitaire réaliser avec une équipe de six personnes, nous devions mener une étude comparative de la qualité de l'air dans différentes villes du monde et identifier les différents facteurs d'influence (météorologie, indicateurs économiques, urbanisation). " +
            "Pour cette étude nous avons collecté et agrégé de données issues de plusieurs sources (OpenAQ, WorldCities, WorldBank, OpenMeteo). " +
            "Pour ce faire, un pipeline complet d'extraction, nettoyage et analyse des données à été mis en œuvre avec Python. " +
            "Nous avons ensuite produit des analyses statistiques et des visualisations permettant d'identifier les corrélations entre pollution atmosphérique et facteurs environnementaux ou socio-économiques. ",
            image: 'air-quality.jpg',
            period: 'Année 2026',
            technologies: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'PostgreSQL', 'Qlik'],
        },
    ]

    getAllProjects(): Project[]{
        return this.projects;
    }

    getProjectById(projectId: number): Project {
        const project = this.projects.find(project => project.id === projectId);
        if (!project)
            throw new Error('Project not found.');
        else
            return project;
    }
}