import { Component } from 'react'
import { userService } from '../services/userService.js'
import { bitcoinService } from '../services/bitcoinService.js'
import { UserPreview } from '../components/UserPreview'
import { MoveList } from '../components/MoveList'

export class BitcoinApp extends Component {
  state = {
    user: null,
    rate: 0,
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser() {
    const user = userService.getUser()
    if (!user) this.props.history.push('/login')
    this.setState({ user }, () => {
      this.getBitcoinRate()
    })
  }

  getBitcoinRate = async () => {
    const rate = await bitcoinService.getRate(this.state.user.coins)
    this.setState({ rate })
  }

  render() {
    const { user, rate } = this.state
    if (!user) return <div className="loader">Loading...</div>
    return (
      <div className="bitcoin-app">
        <div className="user-preview-container">
          <UserPreview user={user} rate={rate} />
          <MoveList moves={user.moves} />
        </div>
      </div>
    )
  }
}
