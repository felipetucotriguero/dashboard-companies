import React from 'react'

export default function LayoutAuth( {children} : {children: React.ReactNode }) {
  return (
    <div className='flex flex-col justify-center h-full items-center'>
      <p>Felipe Dev Dashboard</p>
      <h1 className='text-3xl my-2 mb-3'>
        Welcome to my dashboard</h1>

      {children}
    </div>

  )
}
  