import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter, numCalls) => {

  console.group('VisibleTodoList : getVisibleTodos');
  console.log('todos',todos);
  console.log('filter',filter);
  console.log('numCalls',numCalls);
  console.groupEnd();
  //
  var newTodos = Object.assign(todos,{called:numCalls});

  switch (filter) {
    case 'SHOW_ALL':
      return newTodos
    case 'SHOW_COMPLETED':
      return newTodos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return newTodos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  console.group('VisibleTodoList : mapStateToProps');
  console.log('state',state);
  console.groupEnd();

  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter, state.myFilter.called)
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('VisibleTodoList : mapDispatchToProps');

  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
