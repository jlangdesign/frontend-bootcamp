import React from 'react';

/**
 * Represents a footer in our todo app.
 */
export class TodoFooter extends React.Component<any, any> {
  render() {
    return (
      <footer>
        <span>4 items left</span>
        <button className="submit">Clear Completed</button>
      </footer>
    );
  }
}
