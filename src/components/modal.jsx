import React from 'react';

const Modal = ({ content = <>Empty HTML</>, title, uni }) => {
    return (
        <div id={`m${uni}`} className="modal">
            <div className="modal-content animate-top">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="close">
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;
