import React from 'react'
import { Divider } from '@mui/material'

export function MoveList({ moves }) {
  return (
    <section className="move-list">
      {!moves.length ? '' : <h2>Your last 3 Moves</h2>}
      <Divider></Divider>
      {moves.slice(0, 3).map((move) => (
        <div key={move.to._id + Math.random()} className="move-list-item">
          <h3>To {move.to.name} </h3>➡<h3>Amount: {move.amount} Coins</h3>➡
          <h3>Sent at: {move.sentAt} </h3>
        </div>
      ))}
    </section>
  )
}
