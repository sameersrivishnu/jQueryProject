// Nav Tabs jQuery 
$(document).ready(function() {

    $('ul.tabs button').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs button').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });




    // Slider jQuery
    var slideCount = $('.slider ul li').length;
    var slideWidth = $('.slider ul li').width();
    var slideHeight = $('.slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('.slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('.slider ul li:last-child').prependTo('.slider ul');
    // Slider controls jQuery
    function moveLeft() {
        $('.slider ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('a.prev').click(function() {
        moveLeft();
    });

    $('a.next').click(function() {
        moveRight();
    });



    // Star ratings jQuery

    //click on stars
    $('.star').click(function() {
        $(this).addClass('starclick');
        $('.star1, .star2, .star3, .star4').removeClass('starclick');

    });
    $('.star1').click(function() {
        $('.star, .star1').addClass('starclick');
        $('.star2, .star3, .star4').removeClass('starclick');

    });
    $('.star2').click(function() {
        $('.star, .star1, .star2').addClass('starclick');
        $('.star3, .star4').removeClass('starclick');

    });
    $('.star3').click(function() {
        $('.star, .star1, .star2, .star3').addClass('starclick');
        $('.star4').removeClass('starclick');

    });
    $('.star4').click(function() {
        $('.star, .star1, .star2, .star3, .star4').addClass('starclick');

    });

    // Tooltip jQuery

    $('[data-toggle="tooltip"]').tooltip();

    // Modal jQuery

    $("#myBtn").click(function() {
        $("#myModal").modal();
    });



    // TypeAHead jQuery

    var local = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
        "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
        "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
        "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
        "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
        "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
        "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
        "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
        "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
        "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    $("#country").autocomplete({
        source: local

    });


});