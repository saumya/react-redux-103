import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, phone, called }) => (

  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}:{phone}
    <div>MyFilter {called} times called.</div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
