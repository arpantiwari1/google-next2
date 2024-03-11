import SearchHeader from '@/components/SearchHeader'
import React from 'react'
import '../../app/globals.css'
import SearchHeaderOptions from '@/components/SearchHeaderOptions'
import WebSearchPage from './web/page'

function layout({children}) {
  return (
    <div>
        <SearchHeader/>
        <SearchHeaderOptions/>
        {children}
    </div>
  )
}

export default layout