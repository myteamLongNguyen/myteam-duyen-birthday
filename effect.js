$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function(){
    var vw;

    // Function to show random pictures
    function showRandomPictures() {
        const container = document.getElementById("random-pictures-container");
        const numPictures = 10; // Number of random pictures to display
        const imagePaths = [
            "person.jpg",
            "random1.jpg",
            "random2.jpg",
            "random3.jpg",
            "random4.jpg",
            "random5.jpg",
            "random6.jpg",
            "random7.jpg",
            "random8.jpg",
            "random9.jpg",
        ]; // Add paths to your images
        const minDistance = 300; // Minimum distance between photos (in pixels)
        const photos = []; // Array to store the positions of existing photos

        for (let i = 0; i < numPictures; i++) {
            const img = document.createElement("img");
            img.src = imagePaths[Math.floor(Math.random() * imagePaths.length)];
            img.classList.add("random-picture");

            let x, y;
            let isValidPosition = false;

            // Generate a position that is not too close to existing photos
            while (!isValidPosition) {
                x = Math.random() * (window.innerWidth - 300); // Adjust for image width
                y = Math.random() * (window.innerHeight - 300); // Adjust for image height

                // Check the distance to all existing photos
                isValidPosition = true;
                for (const photo of photos) {
                    const distance = Math.sqrt((x - photo.x) ** 2 + (y - photo.y) ** 2);
                    if (distance < minDistance) {
                        isValidPosition = false;
                        break;
                    }
                }
            }

            // Save the position of the new photo
            photos.push({ x, y });

            // Set the position and rotation of the photo
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;

            // Random rotation
            const rotation = Math.random() * 360; // Random angle between 0 and 360 degrees
            img.style.transform = `rotate(${rotation}deg)`;

            container.appendChild(img);
        }
    }

    // Event listener for cake_fadein
    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        showRandomPictures(); // Call the function to show random pictures
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    // Other event handlers
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({top:240, left: vw-350},500);
        $('#b22').animate({top:240, left: vw-250},500);
        $('#b33').animate({top:240, left: vw-150},500);
        $('#b44').animate({top:240, left: vw-50},500);
        $('#b55').animate({top:240, left: vw+50},500);
        $('#b66').animate({top:240, left: vw+150},500);
        $('#b77').animate({top:240, left: vw+250},500);
    });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop},10000,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }
    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){
            loopSeven();
        });
    }
    function loopEight() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){
            loopSeven();
        });
    }

    // Event handler for balloons_flying
    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        loopEight();
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            // Start a 3-second countdown
            setTimeout(function() {
                // If the user hasn't clicked #cake_fadein, trigger it automatically
                if (!$('.cake').is(':visible')) {
                    $('#cake_fadein').trigger('click');
                }
            }, 3000);
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');
        $('#b7').attr('id','b77');
        $('#b11').animate({top:240, left: vw-350},500);
        $('#b22').animate({top:240, left: vw-250},500);
        $('#b33').animate({top:240, left: vw-150},500);
        $('#b44').animate({top:240, left: vw-50},500);
        $('#b55').animate({top:240, left: vw+50},500);
        $('#b66').animate({top:240, left: vw+150},500);
        $('#b77').animate({top:240, left: vw+250},500);
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
        var i;
        function msgLoop (i) {
            var totalMessages = $("p").length;
            if (i < totalMessages - 1) {
                $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                    i=i+1;
                    $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                    msgLoop(i);
                });
            } else {
                $('.cake').fadeIn('fast');
            }
        }
        msgLoop(0);
    });
});