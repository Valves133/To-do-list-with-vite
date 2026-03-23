import useLocalStorage from "use-local-storage-state";
import { TASKS_KEY, type Task, TaskState } from "../models/task";

export default function useTasks() {
	const [tasks] = useLocalStorage<Task[]>(TASKS_KEY);

	const safeTasks = tasks ?? [];

	return {
		safeTasks,
		tasksCount: safeTasks.filter((task) => task.state === TaskState.Created)
			.length,
		concludedTasksCount: safeTasks.filter((task) => task.concluded).length,
	};
}
