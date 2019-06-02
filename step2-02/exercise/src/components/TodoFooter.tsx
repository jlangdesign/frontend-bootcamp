import React from 'react';
import { Store } from '../store';
import { DefaultButton, Stack, Text } from 'office-ui-fabric-react';

// TODO: import DefaultButton, Stack, and Text

interface TodoFooterProps {
  clear: () => void;
  todos: Store['todos'];
}

export const TodoFooter = (props: TodoFooterProps) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;

  // TODO:
  // 1. replace the <footer> with the Fabric control <Stack>
  // 2. replace the <span> with the Fabric control <Text>
  // 3. replace the <button> with Fabric control <DefaultButton>

  return (
    <Stack>
      <Text>
        {itemCount} item{itemCount <= 1 ? '' : 's'} left
      </Text>
      <DefaultButton onClick={() => props.clear()} className="button">
        Clear Completed
      </DefaultButton>
    </Stack>
  );
};
