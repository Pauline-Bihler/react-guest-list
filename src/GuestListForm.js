import React, { useEffect, useState } from 'react';

export default function GuestListForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [guestList, setGuestList] = useState([]);
  const [isAttending, setIsAttending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [disabledInputs, setDisabledInputs] = useState(false);
  // const baseUrl = 'http://localhost:3000/';
  // const baseUrl =
  //   'http://express-guest-list-api-memory-data-store--pauline-bihler.repl.co/guests/';

  const baseUrl =
    'https://express-guest-list-api-memory-data-store--pauline-bihler.repl.co';

  // Function to fetch all guests
  const fetchAllGuests = async () => {
    try {
      const response = await fetch(`${baseUrl}/guests/`); // removed / in this code (`${baseUrl}/guests`)
      if (!response.ok) {
        throw new Error('Error fetching all guests');
      }
      const allGuests = await response.json();
      setGuestList(allGuests);
      setIsLoading(false); // Set isLoading to false when data is loaded
      // setDisabledInputs(false); // Set disabledInputs to false when data is loaded
    } catch (error) {
      console.error('Error fetching all guests:', error);
    }
  };

  // Use useEffect to fetch guests when the component mounts
  useEffect(() => {
    fetchAllGuests()
      .then(() => {
        // Any code you want to execute after fetching guests
      })
      .catch((error) => {
        console.error('Error fetching guests:', error);
      });
  }, []);

  // Function to submit a new guest
  const addGuest = async () => {
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      try {
        // Create a new guest object based on the form inputs
        const newGuest = {
          firstName: firstName,
          lastName: lastName,
          isAttending: isAttending,
        };

        // Update state to add the new guest
        setGuestList([...guestList, newGuest]);
        setFirstName('');
        setLastName('');
        setIsAttending(false);

        // Send the POST request to the API
        const response = await fetch(`${baseUrl}/guests/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newGuest),
        });

        if (!response.ok) {
          throw new Error('Error creating guest');
        }
      } catch (error) {
        console.error('Error adding guest:', error);
      }
    }
  };

  // // Return button
  // const addGuest = () => {
  //   if (firstName.trim() !== '' && lastName.trim() !== '') {
  //     const newGuest = {
  //       firstName,
  //       lastName,
  //       isAttending,
  //     };

  //     // Add the new guest to the array using spread operator
  //     setGuestList([...guestList, newGuest]);
  //     setFirstName('');
  //     setLastName('');
  //     setIsAttending(false);
  //   }
  // };

  // Change the attendance of a specific guest
  const attendanceChange = async (index) => {
    try {
      const updatedGuestList = [...guestList];
      const guestToUpdate = updatedGuestList[index];

      // Update the isAttending property
      guestToUpdate.isAttending = !guestToUpdate.isAttending;

      // Send the PUT request to update guest attendance
      const response = await fetch(`${baseUrl}/guests/${guestToUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: guestToUpdate.isAttending }),
      });

      // Update the state with the updated guest before error check
      setGuestList(updatedGuestList);

      if (!response.ok) {
        throw new Error('Error updating guest attendance');
      }
    } catch (error) {
      console.error('Error updating guest attendance:', error);
    }
  };

  // Change the attendance of a specific guest
  // const attendanceChange = (index) => {
  //   const updatedGuestList = [...guestList];
  //   updatedGuestList[index].isAttending = !updatedGuestList[index].isAttending;
  //   setGuestList(updatedGuestList);
  // };

  // Remove a guest
  const removeGuest = async (index) => {
    try {
      const guestToDelete = guestList[index];

      // Send the DELETE request to the API
      const response = await fetch(`${baseUrl}/guests/${guestToDelete.id}`, {
        method: 'DELETE',
      });

      // Update the state to remove the guest
      const updatedGuestList = guestList.filter((element, i) => i !== index);
      setGuestList(updatedGuestList);

      if (!response.ok) {
        throw new Error('Error deleting guest');
      }
    } catch (error) {
      console.error('Error removing guest:', error);
    }
  };

  // Remove a guest
  // const removeGuest = (index) => {
  //   const updatedGuestList = [...guestList];
  //   updatedGuestList.splice(index, 1); // Remove the guest at the specified index
  //   setGuestList(updatedGuestList);
  // };

  return (
    <main>
      <div>
        <h1>Guest List</h1>
        <br />
      </div>
      <p> Add a guest here:</p>
      {/* <div> */}
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="First name">First name</label>
        <input
          value={firstName}
          id="First name"
          disabled={isLoading}
          // disabled={disabledInputs}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </form>
      <br />
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="Last name">Last name</label>
        <input
          value={lastName}
          id="Last name"
          disabled={isLoading}
          // disabled={disabledInputs}
          onChange={(event) => setLastName(event.target.value)}
        />
      </form>
      <br />
      <div className="return">
        <button onClick={addGuest}>Return</button>
      </div>
      {isLoading ? 'Loading...' : ''}
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
          <div className="remove">
            <button onClick={() => removeGuest(index)}>Remove</button>
          </div>
        </div>
      ))}
      {/* </div> */}
    </main>
  );
}

// Before Api

// import React, { useState } from 'react';

// export default function GuestListForm() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [guestList, setGuestList] = useState([]); // Use an array to store guest information
//   const [isAttending, setIsAttending] = useState(false);

//   // Return button
//   const addGuest = () => {
//     if (firstName.trim() !== '' && lastName.trim() !== '') {
//       const newGuest = {
//         firstName,
//         lastName,
//         isAttending,
//       };

//       // Add the new guest to the array using spread operator
//       setGuestList([...guestList, newGuest]);
//       setFirstName('');
//       setLastName('');
//       setIsAttending(false);
//     }
//   };

//   // Change the attendance of a specific guest
//   const attendanceChange = (index) => {
//     const updatedGuestList = [...guestList];
//     updatedGuestList[index].isAttending = !updatedGuestList[index].isAttending;
//     setGuestList(updatedGuestList);
//   };

//   // Remove a guest
//   const removeGuest = (index) => {
//     const updatedGuestList = [...guestList];
//     updatedGuestList.splice(index, 1); // Remove the guest at the specified index
//     setGuestList(updatedGuestList);
//   };

//   return (
//     <main>
//       <div>
//         <h1>Guest List</h1>
//         <br />
//       </div>
//       <p> Add a guest here:</p>
//       <div>
//         <form onSubmit={(event) => event.preventDefault()}>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             value={firstName}
//             id="topText"
//             onChange={(event) => setFirstName(event.target.value)}
//           />
//         </form>
//         <br />
//         <form onSubmit={(event) => event.preventDefault()}>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             value={lastName}
//             id="topText"
//             onChange={(event) => setLastName(event.target.value)}
//           />
//         </form>
//         <br />
//         <div className="return">
//           <button onClick={addGuest}>Return</button>
//         </div>
//         {guestList.map((guest, index) => (
//           <div key={`guest-${index.id}`} data-test-id="guest">
//             <p>
//               Guest Name: {guest.firstName} {guest.lastName}
//             </p>
//             <p>Status: {guest.isAttending ? 'Attending' : 'Not Attending'}</p>
//             <label>
//               Change Attendance:
//               <input
//                 type="checkbox"
//                 checked={guest.isAttending}
//                 onChange={() => attendanceChange(index)} // Pass the index
//               />
//             </label>
//             <div className="remove">
//               <button onClick={() => removeGuest(index)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
