import React, { useContext } from 'react';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';
import { TodoContext } from '../TodoContext';

export const TodoFooter = () => {
  // TODO: replace the following with a useContext(TodoContext) calls
  // const todos = {};
  // const clear = () => {};
  const context = useContext(TodoContext);
  // - end of exercise for this file -

  const itemCount = Object.keys(context.todos).filter(id => !context.todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Text>
        {itemCount} item{itemCount === 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={context.clear}>Clear Completed</DefaultButton>
    </Stack>
  );
};
