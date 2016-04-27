import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import TopNavTitle from './TopNavTitle'
import AddContact from '../containers/AddContact'

const App = () => (
  <div>
    <TopNavTitle title="Contacts Application" />
    <AddContact />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
