import React from 'react';
import MyButton from './Button';

const Project = ({ image = null, title, info = {
    receive: null,
    budget: null
} }) => {




    return (
        <div className="donate-card">

            <figure className="card-banner">
                <img src={image} width="520" height="325" loading="lazy"
                    alt="img" className="img-cover" />
            </figure>

            <div className="card-content">

                <div className="progress-wrapper">
                    <p className="progress-text">
                        <span>Don recu:</span>

                        <data value={info.receive}>{info.receive} Fcfa</data>
                    </p>

                    <data className="progress-value" value={calcPercebt(info.receive, info.budget)}>{calcPercebt(info.receive, info.budget)}%</data>
                </div>

                <div className="progress-box">
                    <div className='progress' style={{ width: `${calcPercebt(info.receive, info.budget)}%` }}></div>
                </div>

                <h3 className="h3 card-title">{title}</h3>

                <div className="card-wrapper">

                    <p className="card-wrapper-text">
                        <span>Budget</span>

                        <data className="green" value={info.budget}>{info.budget} Fcfa</data>
                    </p>

                    <p className="card-wrapper-text">
                        <span>Recus</span>

                        <data className="yellow" value={info.receive}>{info.receive} Fcfa</data>
                    </p>

                    <p className="card-wrapper-text">
                        <span>Reste</span>

                        <data className="cyan" value={info.budget - info.receive}>{info.budget - info.receive} Fcfa</data>
                    </p>

                </div>

                <MyButton cls="secondary" title="Soutenez ce projet" icon="heart-outline" action={() => alert(`Merci de soutenir le projet ${title}`)} />

            </div>

        </div>
    );
}

export default Project;

const calcPercebt = (val1, val2) => {
    return `${((val1 / val2) * 100).toFixed(2)}`;
};
