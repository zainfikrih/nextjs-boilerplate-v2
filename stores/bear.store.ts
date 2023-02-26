import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface BearState {
    bears: number
    increase: (by: number) => void
    removeAll: () => void
}

export const useBearStore = create<BearState>()((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
    removeAll: () => set({ bears: 0 }),
}))

export const useBearPersistStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                bears: 0,
                increase: (by) => set((state) => ({ bears: state.bears + by })),
                removeAll: () => set({ bears: 0 })
            }),
            {
                name: 'bear-storage', // unique name
                storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used to save when tab close. 'sessionStorage' save when tab not close, only reload
            }
        )
    )
)