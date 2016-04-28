const visibilityFilter = (state = 'SHOW_ALL', action) => {

  console.group('reducers : visibilityFilter : visibilityFilter');
  console.log('state',state);
  console.log('action',action);
  console.groupEnd();

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      //debugger;
      //console.log('visibilityFilter : action.filter :',action.filter);
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
