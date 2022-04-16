import { Component } from 'react';
import { contactService } from '../services/contactService.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SaveIcon from '@mui/icons-material/Save';
import PhoneIcon from '@mui/icons-material/Phone';
import { connect } from 'react-redux';
import { save } from '../store/actions/contactActions';

class _ContactEdit extends Component {
  state = {
    contact: null,
  };

  async componentDidMount() {
    const contactId = this.props.match.params.id;
    const contact = contactId
      ? await contactService.getById(contactId)
      : contactService.getEmptyContact();
    this.setState({ contact });
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'number' ? +target.value : target.value;
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }));
  };

  onSaveContact = async (ev) => {
    ev.preventDefault();
    this.props.save({ ...this.state.contact });
    this.props.history.push('/contact');
  };

  render() {
    const { contact } = this.state;
    if (!contact) return <div>Loading...</div>;
    return (
      <div className='contact-edit'>
        <img src={`https://robohash.org/${contact._id}`} alt='' />
        <form onSubmit={this.onSaveContact}>
          <label htmlFor='name'>Name</label>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              id='name'
              onChange={this.handleChange}
              value={contact.name}
              name='name'
              variant='standard'
            />
          </Box>
          <label htmlFor='phone'>Phone</label>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PhoneIcon />
            <TextField
              onChange={this.handleChange}
              value={contact.phone}
              type='text'
              name='phone'
              id='phone'
              variant='standard'
            />
          </Box>
          <label htmlFor='email'>Email</label>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutlineIcon />
            <TextField
              onChange={this.handleChange}
              value={contact.email}
              type='text'
              name='email'
              id='email'
              variant='standard'
            />
          </Box>
          <Button
            onClick={this.onSaveContact}
            color='secondary'
            startIcon={<SaveIcon />}
            variant='contained'
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contactModule.contact,
  };
};

const mapDispatchToProps = {
  save,
};

export const ContactEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactEdit);
