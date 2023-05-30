$(document).ready(function() {
    
    $('#btn-contrast').click(function() {
        $('body').toggleClass('contrast');
        $('body').toggleClass('default');
    });

   
    $('#btn-font-up').click(function() {
        mudarFontSize('up');
    });

    $('#btn-font-down').click(function() {
        mudarFontSize('down');
    });

   
    $('#btn-toggle').click(function() {
        $('.product-description').toggle();
    });

    function mudarFontSize(direction) {
        var currentSize = parseInt($('body').css('font-size'));
        var newSize;

        if (direction === 'up') {
            newSize = currentSize + 2;
        } else if (direction === 'down') {
            newSize = currentSize - 2;
        }

        $('body').css('font-size', newSize + 'px');
    }
});
