import React from "react";

const ContactCard = (props) =>
{
    const {name , email, id} = props.contact
    return(
        <div className = "item">
                <div className = "contact">
                    <div className = "header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className = "trash alternate outline icon" style = { { color:"red", marginTop:"500px" } } onClick = {() => {
                    props.clickHandler(id)
                }}></i>
        </div>
    );
}

export default ContactCard; 