import React from 'react';

/**
 * Represents a list item in our todo app.
 */
export class TodoListItem extends React.Component<any, any> {
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> Todo 1
        </label>
      </li>
    );
  }
}
