import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(),
        name: name,
        number: number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const changeFilter = createAction('contacts/changeFilter');

// Without toolkit:

// export const addContact = (name, number) => {
//   return {
//     name: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name: name,
//       number: number,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     name: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };
