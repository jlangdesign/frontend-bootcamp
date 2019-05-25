import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    // This state variable holds the input's value
    this.state = { labelInput: '' };
  }

  render() {
    const { filter } = this.props;

    return (
      // The filter value is used to conditionally add a class
      // Now, the <input> is a controlled value
      <header>
        <h1>todos <small>(1.6 exercise)</small></h1>
        <div className="addTodo">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className={filter === 'all' ? 'selected' : ''}>all</button>
          <button className={filter === 'active' ? 'selected' : ''}>active</button>
          <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
        </nav>
      </header>
    );
  }

  // Updates the label's input value
  // This changes our text field from uncontrolled to controlled input
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
}
