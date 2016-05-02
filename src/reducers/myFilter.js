// written and Example Reducer which does nothing
const myFilter = (state=[], action) => {
  console.group('reducers : myFilter : myFilter');
  console.log('myFilter : action',action);
  console.log('myFilter : state',state);
  var a = 0;
  if (state.called >= 0) {
    a = state.called + 1;
  }
  var newState = {myFilterVersion:0.1,called:a};
  console.log('myFilter : state',state);
  console.groupEnd();

  return newState;
}

export default myFilter
