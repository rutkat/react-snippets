/*
* Using a single event handler for multiple fields using a nested object 
* A nested object can be used to store multiple values in a react state
* Avoid nesting more than one object for simplicity
* In the handleChange function, a new object is created using the spread operator ... 
* and a conditional statement to update the parent object value or the nested values.
*/
import { useState } from 'react';

export default function Form() {
  // initial states values
  const [person, setPerson] = useState({
    email: '',
    info: {
      firstName: '',
      lastName: '',
    }
  });

  function handleChange(e) {
    // new object for person to be saved
    let updatedPerson = {}
    
    if (e.target.name === 'email') {
      updatedPerson = { 
        ...person, // copy person and info
        email: e.target.value // but replace email
      }
    }
    else {
      updatedPerson = {
        ...person, // Copy person email input
        info: { // but replace the info
          ...person.info, 
          [e.target.name]: e.target.value 
        }
      };
    }
    setPerson(updatedPerson); 
  }

  return (
    <>
      <label>First name:
        <input
          name="firstName"
          value={person.info.firstName}
          onChange={handleChange}
        />
      </label>
      <label>Last name:
        <input
          name="lastName"
          value={person.info.lastName}
          onChange={handleChange}
        />
      </label>
      <label>Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>{person.info.firstName}{' '} {person.info.lastName}{' '} 
        [{person.email}]</p>
    </>
  );
}
