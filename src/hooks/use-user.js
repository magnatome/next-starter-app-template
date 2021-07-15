import useSWR from 'swr'
import fetcher from 'lib/fetcher'

// Example of what a hook using SWR might look like
// https://swr.vercel.app/examples/auth
const useUser = () => {
  const { data, mutate, error } = useSWR('/user', fetcher)

  const loading = !data && !error
  const loggedOut = error && error.status === 403

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  }
}

export default useUser
