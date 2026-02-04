
export interface Project {
  id: string;
  title: string;
  category: string;
  model: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  mediumUrl: string;
  youtubeUrl: string;
  technicalArchitecture: string;
  stack: string[];
  status?: 'published' | 'upcoming';
}

export interface GeneratedConcept {
  name: string;
  description: string;
  materials: string[];
  vibe: string;
  imageUrl?: string;
}
