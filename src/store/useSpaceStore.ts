import { create } from "zustand";

interface SpaceStore {
  selectedSpaceId: string | null;
  setSelectedSpaceId: (id: string) => void;
}

export const useSpaceStore = create<SpaceStore>((set) => ({
  selectedSpaceId: null,
  setSelectedSpaceId: (id) => set({ selectedSpaceId: id }),
}));
