import React from 'react'

export function UserPreview({ user, rate }) {
  return (
    <div>
      <article className='user-preview'>
        <h2>Hello {user.name}</h2>
        <img src={`https://robohash.org/1`} alt='' />
        <h3>Your Balance: {user.coins}$</h3>
        <h3>Btc: {rate}</h3>
      </article>
    </div>
  )
}
