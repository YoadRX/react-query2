import axios from "axios";
import { TodoCard } from "./TodoCard";
import { Todo } from "../common/types/todo.interface";
import { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { useQuery } from "@tanstack/react-query";

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", todos],
    queryFn: () =>
      axios.get<Todo[]>("/api/todos").then((res) => setTodos(res.data)),
  });

  console.log(data);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <div className="todo-container">
        {todos.map((todo, index) => (
          <TodoCard
            todo={todo}
            setTodos={setTodos}
            index={index}
            key={todo.id}
          />
        ))}
      </div>
      <AddTodo setTodos={setTodos} />
    </>
  );
}
