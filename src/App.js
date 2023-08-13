import './App.css';
import React, {useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
	useEffect(() => {
		document.title = "Review of java.util.function";
	}, []);
	
  return (
	<>
		<Header />
		<Main />
		<Footer />
	</>
  );
}

export default App;
