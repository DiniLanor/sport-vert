import React from 'react';

const AboutLayout = () => {
    return (
        <section className="section about" id="about">
            <div className="container">

                <div className="about-banner">

                    <h2 className="deco-title">A propos</h2>

                    <img src="/images/deco-img.png" width="58" height="261" alt="" className="deco-img" />

                    <div className="banner-row">

                        <div className="banner-col">
                            <img src="/images/img/pop1.jpg" width="315" height="380" loading="lazy"
                                alt="Tiger" className="about-img w-100" />

                            <img src="/images/img/hndi1.png" width="386" height="350" loading="lazy"
                                alt="Panda" className="about-img about-img-2 w-100" />
                        </div>

                        <div className="banner-col">
                            <img src="/images/img/single-sport_319.jpg" width="250" height="277" loading="lazy"
                                alt="Elephant" className="about-img about-img-3 w-100" />

                            <img src="/images/img/Lummmmiii.png" width="315" height="380" loading="lazy"
                                alt="Deer" className="about-img w-100" />
                        </div>

                    </div>

                </div>

                <div className="about-content">

                    <p className="section-subtitle">
                        <img src="/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />

                        <span>Sante et environnement</span>
                    </p>

                    <h2 className="h2 section-title">
                        Joignez-vous au mouvement Sport-Vert pour contribuer au <strong>Developpement durable</strong>
                    </h2>

                    <ul className="tab-nav">

                        {/* <li>
								<button className="tab-btn active">Our Mission</button>
							</li>

							<li>
								<button className="tab-btn">Our Vision</button>
							</li>

							<li>
								<button className="tab-btn">Next Plan</button>
							</li> */}

                    </ul>

                    <div className="tab-content">

                        <p className="section-text">
                            Le sport occupe une place preponderante dans la societe, refletant ainsi a la fois la passion
                            et l'engouement des citoyens pour les differentes disciplines sportives.
                        </p>

                        <ul className="tab-list">

                            <li className="tab-item">
                                <div className="item-icon">
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </div>

                                <p className="tab-text">RunEco</p>
                            </li>

                            <li className="tab-item">
                                <div className="item-icon">
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </div>

                                <p className="tab-text">Championat sport-vert</p>
                            </li>

                            <li className="tab-item">
                                <div className="item-icon">
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </div>

                                <p className="tab-text">2-0 Sport-vert</p>
                            </li>

                            <li className="tab-item">
                                <div className="item-icon">
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </div>

                                <p className="tab-text">Reboisement</p>
                            </li>

                        </ul>

                        {/* <button className="btn btn-secondary">
								<span>Learn More Us</span>

								<ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
							</button> */}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutLayout;
