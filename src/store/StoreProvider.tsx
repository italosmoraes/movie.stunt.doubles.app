import { MovieDoubles } from '../MockApi/data-sources/MovieDoubles'
import React, { ReactNode, useContext, useEffect, useState } from 'react'

// TODO add proper types for all entities and vars

export interface StoreProviderType {
  doubles: any[]
}

const StoreContext = React.createContext({} as StoreProviderType)

// TODO there could be a store for reach type of entity e.g. UserStore, TodosStore
export function StoreProvider({ children }: { children: ReactNode }) {
  const [doubles, setDoubles] = useState<any[]>([])

  useEffect(() => {
    setDoubles(MovieDoubles.records)
  }, [])

  return <StoreContext.Provider value={{ doubles }}>{children}</StoreContext.Provider>
}

export default function useStore() {
  return useContext(StoreContext)
}
