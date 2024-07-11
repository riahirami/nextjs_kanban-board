export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in_progress" | "done";
  priority: "Low" | "Medium" | "High";
  created_at: string;
}
