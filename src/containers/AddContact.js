import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddContact = ({ dispatch }) => {
  let input1
  let input2

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        console.group("Add Contact : '%s'", 'AddContact');
        console.log('Add Contact');
        console.log('input1', input1, input1.value);
        console.log('input2', input2, input2.value);
        console.groupEnd();

        if (!input1.value.trim() || !input2.value.trim() ) {
          return
        }
        dispatch(addTodo(input1.value))
        input1.value = input2.value = ''
      }}>
        <input ref={node1 => { input1 = node1 }} />
        <input ref={node2 => { input2 = node2 }} />
        <button type="submit"> Add Contact </button>
      </form>
    </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact
