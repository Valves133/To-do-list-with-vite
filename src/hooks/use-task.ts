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

	function updateTask(id: string, payload: { title: Task["title"] }) {
		setTasks(
			safeTasks.map((task) =>
				task.id === id
					? { ...task, state: TaskState.Created, ...payload }
					: task,
			),
		);
	}

	function updateTaskStatus(id: string, concluded: boolean) {
		setTasks(
			safeTasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
		);
	}

	function deleteTask(id: string) {
		setTasks(safeTasks.filter((task) => task.id !== id));
	}

	return { prepareTask, updateTask, updateTaskStatus, deleteTask };
}
