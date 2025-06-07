import type { IconType } from 'react-icons';

export type AudienceType = 'anyone' | 'recruiters' | 'engineering-managers';

export interface Section {
  id: string;
  title: string;
}

export interface Platform {
  icon: IconType;
  color?: string;
}

export interface WorkProject {
  title: string;
  description: string;
  tags: string[];
  link: string;
  platforms: Platform[];
}

export interface AudienceContent {
  title: string;
  description: React.ReactNode;
  links: React.ReactNode[];
}
