
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

//function App() {

/*
  return (
    <div className="App"> {
        data.map((e,i) => {
          return 
            <ul key={i}>
              <li><img src={ e.pictureUrl} width="10%"/>,{e.name} ,{e.popularity}</li>
            </ul>
        })
      }
    </div>
  );
}*/


class App extends React.Component {
  //IT1
      state = {
        contacts: contacts.slice(0, 10) //5
}
// IT2
 handleRandom = () => {
  let randomIndex = Math.floor(Math.random() * contacts.length);
  let elem = contacts[randomIndex];
  this.setState({ contacts: [elem, ...this.state.contacts]})
}

// IT3
handleAlphabet = () => {
  const {contacts} = this.state;
  let clonedConts = JSON.parse(JSON.stringify(contacts))
  clonedConts.sort((a, b) => {
    if (a.name> b.name) {
      return 1;
    }
    else if (a.name < b.name){
      return -1;
    } 
    else {
      return 0
    }
  })
  this.setState({contacts: clonedConts})
}
  
handlePopularity = () => {
  const {contacts} = this.state;
  let clonedConts = JSON.parse(JSON.stringify(contacts))
  clonedConts.sort((a, b) => {
    if (a.popularity > b.popularity) {
      return -1;
    }
    else if (a.popularity < b.popularity){
      return 1;
    } 
    else {
      return 0
    }
  })
  this.setState({contacts: clonedConts})
}

// IT4 
handleDelete = (someId) => {
  const {contacts} = this.state
  let filteredConts = contacts.filter((singleContact) => {
      // return is a condition on how to filter elements 
      return singleContact.id !== someId
  })
  this.setState({
      contacts: filteredConts
  })
}

render() {
  const { contacts } = this.state;
  return(
    <div >
        <h1>IronContacts</h1>
          <thead>
            <tr>
              <button onClick={this.handleRandom}>Add Random Contact</button>
              <button onClick={this.handleAlphabet}>Sort by name</button>
              <button onClick={this.handlePopularity}>Sort by popularity</button>
            </tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
      </thead>
      <tbody>
        {contacts.map(contact => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="Image" 
                style={{height:'50px', width:'35px'}}></img>
              </td>
              <td>
                {contact.name}
              </td>
              <td>
              {contact.popularity}
              </td>
              <td>
              <button onClick={() => this.handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
      </div>
  )
}


}



  //const contactsAll = []
   /* for (let i = 0; i < 5; i++) {
      contactsAll.push(contacts[i])
    }

    return (
       <div>
        <h1>IronContacts</h1>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
      </thead>
      <tbody>
        {contactsAll.map(contact => {
          return (
            <tr>
              <td>
                <img src={contact.pictureUrl} alt="Image" style={{height:'50px', width:'35px'}}/>
              </td>
              <td>
                {contact.name}
              </td>
              <td>{
                contact.popularity}
                </td>
            </tr>
          )
        })}
      </tbody>
      </div>
  );
}

//Class App  extends React.Component {



//}*/



  


export default App;
