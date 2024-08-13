import React from 'react';

const ServiceLayout = () => {
    return (
        <section className="section service" id="service"
            style={{ backgroundImage: "url('./assets/images/service-map.png')" }}>
            <div className="container">

                <p className="section-subtitle">
                    <img src="/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />

                    <span>Ce que nous faisons</span>
                </p>

                <h2 className="h2 section-title">
                    Nous participons au <strong>Developpement durable</strong>
                </h2>

                <ul className="service-list">

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="medkit-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Sante et bien-etre</h3>

                            <p className="card-text">
                                Amelioration de la sante et du bien etre de tous a travers la pratique du sport et des activites physiques.
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="earth-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Protection de l'environnement</h3>

                            <p className="card-text">
                                Realiser une analyse approfondie sur l'impact environnemental...
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="male-female-outline"></ion-icon>
                                {/* <ion-icon name="flower-outline"></ion-icon> */}
                            </div>

                            <h3 className="h3 card-title">Sport pour tous</h3>

                            <p className="card-text">
                                Encourager l'eaglire de genre et l'inclusion sociale dans le domaine du sport.
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="flag-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Paix et tolerance</h3>

                            <p className="card-text">
                                Renforcer la paix, la tolerance et le respect mutuel a travers la pratique du sport...
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="globe-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Collaboration internationale</h3>

                            <p className="card-text">
                                Promouvoir la collaboration et la cooperation internationale dans le domaine du sport en faveur du developpement durable...
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="ear-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Sensibilisation</h3>

                            <p className="card-text">
                                Sensibiliser et mobiliser les individus et les communautes autour des objectis du developpement durable a travers le sport...
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="people-circle-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Developpement social et communautaire</h3>

                            <p className="card-text">
                                Investissement dans la construction des infrastructures sportives pour encourager la pratique reguliere du sport...
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                    <li>
                        <div className="service-card">

                            <div className="card-icon">
                                <ion-icon name="book-outline"></ion-icon>
                            </div>

                            <h3 className="h3 card-title">Education et formation dans le domaine du sport</h3>

                            <p className="card-text">
                                Sensibilisation et promotion des disciplines sportives dans les etablissements scolaires, creation des club dans les...
                            </p>

                            <a href="#" className="btn-link">
                                <span>En savoir +</span>

                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </a>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default ServiceLayout;
