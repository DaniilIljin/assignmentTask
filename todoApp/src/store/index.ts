import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IGLobalStore {
    tasks: ITask[];
}

export const useGlobalStore = create<IGLobalStore>()(
    persist(
        (set, get) => ({
            tasks: [
                {
                    name: "first task",
                    isCompleted: false,
                    description: "please finish this. :)",
                },
            ],
        }),
        {
            name: "todo-store",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
