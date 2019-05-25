import React from 'react';
import { FilterTypes } from '../TodoApp.types';

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FilterTypes) => void;
  filter: FilterTypes;
}

interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    const { filter } = this.props;
    return (
      <header>
        <h1>todos <small>(1.7 exercise)</small></h1>
        <div className="addTodo">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
          <button className="submit" onClick={this._onAdd}>Add</button>
        </div>
        <nav className="filter">
          <button className={filter === 'all' ? 'selected' : ''} onClick={this._onFilter}>all</button>
          <button className={filter === 'active' ? 'selected' : ''} onClick={this._onFilter}>active</button>
          <button className={filter === 'completed' ? 'selected' : ''} onClick={this._onFilter}>completed</button>
        </nav>
      </header>
    );
  }

  _onFilter = evt => {
    this.props.setFilter(evt.target.innerText);
  };

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };

  _onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: '' });
  };
}
