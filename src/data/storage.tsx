import { create } from "zustand";

interface CpuBoardTypes {
    CpuBoard: number[],
    Guess?: (index: number) => void
}

export const cpuBoardStore = create<CpuBoardTypes>()((set) => (
    {
        CpuBoard: Array(100).fill(0),
        Guess: () => set((state) => ({ CpuBoard: state.CpuBoard }))
    }
));