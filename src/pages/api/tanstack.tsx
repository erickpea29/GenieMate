import React from "react";
import {
  QueryClient,
  useQuery
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Resume() {
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['connectServer'],
        queryFn: async () => {
          const response = await fetch(
            'http://3.131.56.243:8000/',
          )
          return await response.json()
        },
      })
      if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.full_name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}