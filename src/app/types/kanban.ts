export interface KanbanCard {
  id: string;
  title: string;
  githubLink: string;
  description: string;
  processNotes: string;
  project: "ki" | "website";
  status: "todo" | "doing" | "done";
  dateCreated: string;
  dateCompleted: string | null;
}

export interface Project {
  name: string;
  colorClass: string;
  githubLink: string;
}

export interface KanbanData {
  projects: {
    [key: string]: Project;
  };
  cards: KanbanCard[];
}
