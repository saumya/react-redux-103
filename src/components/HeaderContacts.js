import React from 'react'
import FilterLink from '../containers/FilterLink'

const Header = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Not in Touch
    </FilterLink>
  </p>
)

export default Header
