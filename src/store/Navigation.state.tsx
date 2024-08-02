import { create } from 'zustand'

interface StoreNavigation {
  selectedPage: string
  isTopOfPage: boolean
  setSelectedPage: (selectedPage: string) => void
  setIsTopOfPage: (selectedPage: boolean) => void
}

export const useStoreNavigation = create<StoreNavigation>((set) => ({
  selectedPage: 'Home',
  isTopOfPage: true,
  setSelectedPage: (selectedPage) => set({ selectedPage }),
  setIsTopOfPage: (isTopOfPage) => set({ isTopOfPage }),
}))
