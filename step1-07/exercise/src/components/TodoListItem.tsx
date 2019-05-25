import React from 'react';
import { TodoItem } from '../TodoApp.types';

// Extends TodoItem to reuse the label and completed props, then defines the id
// and complete props
interface TodoListItemProps extends TodoItem {
  id: string;
  complete: (id: string) => void;
}

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  render() {
    // Pulls all of the remaining props
    const { label, completed, complete, id } = this.props;

    // Uses the input's onChange event to fire our complete callback and passes
    // id into function as param
    // (A callback function is a function passed into a component as a prop)
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => complete(id)} /> {label}
        </label>
      </li>
    );
  }
}
