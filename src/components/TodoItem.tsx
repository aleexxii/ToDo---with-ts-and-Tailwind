import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompetedChange: (id: number, completed: boolean) => void;
  onDelete: (id:number) => void;
}

export default function TodoItem({ todo, onCompetedChange, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label
        htmlFor=""
        className="flex items-center gap-2 border rounded-md border-gray-400 bg-white hover:bg-slate-50 grow"
      >
        <input type="checkbox"
        checked = {todo.completed}
        onChange={(e)=> onCompetedChange(todo.id,e.target.checked)}
        className="scale-125" />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button className="p-2" onClick={() => onDelete(todo.id)}><Trash2 size={20} className="text-gray-500"/></button>
    </div>
  );
}
