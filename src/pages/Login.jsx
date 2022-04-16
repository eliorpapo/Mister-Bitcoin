import { Component } from 'react'
import bitcoin from '../assets/images/bitcoin.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { userService } from '../services/userService'

export class Login extends Component {
  state = {
    username: '',
  }

  handleChange = ({ target }) => {
    const value = target.value
    this.setState({ username: value })
  }

  signUp = () => {
    userService.signUp(this.state.username)
    this.props.history.push('/')
  }

  render() {
    const { username } = this.state
    return (
      <section className='login-page'>
        <img src={bitcoin} alt='bitcoin' />
        <h1>Welcome !</h1>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText='Please enter your name'
            id='demo-helper-text-misaligned'
            label='Name'
            value={username}
            onChange={this.handleChange}
            type='text'
            name='name'
          />
        </Box>
        <Button onClick={this.signUp} variant='contained'>
          Login
        </Button>
      </section>
    )
  }
}
