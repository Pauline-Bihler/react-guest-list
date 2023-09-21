import React, { useState } from 'react';

export default function GuestListForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showNames, setShowNames] = useState(false);

  const addGuest = () => {
    setShowNames(true);
  };

  return (
    <main>
      <div>
        <h1>Guest List</h1>
        <br />
      </div>
      <p> Add a guest here:</p>
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="firstName">First Name:</label>
          <input
            value={firstName}
            id="topText"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </form>
        <br />
        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            value={lastName}
            id="topText"
            onChange={(event) => setLastName(event.target.value)}
          />
        </form>
        <br />
        <div className="return">
          <button onClick={addGuest}>Return</button>
        </div>
        {showNames && (
          <div>
            <p>
              Guest Name: {firstName} {lastName}
            </p>
            {/* <p>Last Name: {lastName}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
