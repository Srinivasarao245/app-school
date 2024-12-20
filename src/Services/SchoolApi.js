// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const SchoolApi = createApi({
  reducerPath: 'SchoolApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4600' }),
  endpoints: (builder) => ({
    getSchoolName: builder.query({
      query: () => `/`,
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSchoolNameQuery, } = SchoolApi