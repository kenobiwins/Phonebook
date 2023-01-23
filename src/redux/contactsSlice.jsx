import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// https://connections-api.herokuapp.com/
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63c81595e52516043f4b4ffc.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    ToggleFavorite: builder.mutation({
      query: data => {
        const { id, favorite } = data;
        return {
          url: `/contacts/${id}`,
          method: 'PUT',
          body: { favorite },
        };
      },
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useToggleFavoriteMutation,
} = contactsApi;
