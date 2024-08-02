import { create } from 'zustand'

interface StoreNavigation {
  currentPage: string
  setCurrentPage: (currentPage: string) => void
}

export const useStoreNavigation = create<StoreNavigation>((set) => ({
  currentPage: 'Home',
  setCurrentPage: (currentPage) => set({ currentPage }),
}))
