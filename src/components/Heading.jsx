import React from 'react'

const Heading = ({heading, totalProducts}) => {
  return (
    <nav>
      <h1 className="text-2xl">{heading}({totalProducts}) - {Date.now()}</h1>
    </nav>
  )
}

export default Heading