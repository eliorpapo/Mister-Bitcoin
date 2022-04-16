import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export function TransferFund({ addMove, contact }) {
  var amount
  const handleChange = ({ target }) => {
    amount = target.value
  }
  const onAddMove = () => {
    if (!amount) return
    addMove(amount, contact)
  }

  return (
    <section className='transfer-fund'>
      <h2>Transfer coins to {contact.name}</h2>
      <div className='transfer-controll'>
        <TextField
          label='How much to transfer?'
          onChange={handleChange}
          name='numberformat'
          id='formatted-numberformat-input'
          variant='standard'
        />
        <Link to={'/contact'}>
          <Button onClick={onAddMove} variant='contained' color='secondary'>
            Send
          </Button>
        </Link>
      </div>
    </section>
  )
}
