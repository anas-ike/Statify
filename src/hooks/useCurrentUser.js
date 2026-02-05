import { useContext } from 'react'
import { CurrentUserContext } from '../context/currentUser'

export function useCurrentUser() {
  return useContext(CurrentUserContext)
}
