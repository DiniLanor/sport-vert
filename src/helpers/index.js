import $ from 'jquery';

const modalInner = (uni) => {
    // Get the modal
    var modal = $(`#m${uni}`);

    // Get the button that opens the modal
    var btn = $("#mbtn");

    // Get the <span> element that closes the modal
    var span = $(".close");

    $(document).ready(function () {
        // When the user clicks the button, open the modal 
        btn.on('click', function () {
            modal.show();
        });

        // When the user clicks on <span> (x), close the modal
        span.on('click', function () {
            modal.fadeOut();
        });
    });

    // When the user clicks anywhere outside of the modal, close it
    $('body').bind('click', function (e) {
        if ($(e.target).hasClass("modal")) {
            modal.fadeOut();
        }
    });
};



export {
    modalInner
};