import Text from "./components/text"

export default function App() {
	return (
		<div className="flex flex-col gap-2">
			<Text variant="body-sm-bold" className="text-pink-base">
					Hello World!
			</Text>
				<Text className="text-green-base">
					Hello World!
			</Text>
				<Text variant="body-sm-bold">
					Hello World!
			</Text>
		</div>
	);
}

// export default App;
