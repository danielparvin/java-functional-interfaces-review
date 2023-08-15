import './App.css';
import React, {useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
	return (
		<div class="flex-box">
			<Header />
			<div class="flex-content">
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
