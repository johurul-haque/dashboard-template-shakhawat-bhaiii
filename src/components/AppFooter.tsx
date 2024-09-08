import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <Link to="/" target="_blank" rel="noopener noreferrer">
          BiddaPit
        </Link>
        <span className="ms-1">&copy; Copyright 2024  </span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <Link to="/" target="_blank" rel="noopener noreferrer">
          Rajib. Admin &amp; Development
        </Link>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
