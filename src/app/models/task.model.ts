export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  photo: string;
}

export interface NewTask {
  title: string;
  description?: string;
  photo: string;
}
