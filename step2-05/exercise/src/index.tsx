import { reducer } from './reducers';
import { createStore } from 'redux';
import { actions } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';

// Creates a store
// Typically takes in the main reducer and an initial snapshot of the tate tree
const store = createStore(reducer, {}, composeWithDevTools());

// Dispatching an action passes the action and the current state to the reducers,
// and the root reducer will produce a new snapshot of the entire state tree
store.dispatch(actions.addTodo('hello'));

// Action creators make writing dispatch messages less tedious
let action = actions.addTodo('world');
store.dispatch(action);

store.dispatch(actions.remove(action.id));

console.log(store.getState());
