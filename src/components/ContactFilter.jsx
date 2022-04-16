import { Component } from 'react'
import TextField from '@mui/material/TextField'

export class ContactFilter extends Component {
  state = {
    text: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state)
    })
  }

  render() {
    const { text } = this.state
    return (
      <form className="contact-filter">
        <section className="input-container">
          <label htmlFor="text"></label>
          <TextField
            id="standard-basic"
            placeholder="Contact name"
            onChange={this.handleChange}
            value={text}
            type="text"
            name="text"
            variant="standard"
          />
        </section>
      </form>
    )
  }
}
