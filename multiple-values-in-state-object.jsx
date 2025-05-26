/*
* Using a single event handler for multiple fields 
* An object can be used to store multiple values in a react state
* In the handleChange function, a new object is created using the spread operator ... 
* and merging it with the new input value.
*/
import { useState } from 'react';

export default function Form() {
  // set initial state value
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleChange(e) {
    // Combine previous state object with new value to create a new object
    // instead of mutating the existing object
    setPerson({
      ...person, 
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>Last name:
        <input
          name="lastName"
          value={person.lastName}
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
      <p> {person.firstName}{' '} {person.lastName}{' '} Email Address: {person.email} </p>
    </>
  );
}
