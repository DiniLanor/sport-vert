import React from 'react';
import { MyButton, MyModal } from '../components';

const HeaderLayout = () => {


	return (
		<header className="header" data-header>
			<div className="container">

				<h1>
					{/* <a href="#" className="logo" style={{color: "#2e9e2e"}}>Sport Vert</a> */}
					<img src="/images/img/logo_blanc.png" style={{ width: "30%" }} alt="logo" />
				</h1>

				{/* <select name="language" className="lang-switch">

				<option value="english">English</option>
				<option value="french">French</option>

			</select> */}

				<button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
					<ion-icon name="menu-outline"></ion-icon>
				</button>

				<nav className="navbar" data-navbar>

					<button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
						<ion-icon name="close-outline"></ion-icon>
					</button>

					<a href="#" className="logo" style={{ color: "#2e9e2e" }}>Sport Vert</a>

					<ul className="navbar-list">

						<li>
							<a href="#home" className="navbar-link" data-nav-link>
								<span>Accueil</span>

								<ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
							</a>
						</li>

						<li>
							<a href="#about" className="navbar-link" data-nav-link>
								<span>A propos</span>

								<ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
							</a>
						</li>

						<li>
							<a href="#service" className="navbar-link" data-nav-link>
								<span>Projets</span>

								<ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
							</a>
						</li>

						{/* <li>
						<a href="#donate" className="navbar-link" data-nav-link>
							<span>Donation</span>

							<ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
						</a>
					</li>  */}

						<li>
							<a href="#event" className="navbar-link" data-nav-link>
								<span>Evenements</span>

								<ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
							</a>
						</li>

						<li>
							<a href="#" className="navbar-link" data-nav-link>
								<span>Contact</span>

								<ion-icon name="chevron-forward-outline" aria-hidden="true"></ion-icon>
							</a>
						</li>

					</ul>

				</nav>

				<div className="header-action">

					<MyButton cls="primary" title="Faire un don" icon="heart-outline" modal action={() => null} uni='header' />

				</div>

				<MyModal content={<>Mondal du don</>} title="Faire un don general" uni="header" />

			</div>
		</header>
	);
}

export default HeaderLayout;
