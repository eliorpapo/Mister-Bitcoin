import { Component } from 'react';
import { connect } from 'react-redux';
import { ContactList } from '../components/ContactList';
import { ContactFilter } from '../components/ContactFilter';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import {
  loadContacts,
  removeContact,
  setFilterBy,
} from '../store/actions/contactActions';

class _ContactPage extends Component {
  async componentDidMount() {
    await this.props.loadContacts();
  }

  removeContact = async (contactId) => {
    this.props.removeContact(contactId);
  };
  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy);
    this.props.loadContacts();
  };

  onEditContact = (ev) => {
    ev.preventDefault();
    this.props.history.push(`/contact/edit`);
  };

  render() {
    const { contacts } = this.props;
    if (!contacts) return <div>Loading...</div>;
    return (
      <div>
        <Link to='/'>
          <Button>Back to dashboard</Button>
        </Link>
        <div className='action-btns'>
          <ContactFilter onChangeFilter={this.onChangeFilter} />
          <IconButton
            onClick={this.onEditContact}
            edge='end'
            aria-label='delete'
          >
            <AddIcon />
          </IconButton>
        </div>
        <ContactList
          history={this.props.history}
          removeContact={this.removeContact}
          onSelectContact={this.onSelectContact}
          contacts={contacts}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactModule.contacts,
  };
};

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
};

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage);
