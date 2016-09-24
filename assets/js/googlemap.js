      // calculate route between from and to address
        function calculateRoute(from) {
          // Center initialized to Naples, Italy
          var myOptions = {
            zoom: 10,
            center: new google.maps.LatLng(40.84, 14.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          // Draw the map
          var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

          var directionsService = new google.maps.DirectionsService();
          var directionsRequest = {
            origin: from,
            destination: '577, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India',
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
          };
          directionsService.route(
            directionsRequest,
            function(response, status)
            {
              if (status == google.maps.DirectionsStatus.OK)
              {
                new google.maps.DirectionsRenderer({
                  map: mapObject,
                  directions: response
                });
              }
              else
                $("#error").append("Unable to retrieve your route<br />");
            }
          );
        }
      // End of calculate route between from and to address

      // initial load google map location
        var map;
          function initMap() {
            var locations = [
                ['Hashworks', 12.9093324, 77.6403711]
              ];

              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: new google.maps.LatLng(12.9093324, 77.6403711),
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });

              var infowindow = new google.maps.InfoWindow();

              var marker, i;

              for (i = 0; i < locations.length; i++) {  
                marker = new google.maps.Marker({
                  position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                  map: map
                });

                 // Info Window Content
                  var infoWindowContent = [
                      ['<div>'+
                              '<h4>HashWorks</h4>'+
                            '</div>'+
                            '<div id="get-direction_div2">'+
                              '<p  >Hashworks IT Services Pvt Ltd'+
                              'No. 1197, 3rd Floor, HSR Club Road, '+
                              'Bangalore,India 560102</p>'+
                              '<h5>Directions</h>'+
                            '</div>'+
                            '<div>'+
                                 '<p>'+
                                 '<input id="from" type="text" name="from" placeholder="From:"/>'+
                                 '</p>'+
                                 '<p>'+
                                 '<input type="text" name="Email" value="577, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India" placeholder="To:"/>'+
                                 '</p>'+
                                 '<p>'+
                                 '<input type="button" id="get-direction-btn" onclick="submit(event)" value="Get Direction"/>'+
                                 '</p>'+
                            '</div>'
                          ]
                  ];

                  google.maps.event.addListener(infowindow, 'domready', function(){
                  $(".gm-style-iw").next("div").css("right","22px");
                  $(".gm-style-iw").next("div").css("top","17px");
                  });
                  google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                      infowindow.setContent(infoWindowContent[i][0]);
                      infowindow.open(map, marker);
                    }
                  })(marker, i));
              }

          }

          //after clicking the submit button
        function submit(e) {
            calculateRoute($("#from").val());
        }



      // End of initial load google map location


      $(document).ready(function() {

        $('.talk-to-us').click(function(){
         initMap();
       });
      

        // If the browser supports the Geolocation API
        if (typeof navigator.geolocation == "undefined") {
          $("#error").text("Your browser doesn't support the Geolocation API");
          return;
        }

        //get my position link
        $("#from-link").click(function(event) {
          event.preventDefault();
          var addressId = this.id.substring(0, this.id.indexOf("-"));

          navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK)
                $("#" + addressId).val(results[0].formatted_address);
              else
                $("#error").append("Unable to retrieve your address<br />");
            });
          },
          function(positionError){
            $("#error").append("Error: " + positionError.message + "<br />");
          },
          {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          });
        });
        //End of get my position link

          $("#form-map-div").hide();

    $('.talk-to-us').click(function(){

      if ($("#form-map-div").css("display") == "none") {
         
          $("#form-map-div").show();
          initMap();
       }
      else{
          $("#form-map-div").hide();
    }
    });


     $(".hw-te-tab,.job-close").click( function() {
      $("#form-map-div").hide();
      resetTheForm();
   });



      });



      // calculate route between from and to address
        function calculateRoute(from) {
          // Center initialized to Naples, Italy
          var myOptions = {
            zoom: 10,
            center: new google.maps.LatLng(40.84, 14.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          // Draw the map
          var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

          var directionsService = new google.maps.DirectionsService();
          var directionsRequest = {
            origin: from,
            destination: '577, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India',
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
          };
          directionsService.route(
            directionsRequest,
            function(response, status)
            {
              if (status == google.maps.DirectionsStatus.OK)
              {
                new google.maps.DirectionsRenderer({
                  map: mapObject,
                  directions: response
                });
              }
              else
                $("#error").append("Unable to retrieve your route<br />");
            }
          );
        }
      // End of calculate route between from and to address

      // initial load google map location
        var map1;
          function initMap1() {
            var locations1 = [
                ['Hashworks', 12.9093324, 77.6403711]
              ];

              var map1 = new google.maps.Map(document.getElementById('map1'), {
                zoom: 10,
                center: new google.maps.LatLng(12.9093324, 77.6403711),
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });

              var infowindow1 = new google.maps.InfoWindow();

              var marker1, i1;

              for (i1= 0; i1 < locations1.length; i1++) {  
                marker1 = new google.maps.Marker({
                  position1: new google.maps.LatLng(locations1[i1][1], locations1[i1][2]),
                  map1: map1
                });

                 // Info Window Content
                  var infoWindowContent1 = [
                      ['<div>'+
                              '<h4>HashWorks</h4>'+
                            '</div>'+
                            '<div id="get-direction_div21">'+
                              '<p  >Hashworks IT Services Pvt Ltd'+
                              'No. 1197, 3rd Floor, HSR Club Road, '+
                              'Bangalore,India 560102</p>'+
                              '<h5>Directions</h>'+
                            '</div>'+
                            '<div>'+
                                 '<p>'+
                                 '<input id="from1" type="text" name="from" placeholder="From:"/>'+
                                 '</p>'+
                                 '<p>'+
                                 '<input type="text" name="Email" value="577, Sector 3, HSR Layout, Bengaluru, Karnataka 560102, India" placeholder="To:"/>'+
                                 '</p>'+
                                 '<p>'+
                                 '<input type="button" id="get-direction-btn1" onclick="submit(event)" value="Get Direction"/>'+
                                 '</p>'+
                            '</div>'
                          ]
                  ];

                  google.maps.event.addListener(infowindow1, 'domready', function(){
                  $(".gm-style-iw").next("div").css("right","22px");
                  $(".gm-style-iw").next("div").css("top","17px");
                  });
                  google.maps.event.addListener(marker1, 'click', (function(marker1, i1) {
                    return function() {
                      infowindow1.setContent(infoWindowContent1[i1][0]);
                      infowindow1.open(map1, marker1);
                    }
                  })(marker1, i1));
              }

          }

          //after clicking the submit button
        function submit(e) {
            calculateRoute($("#from1").val());
        }



      // End of initial load google map location


      $(document).ready(function() {

        $('.talk-to-us').click(function(){
         initMap1();
       });
      

        // If the browser supports the Geolocation API
        if (typeof navigator.geolocation == "undefined") {
          $("#error1").text("Your browser doesn't support the Geolocation API");
          return;
        }

        //get my position link
        $("#from-link1").click(function(event) {
          event.preventDefault();
          var addressId1 = this.id.substring(0, this.id.indexOf("-"));

          navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder1 = new google.maps.Geocoder();
            geocoder.geocode({
              "location1": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK)
                $("#" + addressId).val(results[0].formatted_address);
              else
                $("#error1").append("Unable to retrieve your address<br />");
            });
          },
          function(positionError){
            $("#error1").append("Error: " + positionError.message + "<br />");
          },
          {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          });
        });
        //End of get my position link

          $("#form-map-div1").hide();

    $('.talk-to-us').click(function(){

      if ($("#form-map-div1").css("display") == "none") {
         
          $("#form-map-div1").show();
          initMap1();
       }
      else{
          $("#form-map-div1").hide();
    }
    });


     $(".hw-te-tab,.job-close").click( function() {
      $("#form-map-div1").hide();
      resetTheForm();
   });



      });