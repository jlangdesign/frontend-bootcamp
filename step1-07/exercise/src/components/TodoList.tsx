import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FilterTypes, Todos } from '../TodoApp.types';

// Defines the props and their types
interface TodoListProps {
  // Pass in param id of type string and return void value
  complete: (id: string) => void;
  todos: Todos;
  filter: FilterTypes;
}

// Adds interface to component class
// (First value in <> is for props interface, and second is for state)
export class TodoList extends React.Component<TodoListProps, any> {
  render() {
    const { filter, todos, complete } = this.props;

    // filteredTodos returns an array of filtered todo keys [01,02,03]
    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });

    return (
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} complete={complete} {...todos[id]} />
        ))}
      </ul>
    );
  }
}
