import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;

    // filteredTodos returns an array of filtered todo keys [01,02,03]
    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });
    return (
      // todos[id] returns the todo matching the id passed in
      // Spread operator (...) means: label={todos[id].label} completed={todos[id].completed}
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} {...todos[id]} />
        ))}
      </ul>
    );
  }
}
