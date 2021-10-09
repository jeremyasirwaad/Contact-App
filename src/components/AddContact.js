
import React from "react"
import './App.css'
class AddContact extends React.Component {

    add = (e) =>
    {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "")
        {
            alert("All the fills all required");
            return
        }
        this.props.addcontacthandler(this.state);
        this.setState({name:"", email: ""})
    }

    state = {
        name: "",
        email: "",
    }


    render() { 
        return <div className = "ui main addcontactcon">
            <h1 >Add Contact</h1>
            <form className = "ui form" onSubmit = {this.add} >
                <div className = "field">
                    <label>Name</label>
                    <input type = "text" name = "name" placeholder = "Name" value = {this.state.name} onChange={(e)=>this.setState({name: e.target.value})}></input>
                </div>
                <div className = "field">
                    <label>Email</label>
                    <input type = "text" name = "email" placeholder = "email" value = {this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
                </div>
                <button className = "ui button blue">Add</button>
            </form >
        </div>;
    }
}
 



export default AddContact;