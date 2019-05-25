import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  render() {
    // Pull in label and completed from props using destructuring
    const { label, completed } = this.props;

    // Set the todo's text to label and the checked prop to completed
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => undefined} /> {label}
        </label>
      </li>
    );
  }
}
