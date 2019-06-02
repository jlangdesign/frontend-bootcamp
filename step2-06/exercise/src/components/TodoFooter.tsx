import React from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { actions } from '../actions';
import { connect } from 'react-redux';
import { Store } from '../store';

interface TodoFooterProps {
  todos: Store['todos'];
  clear: () => void;
}

const TodoFooter = (props: TodoFooterProps) => {
  const { todos, clear } = props;

  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => clear()}>Clear Completed</DefaultButton>
    </Stack>
  );
};

// connect() maps portions of state tree and dispatch functions into props for
// the child React component
// It also returns a function, which is called to decorate TodoFooter into a
// ConnectedTodoFooter
// Basically, connect() takes in functions as arguments and returns a function
// that takes in a component and returns a component
const ConnectedTodoFooter = connect(
  // Mapping functions for state and dispatch functions
  (state: Store) => ({
    todos: state.todos
  }),
  dispatch => ({
    clear: () => dispatch(actions.clear())
  })
)(TodoFooter);
export { ConnectedTodoFooter as TodoFooter };
