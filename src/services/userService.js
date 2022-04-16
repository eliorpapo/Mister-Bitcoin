import { storageService } from './storageService'
const USER_KEY = 'user'
let loggedInUser

export const userService = {
  getUser,
  signUp,
  addMove,
}

function getUser() {
  let user = storageService.load(USER_KEY)
  return user
}

function addMove(contact, amount) {
  if (loggedInUser.coins - amount < 0) {
    alert('You dont have enough money')
    return
  }

  loggedInUser.coins -= amount
  let sentAt = new Date().toLocaleTimeString()
  loggedInUser.moves.unshift({ to: contact, amount, sentAt })
  storageService.store(USER_KEY, loggedInUser)
}

function signUp(name) {
  let user = { name, coins: 100, moves: [] }
  loggedInUser = user
  storageService.store(USER_KEY, loggedInUser)
}
