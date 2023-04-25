(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
}(jQuery))
var $mcj = jQuery.noConflict(true);

document.addEventListener("DOMContentLoaded", function() {
    const successResponse = document.getElementById("mce-success-response");
    const errorResponse = document.getElementById("mce-error-response");

    const successObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                onElementPopulatedSuccess();
                successObserver.disconnect();
                break;
            }
        }
    });

    const errorObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                onElementPopulatedError();
                errorObserver.disconnect();
                break;
            }
        }
    });

    const config = { childList: true, subtree: true };
    successObserver.observe(successResponse, config);
    errorObserver.observe(errorResponse, config);
});

document.addEventListener('DOMContentLoaded', function () {

// Get the modal and the close button element
    const modalGetUpdates = document.getElementById('modalGetUpdates');
    const modalGetUpdatesMessage = document.getElementById('modalGetUpdatesMessage');
    const closeModalGetUpdates = document.getElementById('closeModalGetUpdates');
    const closeModalGetUpdatesMessage = document.getElementById('closeModalGetUpdatesMessage');

    document.getElementById('get-updates-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the anchor tag
        modalGetUpdates.style.display = 'block';
        //modalGetUpdatesMessage.style.display = 'block';
        //var modalGetUpdatesMessage = document.getElementById('modalGetUpdatesMessage');
        //modalGetUpdatesMessage.classList.add('visible');

        //var modalGetUpdatesMessage1 = document.getElementById('modalGetUpdatesMessageContent');
        //modalGetUpdatesMessage1.classList.add('modal-content-visible');
    });

    closeModalGetUpdates.onclick = function () {
        modalGetUpdates.style.display = 'none';
    }

    closeModalGetUpdatesMessage.onclick = function () {
        modalGetUpdatesMessage.style.display = 'none';
    }
});

function onElementPopulatedSuccess() {
    const modalGetUpdates = document.getElementById('modalGetUpdates');
    const modalGetUpdatesMessage = document.getElementById('modalGetUpdatesMessage');
    modalGetUpdates.style.display = 'none';
    modalGetUpdatesMessage.style.display = 'block';
    const mailchimpResponse = document.getElementById("mailchimp-response");
    mailchimpResponse.textContent = $('#mce-success-response').text();
    clearFormInputs('mc-embedded-subscribe-form');
}

function onElementPopulatedError() {
    const modalGetUpdates = document.getElementById('modalGetUpdates');
    const modalGetUpdatesMessage = document.getElementById('modalGetUpdatesMessage');
    modalGetUpdates.style.display = 'none';
    modalGetUpdatesMessage.style.display = 'block';
    const mailchimpResponse = document.getElementById("mailchimp-response");
    mailchimpResponse.textContent = $('#mce-error-response').text();
    clearFormInputs('mc-embedded-subscribe-form');
}

function clearFormInputs(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });

    $('#mce-success-response').textContent = '';
    $('#mce-error-response').textContent = '';
}