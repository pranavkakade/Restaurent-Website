 $(document).ready(function(){
            $("#mycarousel").carousel({interval:2000});
            
                       $("#carouselB").click(function(){
                if ($("#carouselB").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselB").children("span").removeClass('fa-pause');
                    $("#carouselB").children("span").addClass('fa-play');
                }
                else if ($("#carouselB").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselB").children("span").removeClass('fa-play');
                    $("#carouselB").children("span").addClass('fa-pause');                    
                }
            });
        });
        
           
     
  $(document).ready(function(){
        $("#log").click(function(){
            $('#loginml').modal('show');

        });

        $("#mybtn").click(function(){
            $('#moform').modal('show');

        });
        });        