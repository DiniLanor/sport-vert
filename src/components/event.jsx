import React from 'react';
import MyButton from './Button';

const Event = ({
    infos = {
        time: "",
        title: "",
        event: "",
        desc: ""
    }
}) => {
    return (
        <div className="event-card">

            <time className="card-time" dateTime={infos.time}>
                <span className="month">{months[parseInt(infos.time.split('-')[1]) - 1]}</span>

                <span className="date">{infos.time.split('-')[0]}</span>
            </time>

            <div className="wrapper">

                <div className="card-content">
                    <p className="card-subtitle">{infos.event}</p>

                    <h3 className="card-title">{infos.title}</h3>

                    <p className="card-text">{infos.desc}</p>
                </div>

                <MyButton cls="white" title="Voir l'evenement" icon="arrow-forward" />

            </div>

        </div>
    );
}

export default Event;

const months = [
    "Jan.",
    "Fev.",
    "Mars.",
    "Avr.",
    "Mai",
    "Juin.",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
];
