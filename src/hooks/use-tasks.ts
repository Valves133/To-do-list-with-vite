import useLocalStorage from "use-local-storage-state";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTasks() {
	const [tasks] = useLocalStorage<Task[]>(TASKS_KEY);

	const safeTasks = tasks ?? [];

	return {
		safeTasks,
		tasksCount: safeTasks.length,
		concludedTasksCount: safeTasks.filter((task) => task.concluded).length,
	};
}
