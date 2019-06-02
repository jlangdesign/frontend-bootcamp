import React from 'react';
import { Stack, Customizer, mergeStyles, getTheme } from 'office-ui-fabric-react';
import { TodoFooter } from './TodoFooter';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { Store } from '../store';

// TODO: Change me to another theme!
// import { FluentCustomizations } from '@uifabric/fluent-theme';
import { TeamsCustomizations } from '@uifabric/theme-samples';

// Create custom theme
import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
  palette: {
    themePrimary: '#b0e0e6',
    themeLighterAlt: '#070909',
    themeLighter: '#1c2425',
    themeLight: '#354345',
    themeTertiary: '#6a868a',
    themeSecondary: '#9cc5ca',
    themeDarkAlt: '#b8e2e8',
    themeDark: '#c2e7ec',
    themeDarker: '#d2edf1',
    neutralLighterAlt: '#34434d',
    neutralLighter: '#33424c',
    neutralLight: '#313f49',
    neutralQuaternaryAlt: '#2e3b44',
    neutralQuaternary: '#2c3841',
    neutralTertiaryAlt: '#2a363e',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#36454f',
  }
});

let index = 0;

// TODO: Change this to add other CSS styles like backgroundColor, fontSize, etc
const className = mergeStyles({
  padding: 50,
  backgroundColor: 'rgb(180, 180, 180)',
  fontSize: 25,
  selectors: {
    ':hover': {
      backgroundColor: 'rgb(0, 0, 0)'
    }
  },
  ...getTheme().effects.elevation4
});

export class TodoApp extends React.Component<any, Store> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      filter: 'all'
    };
  }
  // Use <Customizer> component to wrap components to be themed
  // (Can also remove <Customizer> component and replace it with loadTheme() in
  // the module scope - could even create your own theme)
  render() {
    const { filter, todos } = this.state;
    // return (
    //   <Customizer {...TeamsCustomizations}>
    //     <Stack horizontalAlign="center">
    //       <Stack style={{ width: 400 }} gap={25} className={className}>
    //         <TodoHeader addTodo={this._addTodo} setFilter={this._setFilter} filter={filter} />
    //         <TodoList complete={this._complete} todos={todos} filter={filter} remove={this._remove} edit={this._edit} />
    //         <TodoFooter clear={this._clear} todos={todos} />
    //       </Stack>
    //     </Stack>
    //   </Customizer>
    // );
    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 400 }} gap={25} className={className}>
          <TodoHeader addTodo={this._addTodo} setFilter={this._setFilter} filter={filter} />
          <TodoList complete={this._complete} todos={todos} filter={filter} remove={this._remove} edit={this._edit} />
          <TodoFooter clear={this._clear} todos={todos} />
        </Stack>
      </Stack>
    );
  }

  private _addTodo = label => {
    const { todos } = this.state;
    const id = index++;

    this.setState({
      todos: { ...todos, [id]: { label } }
    });
  };

  private _remove = id => {
    const newTodos = { ...this.state.todos };
    delete newTodos[id];

    this.setState({
      todos: newTodos
    });
  };

  private _complete = id => {
    const newTodos = { ...this.state.todos };
    newTodos[id].completed = !newTodos[id].completed;

    this.setState({
      todos: newTodos
    });
  };

  private _edit = (id, label) => {
    const newTodos = { ...this.state.todos };
    newTodos[id] = { ...newTodos[id], label };

    this.setState({
      todos: newTodos
    });
  };

  private _clear = () => {
    const { todos } = this.state;
    const newTodos = {};

    Object.keys(this.state.todos).forEach(id => {
      if (!todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });

    this.setState({
      todos: newTodos
    });
  };

  private _setFilter = filter => {
    this.setState({
      filter: filter
    });
  };
}
