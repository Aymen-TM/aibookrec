import React from 'react'
import Form from './Form'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='basis-1/5 flex justify-center items-center'>
          <div>
           <Form />
          </div>
      </div>
      <div className='flex-1'>
          {children}
      </div>
    </div>
  )
}

export default Layout