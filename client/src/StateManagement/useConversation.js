import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConcersation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessage: (messages) => set({ messages }),
}));

export default useConversation;
