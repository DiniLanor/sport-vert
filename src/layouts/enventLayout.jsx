import React from 'react';
import { EventCompo } from '../components';

const EnventLayout = () => {
    return (
        <section className="section event" id="event">
            <div className="container">

                <p className="section-subtitle">
                    <img src="/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />

                    <span>Programmes & evenements</span>

                    <img src="/images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />
                </p>

                <h2 className="h2 section-title">
                    Participer aux evenements selon le programme ci-dessous
                </h2>

                <ul className="event-list">
                    <li>
                        <EventCompo infos={{
                            desc:"Espace de rencontre et d'echanges sur des sujets autour du sport et du developpement durable.",
                            event:"Foire",
                            time:"01-12",
                            title: "Salon International Sport-Vert 2024"
                        }} />
                    </li>

                    <li>
                        <EventCompo infos={{
                            desc:"Course de longue distance dans qui reunit toute le monde et durant laquelle les dechets sont collectes par les participants",
                            event:"Sante et bie-etre",
                            time:"10-09",
                            title: "EcoRun Septembre 2024 Yaounde-Olezoa"
                        }} />
                    </li>

                </ul>

                {/* <button className="btn btn-secondary">
                    <span>Learn More Us</span>

                    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                </button> */}

            </div>
        </section>
    );
}

export default EnventLayout;
