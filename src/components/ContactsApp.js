import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import TopNavTitle from './TopNavTitle'
import AddContact from '../containers/AddContact'

const App = () => (
  <div>
    {
      // Old application is here for reference
      /*
      <TopNavTitle title="TODO Application" />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      */
    }

    <Footer />
    <TopNavTitle title="Contacts Application" />
    <AddContact />
  </div>
)

export default App
