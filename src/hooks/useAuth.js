function useAuth() {

  const authed = localStorage.getItem('token')

  return { authed }
}

export default useAuth