import useLocalStorage from "use-local-storage-state";
import { TASKS_KEY, type Task, TaskState } from "../models/task";

export default function useTask() {
	const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY);
	const safeTasks = tasks ?? [];

	function prepareTask() {
		setTasks([
			...safeTasks,
			{
				id: Math.random().toString(36).substring(2, 9),
				title: "",
				state: TaskState.Creating,
			},
		]);
	}

	return { prepareTask };
}
