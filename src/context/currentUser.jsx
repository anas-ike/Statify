import { createContext, useState } from 'react'

export const CurrentUserContext = createContext(null)

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null) // MUST be null, not []

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
