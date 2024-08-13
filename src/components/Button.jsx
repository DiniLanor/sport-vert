

import React from 'react';

const MyButton = ({
    cls,
    title,
    icon = null,
    modal = false,
    action = () => alert('Empty btn effect'),
    uni = "",
}) => {
    return (
        <button className={`btn btn-${cls}`} onClick={() => { action(); }} id={modal ? `m${uni}` : ''}>
            <span>{title}</span>
            {icon && <ion-icon name={icon} aria-hidden="true"></ion-icon>}
        </button>
    );
}

export default MyButton;
