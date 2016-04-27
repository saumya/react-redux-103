import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddContact = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => { input = node }} />
        <input ref={node => { input = node }} />
        <button type="submit"> Add Contact </button>
      </form>
    </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact
