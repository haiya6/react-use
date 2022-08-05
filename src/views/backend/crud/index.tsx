import React from 'react'
import SearchForm from './SearchForm'
import List, { generateData } from './List'

const CRUD: React.FC = () => {
  return (
    <>
      <SearchForm />
      <List data={generateData(6)} />
    </>
  )
}

export default CRUD
