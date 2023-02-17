$(document).ready(function(){
    $('.box').click(function() {
        /**
         * When we click on an element that is
         * a 'box' class, this event will be fired. 
         **/
        var classNames = $(this).attr('class').split(' ');
        var boxClass = classNames[0];
        var className = classNames[1];

        if ($(this).css('background-color') == 'rgb(250, 0, 0)') {
            // if this object is already red, turn it black
            $('.' + className).css('background-color', '#000');
        } else {
            // Else turn all the elements with box class black
            // and then change the color of all elements
            // with the same class name as the clicked element
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red');
        }
    });
});