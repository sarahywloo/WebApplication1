//When this element is ready, run this document
$(document).ready(function () {
    $('div').on('click', function () {
        console.log('clicked the div');
    });

    console.log('ran the ready');
});

console.log('ran the script');

//ran the script > ran the ready > clicked the ready
