import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IGLobalStore {
  tasks: ITask[];
}

const useGlobalStore = create<IGLobalStore>()(
  persist(
    (set, get) => ({
      tasks: [],
    }),
    {
      name: "todo-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
