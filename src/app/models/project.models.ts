export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    period: string;
    technologies: string[];
    githubRepoUrl?: string;
    demoUrl?: string;
    screenshots?: string[];
}