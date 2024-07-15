import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IGLobalStore {
    tasks: ITask[];
    addTask: (task: ITask) => void;
    selectedTask: null | ITask;
    updateSelectedTask: (task: ITask) => void;
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
            selectedTask: null,

            addTask: (task) => {
                const { tasks } = get();
                const updatedTasks = [...tasks, task];
                set({ tasks: updatedTasks });
            },
            updateSelectedTask: (task) => {
                set({
                    selectedTask: task,
                });
            },
        }),
        {
            name: "todo-store",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
