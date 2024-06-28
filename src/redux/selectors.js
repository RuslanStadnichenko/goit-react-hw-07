import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter.filter;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const result = contacts.items.filter((contact) => {
      return contact.name.toLowerCase().includes(filter);
    });

    return result;
  }
);