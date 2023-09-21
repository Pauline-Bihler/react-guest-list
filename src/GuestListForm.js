import React, { useState } from 'react';

export default function GuestListForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]); // Use an array to store guest information
  const [isAttending, setIsAttending] = useState(false);

  // Return button
  const addGuest = () => {
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      const newGuest = {
        firstName,
        lastName,
        isAttending,
      };

      // Add the new guest to the array using spread operator
      setGuestList([...guestList, newGuest]);
      setFirstName('');
      setLastName('');
      setIsAttending(false);
    }
  };

  // Change the attendance of a specific guest
  const attendanceChange = (index) => {
    const updatedGuestList = [...guestList];
    updatedGuestList[index].isAttending = !updatedGuestList[index].isAttending;
    setGuestList(updatedGuestList);
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
        {guestList.map((guest, index) => (
          <div key={`guest-${index.id}`} data-test-id="guest">
            <p>
              Guest Name: {guest.firstName} {guest.lastName}
            </p>
            <p>Status: {guest.isAttending ? 'Attending' : 'Not Attending'}</p>
            <label>
              Change Attendance:
              <input
                type="checkbox"
                checked={guest.isAttending}
                onChange={() => attendanceChange(index)} // Pass the index
              />
            </label>
            <br />
            <br />
            <div className="remove">
              <button>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
