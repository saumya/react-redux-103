// written and Example Reducer which does nothing
const myFilter = (state=[], action) => {
  
  console.group('reducers : myFilter : myFilter');
  console.log('myFilter : action',action);
  console.log('myFilter : state',state);
  console.groupEnd();

  return state
}

export default myFilter
