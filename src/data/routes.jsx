import { lazy } from 'react';
import { projects } from './projects';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LegalPage = lazy(() => import('../pages/LegalPage'));

export const routes = [
  { path: '/', title: 'Azure Interiors — Considered Interiors, Indian Soul', Component: HomePage },
  { path: '/projects', title: 'Selected Projects — Azure Interiors', Component: ProjectsPage },
  { path: '/contact', title: 'Start a Conversation — Azure Interiors', Component: ContactPage },
  ...projects.map(project => ({ path: `/projects/${project.slug}`, title: `${project.name} — Azure Interiors`, Component: () => <ProjectPage project={project} /> })),
  { path: '/privacy', title: 'Privacy — Azure Interiors', Component: () => <LegalPage type="privacy" /> },
  { path: '/terms', title: 'Terms of Use — Azure Interiors', Component: () => <LegalPage type="terms" /> },
];
