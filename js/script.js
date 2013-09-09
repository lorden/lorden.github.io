$(document).ready(function(){
    $('#me').parallax("80%", 1.5);
    $('#linkedin').parallax("30%", 0.6);
    $('#github').parallax("70%", 0.6);
    $('#blog').parallax("40%", 0.6);
    $('#nutenstudio').parallax("50%", 0.6);

    $('#linkedin').on('click', function(){
        window.location = 'http://linkedin.com/in/diegolorden';
    });
    $('#github').on('click', function(){
        window.location = 'https://github.com/lorden';
    });
    $('#blog').on('click', function(){
        window.location = 'http://blog.nutenstudio.com/';
    });
    $('#nutenstudio').on('click', function(){
        window.location = 'http://nutenstudio.com/';
    });

});
