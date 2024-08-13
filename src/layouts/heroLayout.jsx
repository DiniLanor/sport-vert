import React, { useEffect, useState } from 'react';
import { MyButton, MyModal } from '../components';

const imgs = ["single-sport_1920.jpg", "single-sport2_1920.jpg"];

const HeroLayout = () => {

	let a = 0;
	const [immgg, setImmgg] = useState(imgs[a]);

	useEffect(() => {
		let timer = setInterval(() => {
			a++;
			setImmgg(imgs[a % 2])
		}, 5000);


		return () => {
			clearInterval(timer);
		};
	}, []);


	return (
		<section className="hero" style={{
			backgroundImage: `url('/images/img/${immgg}')`
		}} id="home">
			<div className="container">

				<p className="section-subtitle">
					<img src="/images/subtitle-img-white.png" width="32" height="7" alt="Wavy line" />

					<span>Bienvenu au <span
						style={{ display: "inline-flex", backgroundColor: "#185a18", paddingRight: "3px", paddingLeft: "3px", borderRadius: "5px" }}>Sport
						Vert</span>
					</span>
				</p>

				<h2 className="h1 hero-title">
					Pratiquer le sport dans le respect et la protection de <strong
						style={{ display: "inlineFlex", fontSize: "1.5em", color: "#61e456", textDecoration: "underline" }}>L'environnement</strong>
				</h2>

				<p className="hero-text">
					<span>Développement durable, s'engager avec Sport-Vert.</span>
				</p>

				<MyButton cls="primary" title="Faire un don" icon="heart-outline" modal action={() => null} uni="hero" />
				<MyModal content={<>Mondal du don</>} title="Faire un don general" uni={"hero"} />


			</div>
		</section>
	);
}

export default HeroLayout;
