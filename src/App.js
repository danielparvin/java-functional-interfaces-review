import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import About from "./About";

function App() {
	return (
		<div class="flex-box">
			<Header />
			<div class="flex-content">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
