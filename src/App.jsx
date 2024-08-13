import React from 'react';
import { Code, Home } from './pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {

	React.useEffect(() => {

		if(window.location.pathname !== "/codes"){
			const navOpenBtn = document.querySelector("[data-nav-open-btn]");
			const navbar = document.querySelector("[data-navbar]");
			const navCloseBtn = document.querySelector("[data-nav-close-btn]");
	
			const navElemArr = [navOpenBtn, navCloseBtn];
	
			for (let i = 0; i < navElemArr.length; i++) {
				navElemArr[i].addEventListener("click", function () {
					navbar.classList.toggle("active");
				});
			}
	
	
			const navbarLinks = document.querySelectorAll("[data-nav-link]");
	
			for (let i = 0; i < navbarLinks.length; i++) {
				navbarLinks[i].addEventListener("click", function () {
					navbar.classList.remove("active");
				});
			}
	
			const header = document.querySelector("[data-header]");
	
			window.addEventListener("scroll", function () {
				window.scrollY >= 50 ? header.classList.add("active")
					: header.classList.remove("active");
			});
		}

		return () => {
		};
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/codes' element={<Code />} />
		</Routes>
	);
}

export default App;
