import React from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
function App() {
  const contacts = [ 
    {
      id: "1",
      name: "John Doe",
      email: "john@gmail.com"
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "janne@gmail.com"
    },
    {
      id: "3",
      name: "John Smith",
      email: "johnsmith@gmail.com"
    }

  ];
  return (
    <div className="ui container">
          <Header />
        <AddContact />
        <ContactList  contacts ={contacts} />
    </div>
  );
}

export default App;

