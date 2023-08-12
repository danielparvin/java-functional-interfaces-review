import './App.css';
import React, {useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
	useEffect(() => {
		document.title = "Review of java.util.function";
	}, []);
	
  return (
	<>
		<Header />
		
		<Footer />
	</>
  );
}

export default App;
