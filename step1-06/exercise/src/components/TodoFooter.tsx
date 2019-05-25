import React from 'react';

export const TodoFooter = (props: any) => {
  // Display the current number of items left (the items not marked "completed")
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  // Use ternary operator to determine whether to write 'item' or 'items'
  return (
    <footer>
      <span>{itemCount} item{itemCount === 1 ? '' : 's'} left</span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};
