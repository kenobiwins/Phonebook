// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter.filterValue;

export const getLoadingStatus = state => state.contacts.isLoading;

export const getErrorStatus = state => state.contacts.error;
