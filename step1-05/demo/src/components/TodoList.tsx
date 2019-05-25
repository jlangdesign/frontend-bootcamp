import React from 'react';
import { TodoListItem } from './TodoListItem';

/**
 * Represents a todo list in our todo app.
 */
export class TodoList extends React.Component<any, any> {
  render() {
    return (
      <ul className="todos">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    );
  }
}
