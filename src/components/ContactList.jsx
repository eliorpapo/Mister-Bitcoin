import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onSelectContact, removeContact, history }) {
  return (
    <section className="contact-list">
      <h2>Your Contacts</h2>
      {contacts.map((contact) => (
        <ContactPreview
          history={history}
          removeContact={removeContact}
          onSelectContact={onSelectContact}
          contact={contact}
          key={contact._id}
        />
      ))}
    </section>
  )
}
