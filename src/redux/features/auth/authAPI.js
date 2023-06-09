import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	endpoints: (builder) => ({
		signin: builder.mutation({
			query: (auth) => ({
				url: 'api/auth/signin',
				method: 'POST',
				body: auth,
			}),
		}),
		signout: builder.mutation({
			query: () => ({
				url: 'api/auth/signout',
				method: 'POST',
			}),
		}),
		signup: builder.mutation({
			query: (user) => ({
				url: 'api/auth/signup',
				method: 'POST',
				body: user,
			}),
		}),
	}),
})
export const { useSigninMutation, useSignoutMutation, useSignupMutation } = authAPI
