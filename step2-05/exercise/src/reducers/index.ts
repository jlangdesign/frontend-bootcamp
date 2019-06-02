import { Store } from '../store';
import { combineReducers } from 'redux';
// Provides some boilerplate for writing reducers
import { createReducer } from 'redux-starter-kit';

// Use createReducer() to auto-translate all of the mutations to the state into
// immutable snapshots
export const todosReducer = createReducer<Store['todos']>(
  {},
  {
    addTodo(state, action) {
      state[action.id] = { label: action.label, completed: false }
    },

    remove(state, action) {
      delete state[action.id];
    },

    clear(state, action) {
      Object.keys(state).forEach(key => {
        if (state[key].completed) {
          delete state[key];
        }
      });
    },

    complete(state, action) {
      // Toggle it to the opposite of its current state
      state[action.id].completed = !state[action.id].completed;
    },

    edit(state, action) {
      state[action.id].completed;
    }
  }
);

export const filterReducer = createReducer<Store['filter']>('all', {
  setFilter(state, action) {
    return action.filter;
  }
});

// Organize reducers matching the keys of the state tree and combine them with
// combineReducers()
export const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});
