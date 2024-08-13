import React from 'react';

const FeaturesLayout = () => {
    return (
        <section className="section features">
            <div className="container">

                <ul className="features-list">

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="medkit-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Sante et bien etre</h3>

                            <p className="item-text">
                                Promouvoir la sante et le bien etre des individus a travers la pratique du sport et
                                de l'activite physique.
                            </p>
                        </div>
                    </li>

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="water-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Actions ecologiques</h3>

                            <p className="item-text">
                                Mener des actions qui ont pour but de proteger l'environnement lors des evenements
                                sportifs.
                            </p>
                        </div>
                    </li>

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="leaf-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Developpement durable</h3>

                            <p className="item-text" style={{ fontSize: "small" }}>
                                Sensibiliser et mobiliser les individus et les communautes autours des objectifs du developpement durable a travers le sport
                            </p>
                        </div>
                    </li>

                    <li className="features-item">
                        <div className="item-icon">
                            <ion-icon name="male-female-outline"></ion-icon>
                        </div>

                        <div>
                            <h3 className="h4 item-title">Egalite de genre</h3>

                            <p className="item-text">
                                Encourager l'egalite de genre et l'inclusion sociale dans le domaine du sport.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default FeaturesLayout;
