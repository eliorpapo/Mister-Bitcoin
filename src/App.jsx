import { BitcoinApp } from './pages/BitcoinApp'
import './styles/main.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ContactDetails } from './pages/ContactDetailsPage'
import { StatisticPage } from './pages/StatisticPage'
import { ContactPage } from './pages/ContactPage'
import { Login } from './pages/Login'
import { ContactEdit } from './pages/ContactEdit'
import { MainHeader } from './components/MainHeader'

export function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <main className="container">
          <Switch>
            <Route component={ContactEdit} path="/contact/edit/:id?" />
            <Route component={ContactDetails} path="/contact/:id" />
            <Route component={ContactPage} path="/contact" />
            <Route component={StatisticPage} path="/statistic" />
            <Route component={Login} path="/login" />
            <Route component={BitcoinApp} path="/" />
          </Switch>
        </main>
      </div>
    </Router>
  )
}
