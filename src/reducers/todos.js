const todo = (state, action) => {

  console.group('reducers : todos : todo');
  console.log('state',state);
  console.log('action',action);
  console.groupEnd();

  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        phone: action.phone,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {

  console.group('reducers : todos : todos');
  console.log('state',state);
  console.log('action',action);
  console.groupEnd();

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
