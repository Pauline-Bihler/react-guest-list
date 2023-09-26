// const baseUrl = 'http://localhost:3000/';

// export async function fetchAllGuests() {
//   try {
//     const response = await fetch(`${baseUrl}/guests`);
//     if (!response.ok) {
//       throw new Error('Error fetching all guests');
//     }
//     const allGuests = await response.json();
//     return allGuests;
//   } catch (error) {
//     console.error('Error in fetchAllGuests:', error);
//     throw error;
//   }
// }

// export async function fetchGuestById(id) {
//   try {
//     const response = await fetch(`${baseUrl}/guests/${id}`);
//     if (!response.ok) {
//       throw new Error('Error fetching guest by ID');
//     }
//     const guest = await response.json();
//     return guest;
//   } catch (error) {
//     console.error('Error in fetchGuestById:', error);
//     throw error;
//   }
// }

// export async function createGuest(firstName, lastName) {
//   try {
//     const response = await fetch(`${baseUrl}/guests`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName, lastName }),
//     });
//     if (!response.ok) {
//       throw new Error('Error creating guest');
//     }
//     const createdGuest = await response.json();
//     return createdGuest;
//   } catch (error) {
//     console.error('Error in createGuest:', error);
//     throw error;
//   }
// }

// export async function updateGuestAttendance(id, attending) {
//   try {
//     const response = await fetch(`${baseUrl}/guests/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ attending }),
//     });
//     if (!response.ok) {
//       throw new Error('Error updating guest attendance');
//     }
//     const updatedGuest = await response.json();
//     return updatedGuest;
//   } catch (error) {
//     console.error('Error in updateGuestAttendance:', error);
//     throw error;
//   }
// }

// export async function deleteGuest(id) {
//   try {
//     const response = await fetch(`${baseUrl}/guests/${id}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) {
//       throw new Error('Error deleting guest');
//     }
//     const deletedGuest = await response.json();
//     return deletedGuest;
//   } catch (error) {
//     console.error('Error in deleteGuest:', error);
//     throw error;
//   }
// }
