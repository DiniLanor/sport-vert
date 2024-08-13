import React from 'react';
import { MyButton, ProjectCompo } from '../components';

const DonationLayout = () => {
    return (
        <section className="section donate" id="donate">
            <div className="container">

                <p className="section-subtitle">
                    <img src="./images/subtitle-img-green.png" width="32" height="7" alt="Wavy line" />

                    <span>Donations</span>
                </p>

                <h2 className="h2 section-title" style={{ marginBottom: "20px" }}>
                    Soutenez les differents projets de <span style={{ color: "#2e9e2e", fontWeight: "bolder", display: "inline-flex" }}>Sport-Vert</span>
                </h2>

                <ul className="donate-list">

                    <li>
                        <ProjectCompo
                            title="RunEco dans la ville Yaounde"
                            image="./images/img/pop2.jpg"
                            info={{ receive: 0, budget: 0.1 }}
                        />
                    </li>

                    <li>
                        <ProjectCompo
                            title="Reboisement du stade Omnisport de Yaounde"
                            image="./images/omnisport1.jpg"
                            info={{ receive: 0, budget: 0.1 }}
                        />
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default DonationLayout;
