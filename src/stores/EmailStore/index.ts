import { create } from "zustand";
import { EmailState } from "./@types";

export const useEmailStore = create<EmailState>((set) => ({
  hasSend: null,
  setHasSend: (hasSend: boolean | null) => set({ hasSend: hasSend }),
}));
