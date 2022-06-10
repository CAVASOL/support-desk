import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Home() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <section className='heading'>
        <h1>Welcome { user && user.name }</h1>
        <p>What do you need help with?</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle /> Create New Ticket
      </Link>
      <Link to='/ticket' className='btn btn-block'>
        <FaTicketAlt /> View My Tickets
      </Link>
    </>

  )
}

export default Home
