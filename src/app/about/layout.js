import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-danger'>About Page Specific Layout</h1>
            {children}

        </div>

    )
}
export default Layout
