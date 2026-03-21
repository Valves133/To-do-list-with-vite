import { BrowserRouter, Route, Routes } from "react-router";
import LayoutMain from "./pages/layout-main";
import PageComponent from "./pages/page-components";
import PageHome from "./pages/page-home";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain />}>
					<Route index element={<PageHome />} />
					<Route path="/components" element={<PageComponent />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

// export default App;
