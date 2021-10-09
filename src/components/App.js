import Header from "./Header"
import React, {useState,useEffect}from "react";
// import ContactCard from "./ContactCard"
import ContactList from './ContactList'
import { uuid } from 'uuidv4'
import AddContact from "./AddContact"
import './App.css';

function App() {

  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts , setContacts] = useState([]);
  const addcontacthandler = (contact) =>
  {
    setContacts([...contacts, { id: uuid(), ...contact}]);
    console.log(contacts)
  }

  const removeContactHandler =(id) =>
  {
    const newListContacts = contacts.filter((contacts)=>{
      return contacts.id !== id
    });

    setContacts(newListContacts);
  }

  useEffect(() => 
  {
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrivecontacts) setContacts(retrivecontacts)
  }, []);


  useEffect(() => 
  {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className = "ui center aligned container"  style = {{width: '40%'}}>
        <Header />
        <AddContact addcontacthandler = {addcontacthandler} />
        <ContactList  contacts = {contacts} getContactId = { removeContactHandler } />

    </div>
  );
}



export default App;
