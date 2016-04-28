// written and Example Reducer which does nothing
const myFilter = (state=[], action) => {
  console.log('myFilter : action',action);
  console.log('myFilter : state',state);
  return state
}

export default myFilter
