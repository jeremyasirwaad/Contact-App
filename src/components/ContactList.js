import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>
{   

    const deletelist = (id)=>
    {
        props.getContactId(id);
    }

    const rendercontactlist = props.contacts.map((items => {
        return(
            <ContactCard contact = {items} key = {items.id} clickHandler = {deletelist}/>
        )
    }))


    return(
        <div className = "ui celled list">{rendercontactlist}</div>
    );
}

export default ContactList