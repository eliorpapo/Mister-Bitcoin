import { Component } from 'react';
import { contactService } from '../services/contactService';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { TransferFund } from '../components/TransferFund';
import { userService } from '../services/userService';

export class ContactDetails extends Component {
  state = {
    contact: null,
    loggedInUser: null,
  };

  componentDidMount() {
    this.loadContact();
    this.getLoggedInUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact();
    }
  }

  async loadContact() {
    const contact = await contactService.getById(this.props.match.params.id);
    this.setState({ contact });
  }

  getLoggedInUser() {
    const user = userService.getUser();
    this.setState({ loggedInUser: user });
  }

  onGoBack = () => {
    this.props.history.push('/contact');
  };
  addMove = (amount, contact) => {
    userService.addMove(contact, amount);
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading..</div>;

    return (
      <div className='contact-details'>
        <h1>{contact.name}</h1>
        <h3>{contact.email}</h3>
        <h3>{contact.phone}</h3>
        <img src={`https://robohash.org/${contact._id}`} alt='' />
        <TransferFund addMove={this.addMove} contact={contact} />
        <Button
          onClick={this.onGoBack}
          color='primary'
          startIcon={<KeyboardReturnIcon />}
          variant='contained'
        >
          Back
        </Button>
      </div>
    );
  }
}
