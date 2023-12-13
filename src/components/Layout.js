import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block  sm:p-32 p-12 ${className}`}>
        {children}
    </div>
  )
}

export default Layout