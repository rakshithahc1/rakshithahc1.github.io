//scrollup
$(document).ready(function() {


    $('.toggle').on('click', function(event) {
        event.preventDefault();
        var length = $('#gsc-i-id1').val().length;
        if (length != 0) {
            $('.srch-content-menu .srch-txt').removeClass('srch-txt-hide');
            $('input.gsc-search-button.gsc-search-button-v2').trigger('click');
            $('#credits').val('');

        } else {
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
            var target = $('.toggle').attr('href');
            $(target).toggleClass('hidden show');
        }

    });
     
    $(window).mouseleave(function() {
        if (screen.width > 1199) {
        if (!$("#gsc-i-id1").val()) {
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        }
        }
    });



    /* scroll up */

    $('.nav-scroll-up').click(function(e) {

        $('html, body').animate({
            scrollTop: '0px'
        }, 1.7e3);
    });

    /* end of scroll up */

    $('[data-toggle="tooltip"]').tooltip();

    /* google search button animation*/
    $(".srch-content-menu a.toggle.btn").on('click', function(event) {
        event.preventDefault();
        if (screen.width > 1199) {
            $(".srch-content-menu div#credits").toggleClass('hidden show').css({
                width: "40px"
            }).animate({
                width: "180px"
            }, 300);
        } else {
            var length = $('#gsc-i-id2').val().length;
            if (length != 0) {
                $('.srch-content-menu .srch-txt').removeClass('srch-txt-hide');
                $('input.gsc-search-button.gsc-search-button-v2').trigger('click');
                $('#gsc-i-id2').val('');
            } else {
                $('.srch-content-menu .srch-txt').toggleClass('srch-txt-hide');
                if (screen.width > 767) {
                     $(".srch-content-menu div#credits").toggleClass('hidden show').css({
                    width: "40px"
                }).animate({
                    width: "180px"
                }, 300);
                }
                else{
                     $(".srch-content-menu div#credits").toggleClass('hidden show').css({
                    width: "40px"
                }).animate({
                    width: "100px",
                    "padding-right": "10px"
                }, 300);
                }
            }
        }

    });
    $(".srch-content-menu a.toggle-hw.btn").on('click', function(event) {
        event.preventDefault();
        if (screen.width > 1199) {
            $(".srch-content-menu div#credits").toggleClass('hidden show').css({
                width: "40px"
            }).animate({
                width: "180px"
            }, 300);
        } else {
            var length = $('#gsc-i-id1').val().length;
            if (length != 0) {
                $('.srch-content-menu .srch-txt').removeClass('srch-txt-hide');
                $('input.gsc-search-button.gsc-search-button-v2').trigger('click');
                $('#gsc-i-id1').val('');
            } else {
                $('.srch-content-menu .srch-txt').toggleClass('srch-txt-hide');
                if (screen.width > 767) {
                     $(".srch-content-menu div#credits").toggleClass('hidden show').css({
                    width: "40px"
                }).animate({
                    width: "180px"
                }, 300);
                }
                else{
                     $(".srch-content-menu div#credits").toggleClass('hidden show').css({
                    width: "40px"
                }).animate({
                    width: "100px",
                    "padding-right": "10px"
                }, 300);
                }
            }
        }

    });

    /* $('.toggle-hw').on('click',function(){
    var length=$('#gsc-i-id1').val().length;
    if(length != 0){
       debugger;
       alert(length);
   $('input.gsc-search-button.gsc-search-button-v2').trigger('click');
   }
});*/

    /* end */

    $(document).on('mouseenter', 'input.gsc-search-button.gsc-search-button-v2', function() {
        $("i.fa.fa-angle-right.search-arrow").css("color", "#ee2b7b");
    });
    $(document).on('mouseleave', 'input.gsc-search-button.gsc-search-button-v2', function() {
        $("i.fa.fa-angle-right.search-arrow").css("color", "gray");
    });
    //filter for the blog
    if (pageName == "blog") {
        $('#author').multiselect({
            columns: 4,
            placeholder: 'Authors',
            selectAll: true,
            minHeight: null
        });
        $('#cat').multiselect({
            columns: 4,
            placeholder: 'Categories',
            selectAll: true,
            minHeight: null
        });

        setTimeout(function() {
            $('.ms-options > a').on('click', function() {
                if ($(this).text().toLowerCase() == "select all") {
                    $(this).text('unselect all');
                } else {
                    $(this).text('select all');
                }
            });
        }, 5000);
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            $('.ms-options ul').removeAttr('style');
            // alert('firefox');
        }
        $('#author,#cat').change(function() {
            var val1 = $('#cat').children('option:selected').data('value');
            var val2 = $('#author').children('option:selected').data('value');
            cval1 = $('#cat').val();
            cval2 = $('#author').val();
            var dataVal1 = "",
                dataVal2 = "";
            $('#cat :selected').each(function(i, sel) {
                dataVal1 += '.' + $(sel).text() + ',';
            });
            $('#author :selected').each(function(i, sel) {
                dataVal2 += '.' + $(sel).text() + ',';
            });
            datafinalVal1 = dataVal1.replace(/,\s*$/, "");
            datafinalVal2 = dataVal2.replace(/,\s*$/, "");
            $('.hw-filter-li').each(function() {
                if ($(this).is(datafinalVal1) || $(this).is(datafinalVal2)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    }

    /* we love parter */
    $('.home-hr').addClass("anim");
    $("#section-rib-part").animate({
        "opacity": "1"
    }, 644);
    $("#section-rib-part").delay(2000).animate({
        "opacity": "0"
    }, 644);

    $('#section-rib-part').mouseenter(function() {
        $("#section-rib-part").animate({
            "opacity": "1"
        }, 44);
    });

    $('#section-rib-part').mouseleave(function() {
        $(this).animate({
            "opacity": "0"
        }, 44);
    });
    $('#section-rib-part1').mouseenter(function() {
        $("#section-rib-part1").animate({
            "opacity": "1"
        }, 44);
    });

    $('#section-rib-part1').mouseleave(function() {
        $(this).animate({
            "opacity": "0"
        }, 44);
    });
    $('#section-rib-part2').mouseenter(function() {
        $("#section-rib-part2").animate({
            "opacity": "1"
        }, 44);
    });

    $('#section-rib-part2').mouseleave(function() {
        $(this).animate({
            "opacity": "0"
        }, 44);
    });



    $("ul.scroll-indicators.hide-scroll > li").click(function() {

        var data_tab = $(this).attr("data-tab");
        if (data_tab === '1') {
            $('#hw-fixed-footer-part').hide();
            $("#section-rib-part").animate({
                "opacity": "1"
            }, 644);
            $("#section-rib-part").delay(2000).animate({
                "opacity": "0"
            }, 644);
        } else if (data_tab === '4') {

            $("#section-rib-part1").animate({
                "opacity": "1"
            }, 644);
            $("#section-rib-part1").delay(2000).animate({
                "opacity": "0"
            }, 644);
        } else if (data_tab == '2') {
            $("#section-rib-part2").animate({
                "opacity": "1"
            }, 644);
            $("#section-rib-part2").delay(2000).animate({
                "opacity": "0"
            }, 644);
        }
    });

    /* end of partner */

    /* smooth scroll*/
    $('.carousel').carousel();
    /* End of smooth scroll*/

    //homepage dropdown
    $(".dropdown-link .dropdown").css({
        display: "none"
    });

    $(".dropdown-link").mouseenter(function() {
        $(this).find(".dropdown").css({
            visibility: "visible",
            display: "none"
        }).show(268);;
    });

    $(".dropdown-link").mouseleave(function() {
        $(this).find(".dropdown").css({
            visibility: "hidden"
        });
    });

    $(".dropdown").mouseenter(function() {
        $('.dropdown-link').css({
            visibility: "visible !important"
        });
    });

    //homepage header mouse event 

    $('.hw-home').mouseover(function() {
        $("header nav").addClass('hw-fixed-header');
    });

    $('.hw-home').mouseout(function() {
        $("header nav").removeClass('hw-fixed-header');
    });

    //homepage hover mouse event

    $('.navbar-default').mouseover(function() {
        $("header nav").addClass('hw-hover-header');
    });

    $('.navbar-default').mouseout(function() {
        $("header nav").removeClass('hw-hover-header');
    });

    $(".apst-wrapper").hide();
    //fixed header
    $(document).scroll(function() {
        var main = $(this).scrollTop();

        if (main >= 10) {
            if (!$('header').hasClass('hw-home')) {
                $("header nav").addClass('hw-fixed-header');
                $("main").css("margin-top", "70px");
            }

        } else {
            $("header nav").removeClass('hw-fixed-header');
            $("main").css("margin-top", "0px");
        }

        if (main >= 70) {
            if (!$('header').hasClass('hw-home')) {
                $(".navbar-default.hw-fixed-header").css("padding-bottom", "0px")
            }
        }
        /*for scroll top button*/
        if (main >= 50) {
            $(".our-thinking-apst-wrapper").show();
        } else {
            $(".our-thinking-apst-wrapper").hide();
        }
        if (main >= 330) {
            $(".apst-wrapper").show();
            $(".engase-us-apst-wrapper").show();
            $(".collaborative-apst-wrapper").show();
            $(".bootcamp-apst-wrapper").show();

        } else {
            $(".apst-wrapper").hide();
            $(".engase-us-apst-wrapper").hide();
            $(".collaborative-apst-wrapper").hide();
            $(".bootcamp-apst-wrapper").hide();

        }
        if (($(document).height() - $(window).height()) - $(document).scrollTop() <= 123) {

            $(".apst-wrapper").css({
                "right": "4px",
                "bottom": "-43px",
                "position": "absolute"
            });
            $(".engase-us-apst-wrapper").css({
                "position": "absolute"
            });
            $(".collaborative-apst-wrapper").css({
                "right": "15px",
                "bottom": "85px",
                "position": "absolute"
            });
            $(".bootcamp-apst-wrapper").css({
                "bottom": "78px",
                "position": "absolute"
            });
            $(".our-thinking-apst-wrapper").css({
                "bottom": "54px",
                "position": "absolute"
            });
        } else {
            $(".apst-wrapper").css({
                "right": "20px",
                "bottom": "20px",
                "position": "fixed"
            });
            $(".engase-us-apst-wrapper").css({
                "position": "fixed"
            });
            $(".collaborative-apst-wrapper").css({
                "right": "20px",
                "bottom": "20px",
                "position": "fixed"
            });
            $(".bootcamp-apst-wrapper").css({
                "bottom": "20px",
                "position": "fixed"
            });
            $(".our-thinking-apst-wrapper").css({
                "bottom": "20px",
                "position": "fixed"
            });
        }

    });

    // it-services

    // testimonial-carousel
    $('.testimonial-carousel .carousel-indicators li').click(function() {
        $(this).parents('.testimonial-carousel').find('.carousel').carousel(parseInt(this.getAttribute('data-to')));
    });
    // End of testimonial-carousel

    // ui-ux tab
    // $('.hw-ui-ux-carousel .carousel').carousel({
    //   interval: 100,
    //     pause: true
    // });
    $(window).load(function() {
        $('.hw-ui-ux-carousel .carousel').carousel("pause");
    });


    $('.play').click(function() {
        $(this).children('.fa-play').addClass("fa-play-active");


        $(this).prev(".pause").children(".fa-pause").removeClass("fa-pause-active");
        // $(this).siblings('.fa-pause').removeClass("fa-pause-active");


        $(this).parents('.hw-view-project').siblings('.carousel').carousel('cycle');
    });
    $('.pause').click(function() {
        $(this).children('.fa-pause').addClass("fa-pause-active");
        // $(this).siblings('.fa-play').removeClass("fa-play-active");
        $(this).next(".play").children(".fa-play").removeClass("fa-play-active");
        $(this).parents('.hw-view-project').siblings('.carousel').carousel('pause');
    });
    // End of ui-ux tab

    // End of it-services


    //equal height js

    equalheight = function(container) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function() {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function() {
        equalheight('.blog-main .blog-content');
        $('.home-hr').addClass('anim');
    });


    $(window).resize(function() {
        equalheight('.blog-main .blog-content');
    });
    // End of equal height js


    // upskilling 

    //filter
    $('.hw-upskilling-filter li').click(function() {
        $('.hw-upskilling-filter li').removeClass('active');
        $(this).addClass('active');

        var dataval = $(this).attr("data-value");

        $('.upskill-cont-filter').each(function() {
            if ($(this).hasClass(dataval)) {
                $(this).css({
                    'display': 'block'
                });
            } else {
                $(this).css({
                    'display': 'none'
                });
            }

        });

    });


    // End of upskilling

    // upskilling-casestudy collapse

    //arrow - toggle rotate
    $('#upskill-accordion .accordion-toggle').click(function() {
        $(this).children().children().children().next().children().children().toggleClass("arrow-rotate");
    });
    // End of upskilling-casestudy collapse

    // service details
    $('.filter').click(function() {
        var dtab = $(this).attr("data-tab");

        $('.filter').removeClass('active');
        $(this).addClass('active');

        $('.filter-content').each(function() {
            var dval = $(this).attr("data-value");
            if (dtab == dval) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
    // End of service detials

    // casestudy

    //filter
    $('.hw-casestudy-filter li').click(function() {

        $('.hw-casestudy-filter li').removeClass('active');
        $(this).addClass('active');

        var dataval = $(this).attr("data-value");

        case_study_filter(dataval);

    });


    var case_study_filter = function(dataval) {
        $('.casestudy-cont-filter').each(function() {
            if ($(this).hasClass(dataval)) {
                $(this).css({
                    'display': 'block'
                });
            } else {
                $(this).css({
                    'display': 'none'
                });
            }
        });
    }

    // End of casestudy

    /* job board*/
    $('.hw-job1').click(function() {
        $(this).addClass('view-color');
        $(this).parent('tr').next().removeClass('hide');
    });

    $('.view1-close').click(function() {
        $(this).parents('tr').prev().find('.hw-job1').removeClass('view-color');

        $(this).parents('tr').addClass('hide');
    });



    $(document).on('click', '.pager', function() {
        $(".view1").prev().find('.hw-job1').removeClass('view-color');
        $(".view1").addClass('hide');
    });

    /* google search */
    $(document).on('click', '.gsc-results-close-btn', function() {
        $("#credits").removeClass("show");
        $("#credits").addClass("hidden");
    });

    $('header').mouseleave(function() {
        if ($("input#gsc-i-id1").val() == "") {
            $("#credits").removeClass("show");
            $("#credits").addClass("hidden");
        }

    });
    /* end google search */


    $('.apply').click(function() {
        var job_title = $(this).parents('.view1').prev().find("td").first().text(); // for setting the job-title value to form
        $(".input_subject").val(job_title);
        $('.view1').addClass('hide');
        $('.apply-div').addClass('show');

    });

    $('.form-close').click(function() {

        $('.apply-div').removeClass('show');
        $('.view-act').removeClass('view-color');
        $('.hw-job1').removeClass('view-color');
    });

    /* end of job board*/

    $(window).on('load', function() {


        var cururl = window.location;
        var curid = cururl.hash.slice(1);
        $('.hw-casestudy-filter > li').each(function() {
            var dval = $(this).attr("data-value");

            if (curid == dval) {
                $(this).addClass('active tagactive');
            } else {
                $(this).removeClass('active tagactive');
            }
        });

        tabchange(curid);
        case_study_filter(curid);
    });

    //url change event
    $(window).on('hashchange', function(e) {
        var cururl = window.location;
        var curid = cururl.hash.slice(1);
        tabchange(curid);
    });

    //onclick header menu, add active class to the respective tab and tab-content
    var tabchange = function(curid) {
        if ($('.nav-tabs').hasClass('hw-tablink')) {

            $('.hw-tablink > li').each(function() {
                var dtabval = $(this).attr('data-value');
                if (dtabval !== '') {
                    if (curid == dtabval) {
                        $('.hw-tablink > li').removeClass('active');
                        $(this).addClass('active');
                    } else if (curid === 'portfolio' || curid === '') {
                        $('.hw-tablink > li').removeClass('active');
                        $('ul li[data-value="DataOps"]').addClass('active');
                    }
                }

            });

            $('.hw-tabcont-link > div').each(function() {
                var tabcont = $(this).attr('data-value');
                if (curid == tabcont) {
                    $('.hw-tabcont-link > div').removeClass('active in');
                    $(this).addClass('active in');
                }

                if (curid == "Mobility") {
                    var item_width = $('#carousel_ul > li').width() + 20;
                    //make the sliding effect using jquery's anumate function '
                    $('#carousel_ul').animate({
                        'left': '-' + item_width + 'px'
                    }, 500);
                    // $(this).css({'cursor':'default','color':'#ccc'});
                    $('#right_scroll i').css({
                        'cursor': 'default',
                        'color': '#ccc'
                    });
                    $('#left_scroll i').css({
                        'cursor': 'pointer',
                        'color': '#040404'
                    });
                }

            });
        }
    }
    if (screen.width > 1199) {
        $('.nav-tabs > li a').click(function() {
            var navtab = $(this).parents('.nav-tabs').offset().top - 95;
            $('html, body').animate({
                scrollTop: navtab
            }, 1000, 'linear');
        });

        $(".nav-tabs a").click(function() {
            $(this).tab('show');
        });
    }
    if (screen.width < 1199) {
        $('.es-border-left').removeClass('div-border-left');

        (function() {
            var $section = $('.focal');
            var $panzoom = $section.find('.panzoom').panzoom();
            $panzoom.parent().on('mousewheel.focal', function(e) {
                e.preventDefault();
                var delta = e.delta || e.originalEvent.wheelDelta;
                var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
                $panzoom.panzoom('zoom', zoomOut, {
                    increment: 0.1,
                    animate: false,
                    focal: e

                });
            });
           
        })();
        (function() {
            var $section = $('.focal1'); 
            var $panzoom = $section.find('.panzoom1').panzoom();
            $panzoom.parent().on('mousewheel.focal1', function(e) {
                e.preventDefault();
                var delta = e.delta || e.originalEvent.wheelDelta;
                var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
                $panzoom.panzoom('zoom', zoomOut, {
                    increment: 0.1,
                    animate: false,
                    focal: e
                });
            });
            
        })();
    }

    /* end of tag cloud*/
    /*click for the portfolio in head*/
    $("#anchor-portfolio").click(function() {
        tabchange('portfolio');
    });

    /* header hover */
    var initiall = $('.navbar-right > li > a:first-child').position().left;
    $('.line-animation').css({
        left: initiall + 'px'
    });
    $('.navbar-right > li > a').mouseover(function() {

        var w = $(this).width();
        var l = $(this).position().left;
        l += 16;
        $('.line-animation').css({
            width: w + 'px',
            left: l + 'px'
        });
    });

    $('.navbar-right > li > a').mouseout(function() {
        $('.line-animation').css({
            width: '0px'
        });
    });

    //left 
    $('.navbar-left > li > a').mouseover(function() {

        var w_left = $(this).width();
        var l_left = $(this).position().left;
        l_left += 16;
        $('.line-animation1').css({
            width: w_left + 'px',
            left: l_left + 'px'
        });
    });

    $('.navbar-left > li > a').mouseout(function() {
        $('.line-animation1').css({
            width: '0px'
        });
    });



    /* end of header hover */

    // talk to us
    $('.talk-to-us').bind('click', function(event) {
        var tabdetail = $(this).parents('.c-flex').offset().top;
        $('html, body').animate({
            scrollTop: tabdetail
        }, 3000, 'linear');
    });


    //solution custom tab carousel
    $('#left_scroll i').css({
        'cursor': 'default',
        'color': '#ccc'
    });

    //when user clicks the right arrow for sliding right        
    $('#right_scroll i').click(function() {
        var item_width = $('#carousel_ul > li').width() + 20;
        $('#carousel_ul').animate({
            'left': '-' + item_width + 'px'
        }, 500);
        $(this).css({
            'cursor': 'default',
            'color': '#ccc'
        });
        $('#left_scroll i').css({
            'cursor': 'pointer',
            'color': '#040404'
        });
    });

    $('.last_dropdown').click(function() {
        var item_width = $('#carousel_ul > li').width() + 20;
        //make the sliding effect using jquery's anumate function '
        $('#carousel_ul').animate({
            'left': '-' + item_width + 'px'
        }, 500);
        // $(this).css({'cursor':'default','color':'#ccc'});
        $('#left_scroll i').css({
            'cursor': 'pointer',
            'color': '#040404'
        });
    });

    //when user clicks the left arrow for sliding left
    $('#left_scroll i').click(function() {
        var item_width = $('#carousel_ul > li').width();
        $('#carousel_ul').animate({
            'left': '0px'
        }, 500);
        $(this).css({
            'cursor': 'default',
            'color': '#ccc'
        });
        $('#right_scroll i').css({
            'cursor': 'pointer',
            'color': '#040404'
        });
    });

    $('.first_dropdown').click(function() {
        var item_width = $('#carousel_ul > li').width();
        $('#carousel_ul').animate({
            'left': '0px'
        }, 500);
        $('#left_scroll i').css({
            'cursor': 'default',
            'color': '#ccc'
        });
        $('#right_scroll i').css({
            'cursor': 'pointer',
            'color': '#040404'
        });
    });
    // End of solution custom tab carousel




    //casestudy toggle and collapse functionality
    $('.case-studies-control-grid > li').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('data-tab');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.case-studies-control-holder > div[data-tab="' + target + '"]').stop(1, 1).slideUp();
        } else {
            $(".case-studies-control-grid > li.active").removeClass('active');
            $(this).addClass('active');
            $('.case-studies-control-holder > div').stop(1, 1).slideUp();
            $('.case-studies-control-holder > div[data-tab="' + target + '"]').stop(1, 1).slideDown();
        }
    });




    /*  end color of service color */


    /* for searching the job and location */


    function jobPostSplitter() {
        $('table.job-table').each(function() {
            $('.job-table').next(".pager").remove();
            var currentPage = 0;
            var numPerPage;
            if (screen.width > 1199) {
                numPerPage = 5;
            } else {
                numPerPage = 15;
            }
            var $table = $(this);
            $table.bind('repaginate', function() {
                $table.find('tbody .shown-item').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
            });
            $table.trigger('repaginate');
            var numRows = $table.find('tbody .shown-item').length;
            var numPages = Math.ceil(numRows / numPerPage);
            var $pager = $('<div class="pager"></div>');
            if (numPages > 1) {
                for (var page = 0; page < numPages; page++) {
                    $('<span class="page-number"></span>').text(page + 1).bind('click', {
                        newPage: page
                    }, function(event) {
                        currentPage = event.data['newPage'];
                        $table.trigger('repaginate');
                        $(this).addClass('active').siblings().removeClass('active');
                    }).appendTo($pager).addClass('clickable');
                }
                $pager.insertAfter($table).find('span.page-number:first').addClass('active');
            }
            if (numRows == 0) {
                $pager = $('<div class="pager"><p>sorry, we dont have any job opening for this job title/location</p></div>');
                $pager.insertAfter($table);
            }
        });
    }




    function jobSearchFunction() {
        var keyword_job = $(".serch-the-job").parent().prev().prev().children().val() + " ";
        var location_job = $(".serch-the-job").parent().prev().children().val() + " ";

        var job_title, job_location;
        keyword_job = keyword_job.trim().toLowerCase();
        location_job = location_job.trim().toLowerCase();

        if (keyword_job == "" && location_job == "") //for empty search
        {
            $('.job-list-item').each(function() {
                $(this).show();
                $(this).addClass('shown-item');
            });
        } else if (keyword_job == "") // for only job location
        {
            $('.job-list-item').each(function() {
                job_location = $(this).find("td:nth-child(2)").text();
                job_location = job_location.trim().toLowerCase();
                if (job_location.search(location_job) > -1) {
                    $(this).show();
                    $(this).addClass('shown-item');
                } else {
                    $(this).hide();
                    $(this).removeClass('shown-item');
                }
            });
        } else if (location_job == "") //for only job title
        {
            $('.job-list-item').each(function() {
                job_title = $(this).children().first().text();
                job_title = job_title.trim().toLowerCase();
                if (job_title.search(keyword_job) > -1) {
                    $(this).show();
                    $(this).addClass('shown-item');

                } else {
                    $(this).hide();
                    $(this).removeClass('shown-item');
                }
            });
        } else //for both job tiltle and location
        {
            $('.job-list-item').each(function() {
                job_title = $(this).children().first().text();
                job_title = job_title.trim().toLowerCase();

                job_location = $(this).find("td:nth-child(2)").text();
                job_location = job_location.trim().toLowerCase();

                if (job_title.search(keyword_job) > -1 && job_location.search(location_job) > -1) {
                    $(this).show();
                    $(this).addClass('shown-item');
                } else {
                    $(this).hide();
                    $(this).removeClass('shown-item');
                }
            });
        }
    }



    jobSearchFunction();
    jobPostSplitter();
    /*   upon clicking search button  */
    $(".serch-the-job").click(function() {
        jobSearchFunction();
        jobPostSplitter();
    });

    /*   upon enter button  */

    $('#job-title').keydown(function(e) {
        if (e.keyCode == 13) {
            jobSearchFunction();
            jobPostSplitter()
        }
    });

    $('#job-location').keydown(function(e) {
        if (e.keyCode == 13) {
            jobSearchFunction();
            jobPostSplitter();
        }
    });

    /* end for searching the job and location */

    /* for google search engine */

    (function() {
        var cx = '012091172359027849241:ukd4iabk1_g';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
    /* end for google search engine */



    /* start of blog landing page animation */

    $("#div-main-part2 #right-div-part1").click(function() {
        $("#div-main-part2").css("display", "none");
        $("#div2-right-div-part1").css("display", "block");
    });
    $("#right-div-part2 ").click(function() {
        $("#div-main-part2").css("display", "none");
        $("#div2-right-div-part2").css("display", "block");
    });


    $("#right-div-part3").click(function() {
        $("#div-main-part2").css("display", "none");
        $("#div2-right-div-part3").css("display", "block");
    });


    $("#right-div-part4").click(function() {
        $("#div-main-part2").css("display", "none");
        $("#div2-right-div-part4").css("display", "block");
    });

    $("#div-main-part1").mouseleave(function() {
        $("#div-main-part2").css("display", "block");
        $("#div2-right-div-part1").css("display", "none");
        $("#div2-right-div-part1").css("display", "none");
        $("#div2-right-div-part2").css("display", "none");
        $("#div2-right-div-part3").css("display", "none");
        $("#div2-right-div-part4").css("display", "none");
    });
    /* end of blog landing page animation */

    /* for portfolio page dropdown item click*/
    //   $(".dropdown-link .dropdown a").click( function() {
    //    var navtab = $(".line-padding.prot-img").offset().top - 50;
    //        $('html, body').animate({
    //          scrollTop: navtab}, 500, 'linear');
    // });
    /* end for portfolio page dropdown item click*/

    var height_pixel = $("#blog1-div1-part1").css('height');
    $("#blog1-div1-part1").click(function() {
        if ($(this).css('height') === height_pixel) {
            $("#blog2-div1-part2").animate({
                'height': '0%'
            }, 844);
            $(this).css("z-index", "1");
            $(this).children().next(".part2").animate({
                'margin-top': '10%'
            }, 444);
            $(this).find(".main-animate-arrow").hide();
            $(this).animate({
                'height': '100vh'
            }, 844);
        } else {
            $(this).animate({
                'height': '50vh'
            }, 844);
            $(this).find(".main-animate-arrow").show();
            $(this).children().next(".part2").animate({
                'margin-top': '27%'
            }, 444);
            $(this).css("z-index", "0");
            $("#blog2-div1-part2").animate({
                'height': '50vh'
            }, 844);
        }
    });
    $("#blog1-div1-part1").mouseleave(function() {
        $(this).animate({
            'height': '50vh'
        }, 844);
        $(this).children().next(".part2").animate({
            'margin-top': '27%'
        }, 444);
        $(this).css("z-index", "0");
        $(this).find(".main-animate-arrow").show();
        $("#blog2-div1-part2").animate({
            'height': '50vh'
        }, 844);
    });


    $("#blog2-div1-part2").click(function() {

        if ($(this).css('height') === height_pixel) {

            $(this).css("z-index", "1");
            $(this).find(".blog-img").animate({
                'margin-top': '25%'
            }, 444);
            $(this).children().next(".part2").animate({
                'margin-top': '12%'
            }, 444);
            $(this).find(".main-animate-arrow").hide();
            $("#blog1-div1-part1").animate({
                'top': '-100%'
            }, 844);
            $(this).animate({
                'height': '100vh'
            }, 844);
        } else {
            $(this).find(".blog-img").animate({
                'margin-top': '20%'
            }, 444);
            $(this).children().next(".part2").animate({
                'margin-top': '27%'
            }, 444);
            $(this).animate({
                'height': '50vh'
            }, 844);
            $(this).find(".main-animate-arrow").show();
            $(this).css("z-index", "0");
            $("#blog1-div1-part1").animate({
                'top': '0%'
            }, 844);
        }
    });
    $("#blog2-div1-part2").mouseleave(function() {
        $(this).find(".blog-img").animate({
            'margin-top': '20%'
        }, 444);
        $(this).children().next(".part2").animate({
            'margin-top': '27%'
        }, 444);
        $(this).animate({
            'height': '50vh'
        }, 844);
        $(this).css("z-index", "0");
        $(this).find(".main-animate-arrow").show();
        $("#blog1-div1-part1").animate({
            'top': '0%'
        }, 844);
    });



    $("#blog2-div2-part2").click(function() {

        if ($(this).css('height') === height_pixel) {
            $("#blog1-div2-part1").animate({
                'top': '-100%'
            }, 844);
            $(this).css("z-index", "1");
            $(this).find(".blog-img").animate({
                'margin-top': '25%'
            }, 444);
            $(this).children().next(".part2").animate({
                'margin-top': '12%'
            }, 444);
            $(this).find(".main-animate-arrow").hide();
            $(this).animate({
                'height': '100vh'
            }, 844);
        } else {
            $(this).find(".blog-img").animate({
                'margin-top': '20%'
            }, 444);
            $(this).children().next(".part2").animate({
                'margin-top': '27%'
            }, 444);
            $(this).animate({
                'height': '50vh'
            }, 844);
            $(this).css("z-index", "0");
            $(this).find(".main-animate-arrow").show();
            $("#blog1-div2-part1").animate({
                'top': '0%'
            }, 844);
        }
    });
    $("#blog2-div2-part2").mouseleave(function() {
        $(this).find(".blog-img").animate({
            'margin-top': '20%'
        }, 444);
        $(this).children().next(".part2").animate({
            'margin-top': '27%'
        }, 444);
        $(this).animate({
            'height': '50vh'
        }, 844);
        $(this).css("z-index", "0");
        $(this).find(".main-animate-arrow").show();
        $("#blog1-div2-part1").animate({
            'top': '0%'
        }, 844);
    });

    /* for the 3d row*/
    $("#blog1-div3-part1").click(function() {

        if ($(this).css('height') === height_pixel) {
            $("#blog2-div3-part2").animate({
                'height': '0vh'
            }, 844);
            $(this).children().next(".part2").animate({
                'margin-top': '13%'
            }, 444);
            $(this).css("z-index", "1");
            $(this).find(".main-animate-arrow").hide();
            $(this).animate({
                'height': '100vh'
            }, 844);
        } else {
            $(this).animate({
                'height': '50vh'
            }, 844);
            $(this).css("z-index", "0");
            $(this).find(".main-animate-arrow").show();
            $("#blog2-div3-part2").animate({
                'height': '50vh'
            }, 844);
            $(this).children().next(".part2").animate({
                'margin-top': '27%'
            }, 444);
        }
    });
    $("#blog1-div3-part1").mouseleave(function() {
        $(this).animate({
            'height': '50vh'
        }, 844);
        $(this).css("z-index", "0");
        $(this).find(".main-animate-arrow").show();
        $("#blog2-div3-part2").animate({
            'height': '50vh'
        }, 844);
        $(this).children().next(".part2").animate({
            'margin-top': '27%'
        }, 444);
    });


    $("#blog2-div3-part2").click(function() {

        if ($(this).css('height') === height_pixel) {
            $("#blog1-div3-part1").animate({
                'top': '-100%'
            }, 844);
            $(this).css("z-index", "1");
            $(this).find(".blog-img").animate({
                'margin-top': '25%'
            }, 444);
            $(this).children().next(".part2").animate({
                'margin-top': '12%'
            }, 444);
            $(this).find(".main-animate-arrow").hide();
            $(this).animate({
                'height': '100vh'
            }, 844);
        } else {
            $(this).find(".blog-img").animate({
                'margin-top': '20%'
            }, 444);
            $(this).children().next(".part2").animate({
                'margin-top': '27%'
            }, 444);
            $(this).animate({
                'height': '50vh'
            }, 844);
            $(this).css("z-index", "0");
            $(this).find(".main-animate-arrow").show();
            $("#blog1-div3-part1").animate({
                'top': '0%'
            }, 844);
        }
    });
    $("#blog2-div3-part2").mouseleave(function() {
        $(this).find(".blog-img").animate({
            'margin-top': '20%'
        }, 444);
        $(this).children().next(".part2").animate({
            'margin-top': '27%'
        }, 444);
        $(this).animate({
            'height': '50vh'
        }, 844);
        $(this).css("z-index", "0");
        $(this).find(".main-animate-arrow").show();
        $("#blog1-div3-part1").animate({
            'top': '0%'
        }, 844);
    });

    var which_one_clicked1 = 0;

    $("#div-top-left").click(function() {
        if (which_one_clicked1 == 0) {
            which_one_clicked1 = 1;
            $("#hw-ribbon-our-thinking-footer").css("display", "none");
            $(this).removeClass("thinking-height");
            $(this).animate({
                'width': '100%',
                'height': '77.4vh'
            }, 844);
            $("#div-top-right").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-bottom-right").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-bottom-left").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            setTimeout(function() {
                $("#div-top-left").addClass("ot-werelve-wepractice");
            }, 800);
            $("#collapse-image-1").css("display", "block");
            $("#collapse-image-1").animate({
                "opacity": "1"
            }, 844);
            $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({
                "margin-bottom": "7%"
            }, 844);
        }
    });

    $("#div-top-right").click(function() {
        if (which_one_clicked1 == 0) {
            which_one_clicked1 = 2;
            $("#hw-ribbon-our-thinking-footer").css("display", "none");
            $(this).removeClass("thinking-height");
            $(this).animate({
                'width': '100%',
                'height': '77.4vh'
            }, 844);
            $("#div-top-left").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-bottom-right").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-bottom-left").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            setTimeout(function() {
                $("#div-top-right").addClass("ot-werelve-wepractice");
            }, 800);
            $("#collapse-image-2").css("display", "block");
            $("#collapse-image-2").animate({
                "opacity": "1"
            }, 844);
            $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({
                "margin-bottom": "7%"
            }, 844);
        }
    });

    $("#div-bottom-left").click(function() {
        if (which_one_clicked1 == 0) {
            which_one_clicked1 = 3;
            $("#hw-ribbon-our-thinking-footer").css("display", "none");
            $(this).removeClass("thinking-height");
            $(this).animate({
                'width': '100%',
                'height': '54.4vh'
            }, 844);
            $("#div-bottom-right").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-top-right").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-top-left").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            setTimeout(function() {
                $("#div-bottom-left").addClass("ot-wepartner-weaccelrte");
                $("#buisness-tab").removeClass("thinking-height2");
            }, 800);
            $("#collapse-image-3").css("display", "block");
            $("#collapse-image-3").animate({
                "opacity": "1"
            }, 844);
            $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({
                "margin-bottom": "7%"
            }, 944);
        }
    });

    $("#div-bottom-right").click(function() {
        if (which_one_clicked1 == 0) {
            which_one_clicked1 = 4;
            $("#hw-ribbon-our-thinking-footer").css("display", "none");
            $(this).removeClass("thinking-height");
            $(this).animate({
                'width': '100%',
                'height': '54.4vh'
            }, 844);
            $("#div-bottom-left").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-top-right").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            $("#div-top-left").animate({
                'width': '0%',
                'height': '0vh'
            }, 844);
            setTimeout(function() {
                $("#div-bottom-right").addClass("ot-wepartner-weaccelrte");
                $("#buisness-tab").removeClass("thinking-height2");
            }, 800);

            $("#collapse-image-4").css("display", "block");
            $("#collapse-image-4").animate({
                "opacity": "1"
            }, 844);
            $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({
                "margin-bottom": "7%"
            }, 844);
        }
    });

    var collapseFunction = function() {
        var navtab = $(".bs-example").offset().top + 0;
        $('html, body').animate({
            scrollTop: navtab
        }, 500, 'linear');
        if (which_one_clicked1 == 4) {
            which_one_clicked1 = 0;
            $("#div-bottom-right").removeClass("ot-wepartner-weaccelrte");
            $("#buisness-tab").addClass("thinking-height2");
            $("#collapse-image-4").css("display", "none");
            $("#collapse-image-4").animate({
                "opacity": "0"
            }, 844);
            $("#div-bottom-right").addClass("thinking-height");
            $("#div-bottom-right").animate({
                'height': '77.4vh'
            }, 0);
            $("#div-bottom-right").css("bottom", "0");
        } else if (which_one_clicked1 == 3) {
            which_one_clicked1 = 0;
            $("#div-bottom-left").removeClass("ot-wepartner-weaccelrte");
            $("#buisness-tab").addClass("thinking-height2");
            $("#collapse-image-3").css("display", "none");
            $("#collapse-image-3").animate({
                "opacity": "0"
            }, 844);
            $("#div-bottom-left").addClass("thinking-height");
            $("#div-bottom-left").animate({
                'height': '77.4vh'
            }, 0);
            $("#div-bottom-left").css("bottom", "0");
        } else if (which_one_clicked1 == 2) {
            which_one_clicked1 = 0;
            $("#div-top-right").removeClass("ot-werelve-wepractice");
            $("#collapse-image-2").css("display", "none");
            $("#collapse-image-2").animate({
                "opacity": "0"
            }, 844);
            $("#div-top-right").addClass("thinking-height");
            $("#div-top-right").animate({
                'height': '77.4vh'
            }, 0);
        } else if (which_one_clicked1 == 1) {
            which_one_clicked1 = 0;
            $("#div-top-left").removeClass("ot-werelve-wepractice");
            $("#collapse-image-1").css("display", "none");
            $("#collapse-image-1").animate({
                "opacity": "0"
            }, 844);
            $("#div-top-left").addClass("thinking-height");
            $("#div-top-left").animate({
                'height': '77.4vh'
            }, 0);
        }


        setTimeout(function() {
            $("#hw-ribbon-our-thinking-footer").css("display", "block");
        }, 1000);
        $(".main-contentt h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({
            "margin-bottom": "29%"
        }, 844);
        $("#div-bottom-right").animate({
            'width': '50%',
            'height': '270px'
        }, 844);
        $("#div-bottom-left").animate({
            'width': '50%',
            'height': '270px'
        }, 844);
        $("#div-top-right").animate({
            'width': '50%',
            'height': '270px'
        }, 844);
        $("#div-top-left").animate({
            'width': '50%',
            'height': '270px'
        }, 844);
    };

    $(".collapse-button").click(function() {
        collapseFunction();
    });
    $("#our-thinking-responsive .p-flex").click(function() {
        collapseFunction();
    });




    // responsive ends


    /* menu two */

    /*for the second banner*/
    function hiddingAllElements() {
        $("#We_partner").hide();
        $("#We_resolve").hide();
        $("#We_practice").hide();
        $("#We_accelerate").hide();
        $('#middle-div-part1').css("height", "120px");
        $('#middle-div-part1').find("i.fa.fa-chevron-down.down-arrow").hide();
        $('#middle-div-part2').css("height", "120px");
        $('#middle-div-part2').find("i.fa.fa-chevron-down.down-arrow").hide();
        $('#middle-div-part3').css("height", "120px");
        $('#middle-div-part3').find("i.fa.fa-chevron-down.down-arrow").hide();
        $('#middle-div-part4').css("height", "120px");
        $('#middle-div-part4').find("i.fa.fa-chevron-down.down-arrow").hide();
        $(".hw-fixed-heading").show();
    }
    $('#middle-div-part1').click(function() {
        if ($('#We_partner').css("display") == "none") {
            hiddingAllElements();
            $("#We_partner").show();
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
            $(this).css("height", "140px");
            $(".hw-fixed-heading").hide();
        } else {
            $("#We_partner").hide();
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
            $(this).css("height", "120px");
            $(".hw-fixed-heading").show();
        }
    });

    $('#middle-div-part2').click(function() {
        if ($('#We_resolve').css("display") == "none") {
            hiddingAllElements();
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
            $("#We_resolve").show();
            $(this).css("height", "140px");
            $(".hw-fixed-heading").hide();
        } else {
            $("#We_resolve").hide();
            $(this).css("height", "120px");
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
            $(".hw-fixed-heading").show();
        }
    });
    $('#middle-div-part3').click(function() {
        if ($('#We_practice').css("display") == "none") {
            hiddingAllElements();
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
            $("#We_practice").show();
            $(this).css("height", "140px");
            $(".hw-fixed-heading").hide();
        } else {
            $("#We_practice").hide();
            $(this).css("height", "120px");
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
            $(".hw-fixed-heading").show();
        }
    });
    $('#middle-div-part4').click(function() {
        if ($('#We_accelerate').css("display") == "none") {
            hiddingAllElements();
            $("#We_accelerate").show();
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
            $(this).css("height", "140px");
            $(".hw-fixed-heading").hide();
        } else {
            $("#We_accelerate").hide();
            $(this).css("height", "120px");
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
            $(".hw-fixed-heading").show();
        }
    });

    $("#top-div").mouseenter(function() {
        hiddingAllElements();
    });

    $('#middle-div-part1').mouseenter(function() {
        if ($('#We_partner').css("display") == "none") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        }
    });
    $('#middle-div-part1').mouseleave(function() {
        if ($('#We_partner').css("display") == "block") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        } else {
            $(this).animate({
                "height": "120px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
        }
    });


    $('#middle-div-part2').mouseenter(function() {
        if ($('#We_resolve').css("display") == "none") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        }
    });
    $('#middle-div-part2').mouseleave(function() {
        if ($('#We_resolve').css("display") == "block") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        } else {
            $(this).animate({
                "height": "120px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
        }
    });
    $('#middle-div-part3').mouseenter(function() {
        if ($('#We_practice').css("display") == "none") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        }
    });
    $('#middle-div-part3').mouseleave(function() {
        if ($('#We_practice').css("display") == "block") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        } else {
            $(this).animate({
                "height": "120px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
        }
    });
    $('#middle-div-part4').mouseenter(function() {
        if ($('#We_accelerate').css("display") == "none") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        }
    });
    $('#middle-div-part4').mouseleave(function() {
        if ($('#We_accelerate').css("display") == "block") {
            $(this).animate({
                "height": "140px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").show();
        } else {
            $(this).animate({
                "height": "120px"
            }, 244);
            $(this).find("i.fa.fa-chevron-down.down-arrow").hide();
        }
    });



    /*for filtering in case study*/
    var no_of_total_case_study_item = 0;
    $(".casestudy-category-init").each(function() {
        no_of_total_case_study_item++;
    });
    $("#case-studies-total-no").text(no_of_total_case_study_item);

    function case_study_filter_function() {
        $(".no_of_matched_case_item").remove();
        var no_of_matched_item = 0;
        if ($("#case-studies-dataops-checkbox").prop('checked') == true) {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "dataops") {
                    $(".casestudy-ul ul ").find(".dataops").css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "dataops") {
                    $(".casestudy-ul ul ").find(".dataops").css("display", "none");
                }
            });
        }

        if ($("#case-studies-devops-checkbox").prop('checked') == true) {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "devops") {
                    $(".casestudy-ul ul ").find(".devops").css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "devops") {
                    $(".casestudy-ul ul ").find(".devops").css("display", "none");
                }
            });
        }

        if ($("#case-studies-datascie-checkbox").prop('checked') == true) {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "data science") {
                    $(".casestudy-ul ul ").find(".data").css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "data science") {
                    $(".casestudy-ul ul ").find(".data").css("display", "none");
                }
            });
        }

        if ($("#case-studies-ui-ux-checkbox").prop('checked') == true) {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "ui") {
                    $(".casestudy-ul ul ").find(".ui").css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "ui") {
                    $(".casestudy-ul ul ").find(".ui").css("display", "none");
                }
            });
        }
        if ($("#case-studies-mobility-checkbox").prop('checked') == true) {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "mobility") {
                    $(".casestudy-ul ul ").find(".mobility").css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "mobility") {
                    $(".casestudy-ul ul ").find(".mobility").css("display", "none");
                }
            });
        }

        if ($("#case-studies-client-checkbox").prop('checked') == true) {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "client work") {
                    $(".casestudy-ul ul ").find(".client").css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".casestudy-category-init").each(function() {
                if ($(this).text().toLowerCase().trim() == "client work") {
                    $(".casestudy-ul ul ").find(".client").css("display", "none");
                }
            });
        }
        $("#case-studies-total-no").text(no_of_matched_item + "/" + no_of_total_case_study_item);
        if (no_of_matched_item == 0)
            $(".casestudy-ul ul ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b"><p>sorry, no match found</p></div>');
    }

    $("#case-studies-mobility-checkbox,#case-studies-client-checkbox,#case-studies-dataops-checkbox,#case-studies-devops-checkbox,#case-studies-datascie-checkbox,#case-studies-ui-ux-checkbox").click(function() {
        case_study_filter_function();
    });

    /*end filtering in case study*/

    /*for filtering in bootcamp*/

    var no_of_total_bootcamp_item = 0;
    $(".upskill-cont-filter").each(function() {
        no_of_total_bootcamp_item++;
    });
    $("#bootcamp-filter-total-no").text(no_of_total_bootcamp_item);

    function bootcamp_filter_function() {
        $(".no_of_matched_case_item").remove();
        var no_of_matched_item = 0;
        if ($("#bootcamp-dataops-checkbox").prop('checked') == true) {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "dataops") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "dataops") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#bootcamp-devops-checkbox").prop('checked') == true) {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "devops") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "devops") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#bootcamp-datascie-checkbox").prop('checked') == true) {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "data science") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "data science") {
                    $(this).css("display", "none");
                }
            });
        }

        if ($("#bootcamp-ui-ux-checkbox").prop('checked') == true) {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "ui") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "ui") {
                    $(this).css("display", "none");
                }
            });
        }
        if ($("#bootcamp-mobility-checkbox").prop('checked') == true) {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "mobility") {
                    $(this).css({
                        opacity: 0,
                        display: 'block'
                    }).animate({
                        opacity: 1
                    }, 500);
                    no_of_matched_item++;
                }

            });
        } else {
            $(".upskill-cont-filter").each(function() {
                if ($(this).children().children().first().text().toLowerCase().trim() == "mobility") {
                    $(this).css("display", "none");
                }
            });
        }

        $("#bootcamp-filter-total-no").text(no_of_matched_item + "/" + no_of_total_bootcamp_item);
        if (no_of_matched_item == 0)
            $(".hw-upskilling-details  ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b;margin-top:40px;margin-bottom:40px"><p>sorry, no match found</p></div>');
    }

    $("#bootcamp-mobility-checkbox,#bootcamp-client-checkbox,#bootcamp-dataops-checkbox,#bootcamp-devops-checkbox,#bootcamp-datascie-checkbox,#bootcamp-ui-ux-checkbox").click(function() {
        bootcamp_filter_function();
    });



    /*end filtering in bootcamp*/

    /*start of company page animation banner*/
    $("#xmlid_company_date")


    $('g[id="XMLID_2_"],#xmlid_company_date').mouseenter(function() {
        $("#xmlid_company_date").text("2014");
        $("#xmlid2_circle_desc").show();
        $(this).children('g:last-child').find("path").attr("class", "XMLID_2_-rotate");
    });

    $('#xmlid_company_date').mouseenter(function() {
        $("#xmlid2_circle_desc").show();
    });

    $('g[id="XMLID_3_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.1) translateX(-59%) translateY(-27%)",
            "-moz-transform": "scale(1.1) translateX(-4.5%) translateY(-4.5%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.08) translateX(-32%) translateY(-13%)",
            "-moz-transform": "scale(1.08) translateX(-3.6%) translateY(-3.6%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-20%) translateY(-9%)",
            "-moz-transform": "scale(1.06) translateX(-2.7%) translateY(-2.7%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-12%) translateY(-5%)",
            "-moz-transform": "scale(1.04) translateX(-1.8%) translateY(-2%)"
        });
    });
    $('g[id="XMLID_4_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2014");
        $("#xmlid_circle_desc").text("Team").css({
            "font-size": 0
        }).animate({
            "font-size": 18
        }, 500);
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");


        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.1) translateX(-39%) translateY(-19%)",
            "-moz-transform": "scale(1.1) translateX(-4.5%) translateY(-4%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.08) translateX(-25%) translateY(-12%)",
            "-moz-transform": "scale(1.08) translateX(-3.5%) translateY(-3.7%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-17%) translateY(-7%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-3%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-10%) translateY(-4%)",
            "-moz-transform": "scale(1.04) translateX(-2%) translateY(-2%)"
        });

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.9) translateX(108%) translateY(51%)",
            "-moz-transform": "scale(0.9) translateX(5.5%) translateY(5.3%)"
        });
    });
    $('g[id="XMLID_5_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $("#xmlid5_circle_desc").css({
            "opacity": 0,
            "display": "block"
        }).animate({
            "opacity": 1
        }, 900);
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.1) translateX(-31%) translateY(-15%)",
            "-moz-transform": "scale(1.1) translateX(-4.5%) translateY(-4.5%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.08) translateX(-22%) translateY(-10%)",
            "-moz-transform": "scale(1.08) translateX(-3.7%) translateY(-3.5%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-15%) translateY(-7%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.7%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-9%) translateY(-4%)",
            "-moz-transform": "scale(1.04) translateX(-2%) translateY(-2%)"
        });

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.9) translateX(71%) translateY(34%)",
            "-moz-transform": "scale(0.9) translateX(5.5%) translateY(5.3%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(52%) translateY(24%)",
            "-moz-transform": "scale(0.95) translateX(2.7%) translateY(2.6%)"
        }); //
    });
    $('g[id="XMLID_7_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.1) translateX(-27%) translateY(-12%)",
            "-moz-transform": "scale(1.1) translateX(-4.5%) translateY(-4.5%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.08) translateX(-19%) translateY(-9%)",
            "-moz-transform": "scale(1.08) translateX(-3.7%) translateY(-3.5%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-13%) translateY(-6%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-3%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-8%) translateY(-3%)",
            "-moz-transform": "scale(1.04) translateX(-2%) translateY(-2%)"
        });
        $(this).next().next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-7%) translateY(-3%)",
            "-moz-transform": "scale(1.04) translateX(-2%) translateY(-2%)"
        });

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.9) translateX(49%) translateY(25%)",
            "-moz-transform": "scale(0.9) translateX(5.5%) translateY(5.8%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.93) translateX(47%) translateY(24%)",
            "-moz-transform": "scale(0.93) translateX(3.6%) translateY(3.6%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(40%) translateY(19%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2%)"
        }); //
    });
    $('g[id="XMLID_8_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.1) translateX(-24%) translateY(-11%)",
            "-moz-transform": "scale(1.08) translateX(-3.7%) translateY(-3.6%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.08) translateX(-17%) translateY(-8%)",
            "-moz-transform": "scale(1.08) translateX(-3.7%) translateY(-3.6%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-12%) translateY(-5%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.6%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-7%) translateY(-3.5%)",
            "-moz-transform": "scale(1.04) translateX(-1.8%) translateY(-2%)"
        });
        $(this).next().next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.02) translateX(-3%) translateY(-1.5%)",
            "-moz-transform": "scale(1.02) translateX(-1%) translateY(-1.1%)"
        });

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.9) translateX(38%) translateY(19%)",
            "-moz-transform": "scale(0.9) translateX(5.5%) translateY(5.3%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.92) translateX(39%) translateY(19%)",
            "-moz-transform": "scale(0.92) translateX(4.4%) translateY(4.5%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.94) translateX(41%) translateY(19%)",
            "-moz-transform": "scale(0.94) translateX(3.1%) translateY(3%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(40%) translateY(19%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2%)"
        }); //
    });
    $('g[id="XMLID_9_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $("#xmlid9_circle_desc").css({
            "opacity": 0,
            "display": "block"
        }).animate({
            "opacity": 1
        }, 900);
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.08) translateX(-17%) translateY(-8%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.7%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-11.5%) translateY(-5.5%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.7%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-8%) translateY(-3%)",
            "-moz-transform": "scale(1.04) translateX(-2%) translateY(-2%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.02) translateX(-3%) translateY(-1.5%)",
            "-moz-transform": "scale(1.02) translateX(-1%) translateY(-1%)"
        });
        $(this).next().next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.008) translateX(-1%) translateY(-0.5%)",
            "-moz-transform": "scale(1.008) translateX(-0.6%) translateY(-0.5%)"
        });

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.9) translateX(33%) translateY(16%)",
            "-moz-transform": "scale(0.92) translateX(4.2%) translateY(4%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.92) translateX(30%) translateY(14%)",
            "-moz-transform": "scale(0.92) translateX(4.2%) translateY(4.1%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.94) translateX(28%) translateY(14%)",
            "-moz-transform": "scale(0.94) translateX(3.2%) translateY(3.3%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(26%) translateY(13%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2%)"
        }); //
    });
    $('g[id="XMLID_10_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.07) translateX(-13%) translateY(-6%)",
            "-moz-transform": "scale(1.07) translateX(-3.3%) translateY(-3.2%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-10.5%) translateY(-5%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.8%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-7%) translateY(-3%)",
            "-moz-transform": "scale(1.04) translateX(-1.9%) translateY(-1.8%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.02) translateX(-3%) translateY(-1.5%)",
            "-moz-transform": "scale(1.02) translateX(-1%) translateY(-1%)"
        });
        $(this).next().next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.01) translateX(-1.5%) translateY(-1%)",
            "-moz-transform": "scale(1.01) translateX(-0.5%) translateY(-0.4%)"
        });

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.91) translateX(25.5%) translateY(12%)",
            "-moz-transform": "scale(0.91) translateX(4.8%) translateY(4.5%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.92) translateX(25%) translateY(12%)",
            "-moz-transform": "scale(0.92) translateX(4.2%) translateY(4%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.94) translateX(22%) translateY(10%)",
            "-moz-transform": "scale(0.94) translateX(3%) translateY(3%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(19%) translateY(9%)",
            "-moz-transform": "scale(0.96) translateX(2.1%) translateY(2.2%)"
        }); //
    });
    $('g[id="XMLID_11_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-10.6%) translateY(-5%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-3%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.04) translateX(-6.5%) translateY(-3%)",
            "-moz-transform": "scale(1.04) translateX(-1.9%) translateY(-1.8%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.02) translateX(-3%) translateY(-2%)",
            "-moz-transform": "scale(1.02) translateX(-1%) translateY(-1%)"
        });
        $(this).next().next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.01) translateX(-1.5%) translateY(-1%)",
            "-moz-transform": "scale(1.01) translateX(-0.5%) translateY(-0.4%)"
        });
        $("#XMLID_MAIN_").css({
            "-webkit-transform": "scale(1.02) translateX(-2%) translateY(-2%)",
            "-moz-transform": "scale(1.02) translateX(-0.9%) translateY(-1.3%)"
        }); //for main

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.94) translateX(14.5%) translateY(7%)",
            "-moz-transform": "scale(0.94) translateX(3.12%) translateY(3.1%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(13.5%) translateY(6%)",
            "-moz-transform": "scale(0.95) translateX(2.6%) translateY(2.5%)"
        }); 
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(12.5%) translateY(5%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(1.9%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.98) translateX(8%) translateY(3%)",
            "-moz-transform": "scale(0.98) translateX(1%) translateY(1%)"
        }); 
    });
    $('g[id="XMLID_12_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $("#xmlid12_circle_desc").css({
            "opacity": 0,
            "display": "block"
        }).animate({
            "opacity": 1
        }, 900);
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.05) translateX(-8.3%) translateY(-4%)",
            "-moz-transform": "scale(1.04) translateX(-1.9%) translateY(-1.8%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-9%) translateY(-5%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.6%)"
        });
        $(this).next().next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.02) translateX(-3%) translateY(-1.2%)",
            "-moz-transform": "scale(1.02) translateX(-1%) translateY(-1%)"
        });
        $("#XMLID_MAIN_").css({
            "-webkit-transform": "scale(1.06) translateX(-7%) translateY(-5%)",
            "-moz-transform": "scale(1.06) translateX(-2.5%) translateY(-2.5%)"
        }); //for main

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.94) translateX(12.9%) translateY(6%)",
            "-moz-transform": "scale(0.94) translateX(3.2%) translateY(3%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(11.5%) translateY(5.5%)",
            "-moz-transform": "scale(0.95) translateX(2.5%) translateY(2.5%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(10.5%) translateY(5%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.98) translateX(6%) translateY(3%)",
            "-moz-transform": "scale(0.98) translateX(1%) translateY(1%)"
        }); //
    });
    $('g[id="XMLID_13_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.03) translateX(-4.3%) translateY(-3%)",
            "-moz-transform": "scale(1.03) translateX(-1.5%) translateY(-1.4%)"
        }); //
        $(this).next().next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.03) translateX(-4.3%) translateY(-2%)",
            "-moz-transform": "scale(1.03) translateX(-1.5%) translateY(-1.4%)"
        }); //
        $("#XMLID_MAIN_").css({
            "-webkit-transform": "scale(1.08) translateX(-9%) translateY(-6%)",
            "-moz-transform": "scale(1.08) translateX(-3.5%) translateY(-4%)"
        }); //for main

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(10%) translateY(4.5%)",
            "-moz-transform": "scale(0.95) translateX(2.6%) translateY(2.5%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(10.5%) translateY(5%)",
            "-moz-transform": "scale(0.95) translateX(2.6%) translateY(2.6%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(9.5%) translateY(4.5%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2.1%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.98) translateX(5%) translateY(2%)",
            "-moz-transform": "scale(0.98) translateX(1%) translateY(1%)"
        }); //
    }); //done
    $('g[id="XMLID_14_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");
        $(this).next().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(1.06) translateX(-8.5%) translateY(-4.3%)",
            "-moz-transform": "scale(1.06) translateX(-2.8%) translateY(-2.8%)"
        }); //
        $("#XMLID_MAIN_").css({
            "-webkit-transform": "scale(1.097) translateX(-12%) translateY(-7%)",
            "-moz-transform": "scale(1.097) translateX(-4%) translateY(-4%)"
        }); //for main

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(9%) translateY(4.5%)",
            "-moz-transform": "scale(0.95) translateX(2.5%) translateY(2.5%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(9.5%) translateY(5%)",
            "-moz-transform": "scale(0.95) translateX(2.5%) translateY(2.5%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(8.5%) translateY(4.5%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.98) translateX(4%) translateY(2%)",
            "-moz-transform": "scale(0.98) translateX(1%) translateY(1%)"
        }); //
    });

    $('g[id="XMLID_15_"]').mouseenter(function() {
        $("#xmlid_company_date").text("2016");
        $("#xmlid15_circle_desc").css({
            "opacity": 0,
            "display": "block"
        }).animate({
            "opacity": 1
        }, 900);
        $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
        $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");
        $("#XMLID_MAIN_").css({
            "-webkit-transform": "scale(1.097) translateX(-12%) translateY(-7%)",
            "-moz-transform": "scale(1.097) translateX(-4%) translateY(-4%)"
        }); //for main

        $(this).prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(9%) translateY(4.5%)",
            "-moz-transform": "scale(0.95) translateX(2.5%) translateY(2.5%)"
        });
        $(this).prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.95) translateX(9.5%) translateY(5%)",
            "-moz-transform": "scale(0.95) translateX(2.5%) translateY(2.5%)"
        }); //
        $(this).prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.96) translateX(8.5%) translateY(4.5%)",
            "-moz-transform": "scale(0.96) translateX(2%) translateY(2%)"
        });
        $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({
            "-webkit-transform": "scale(0.98) translateX(4%) translateY(2%)",
            "-moz-transform": "scale(0.98) translateX(1%) translateY(1%)"
        }); //
    });


    $('g[id^="XMLID_"],g#XMLID_MAIN_').mouseleave(function() {
        $("#xmlid_company_date").text("2014");
        $(".xmlid_circle_desc").hide();
        $(this).children('g:first-child').next().attr("class", "xmlid-hidden-path");
        $(this).children('g:last-child').find("path").attr("class", "");
        $('g[id^="XMLID_"]').prev().children('g:last-child').find("path").css("transform", "scale(1) translateX(0%) translateY( 0%)");
        $('g[id="XMLID_15_"]').children('g:last-child').find("path").css("transform", "scale(1) translateX(0%) translateY(0%)");
        $("#XMLID_MAIN_").css("transform", "scale(1) translateX(0%) translateY(0%)");
    });
    $('#all-the-path').mouseleave(function() {

        $("#xmlid_startup_circle_desc").css({
            "opacity": 0,
            "display": "block"
        }).animate({
            "opacity": 1
        }, 900);
        $("#xmlid_startup_desc").css({
            "opacity": 0,
            "display": "block"
        }).animate({
            "opacity": 1
        }, 900);
    });
    $('#xmlid_startup_circle_desc,#xmlid_startup_circle_desc').mouseover(function() {
        $("#xmlid_startup_circle_desc").show();
        $("#xmlid_startup_desc").show();
    });
    $('#all-the-path').mouseover(function() {

        $("#xmlid_startup_circle_desc").hide();
        $("#xmlid_startup_desc").hide();
    });



    $('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').mouseenter(function() {
        $(this).next().children('g:first-child').attr("class", "xmlid-hidden-line-path xmlid-shown-line-path xmlid-line-anime");
        var _this = $(this);
        _this.next().children("g:not(:first-child)").css("opacity", "0");
        _this.next().children("g:not(:first-child)").attr("class", "xmlid-hidden-line-path xmlid-shown-line-path");
        setTimeout(function() {
            _this.next().children("g:not(:first-child)").animate({
                "opacity": "1"
            }, 500);
        }, 800);
    });


    $('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').mouseleave(function() {
        $(this).next().children('g:first-child').attr("class", "xmlid-hidden-line-path");
        $(this).next().children().attr("class", "xmlid-hidden-line-path");
        $('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').next().children().attr("class", "xmlid-hidden-line-path");
    });

    $('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').next().children().attr("class", "xmlid-hidden-line-path");


    $("#company-anime-banner path").animate({
        "opacity": "1"
    }, 5000);

    /*end company banner anime*/



    /*for svg product banner*/
    var index = 2;
    setInterval(function() {
        setTimeout(function() {
            $('.device-anim').attr("class", "device-anim svg_hide");
            if (index == 1) $('#desktop-box').attr("class", "device-anim");
            if (index == 2) $('#tablet-box').attr("class", "device-anim");
            if (index == 3) $('#mobile-box').attr("class", "device-anim");
            index++;
            if (index >= 4) index = 1;
        }, 4000);
    }, 6000);


    /* start : Mobile code */
    $('.hwd #nav-icon1').on('click', function() {
        $('.hwd #toc').animate({
            width: '140px',
            right: 0
        });
        $(".hide-scroll").hide();
    });
    $('.hwd #button1').on('click', function() {
        $('.hwd #toc').animate({
            width: 0,
            right: 0
        });
        $(".hide-scroll").show();
    });

    // if ($(window).width() > 767 && $(window).width() < 1199) {
    //     $('.hwmt #nav-icon2,.hw-others #nav-icon2').on('click', function() {
    //         $('#toc1').animate({
    //             width: '300px',
    //             right: 0
    //         });
    //     });
    //     $('.hwmt #button2,.hw-others #button2,main').on('click', function() {
    //         $('#toc1').animate({
    //             width: 0,
    //             right: 0
    //         });
    //     });
    //     $('.hwmt .single-item').on('click', function() {
    //         $('.hwmt #toc1').animate({
    //             width: 0,
    //             right: 0
    //         });
    //     });
    // }
    // if ($(window).width() < 767) {
    //     $('.hwmt #nav-icon2,.hw-others #nav-icon2').on('click', function() {

    //         $('#toc1').animate({
    //             width: '100%',
    //             right: 0
    //         });
    //     });
    //     $('.hwmt #button2,.hw-others #button2').on('click', function() {
    //         $('#toc1').animate({
    //             width: 0,
    //             right: 0
    //         });
    //     });
    // }



    // $(window).resize(function() {


    //     if ($(window).width() > 767 && $(window).width() < 1199) {
    //         $('.hwmt #nav-icon2,.hw-others #nav-icon2').on('click', function() {
    //             $('#toc1').animate({
    //                 width: '300px',
    //                 right: 0
    //             });
    //         });
    //         $('.hwmt #button2,.hw-others #button2,main').on('click', function() {
    //             $('#toc1').animate({
    //                 width: 0,
    //                 right: 0
    //             });
    //         });
    //         $('.hwmt .single-item').on('click', function() {
    //             $('.hwmt #toc1').animate({
    //                 width: 0,
    //                 right: 0
    //             });
    //         });

    //     } else {
    //         $('.hwmt #nav-icon2,.hw-others #nav-icon2').on('click', function() {
    //             $('#toc1').animate({
    //                 width: '100%',
    //                 right: 0
    //             });
    //         });
    //         $('.hwmt #button2,.hw-others #button2').on('click', function() {
    //             $('#toc1').animate({
    //                 width: 0,
    //                 right: 0
    //             });
    //         });
    //     }




    // });
    // if (screen.width > 767) {
    //     $('.hwmt #nav-icon2').on('click', function() {
    //         $('.hwmt #toc1').animate({
    //             width: '300px',
    //             right: 0
    //         });
    //     });
    //     $('.hwmt #button2').on('click', function() {
    //         $('.hwmt #toc1').animate({
    //             width: 0,
    //             right: 0
    //         });
    //     });
    // } else {
    //     $('.hwmt #nav-icon2').on('click', function() {
    //         $('.hwmt #toc1').animate({
    //             width: '100%',
    //             right: 0
    //         });
    //     });
    //     $('.hwmt #button2').on('click', function() {
    //         $('.hwmt #toc1').animate({
    //             width: 0,
    //             right: 0
    //         });
    //     });
    // }



// if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1199) {
//             $('.hwmt #nav-icon2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: '300px',
//             right: 0
//         });
//     });
//     $('.hwmt #button2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: 0,
//             right: 0
//         });
//     });
//          }


// if (document.documentElement.clientWidth < 767) {
//             $('.hwmt #nav-icon2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: '100%',
//             right: 0
//         });
//     });
//     $('.hwmt #button2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: 0,
//             right: 0
//         });
//     });
//          }

// $(window).resize(function() {
// if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1199) {
//             $('.hwmt #nav-icon2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: '300px',
//             right: 0
//         });
//     });
//     $('.hwmt #button2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: 0,
//             right: 0
//         });
//     });
//          }

// if (document.documentElement.clientWidth < 767) {
//             $('.hwmt #nav-icon2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: '100%',
//             right: 0
//         });
//     });
//     $('.hwmt #button2').on('click', function() {
//         $('.hwmt #toc1').animate({
//             width: 0,
//             right: 0
//         });
//     });
//          }
//          });



if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1199) {
            $('#nav-icon2').on('click', function() {
            $('#toc1').css({"width":"300px","right":"0","transition":"width 0.5s ease-in-out"});
             });
             $('#button2').on('click', function() {
            $('#toc1').css({"width":"0","right":"0","transition":"width 0.5s ease-in-out"});
            });
        }  
         if (document.documentElement.clientWidth < 768) {
            $('#nav-icon2').on('click', function() {
                $('#toc1').css({"width":"100%","right":"0","transition":"width 0.5s ease-in-out"});
            });
            $('#button2').on('click', function() {
                $('#toc1').css({"width":"0","right":"0","transition":"width 0.5s ease-in-out"});
             });
         }
$(window).resize(function() {
 if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth < 1199) {
            $('#nav-icon2').on('click', function() {
            $('#toc1').css({"width":"300px","right":"0","transition":"width 0.5s ease-in-out"});
             });
             $('#button2').on('click', function() {
            $('#toc1').css({"width":"0","right":"0","transition":"width 0.5s ease-in-out"});
            });
        }  
         if (document.documentElement.clientWidth < 768) {
            $('#nav-icon2').on('click', function() {
                $('#toc1').css({"width":"100%","right":"0","transition":"width 0.5s ease-in-out"});
            });
            $('#button2').on('click', function() {
                $('#toc1').css({"width":"0","right":"0","transition":"width 0.5s ease-in-out"});
             });
         }
         });


    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    function slick_dots() {
        var slick_h = $('.hw-hompage-banner').height();
        var th;
        // if (screen.width > 350) {
        th = slick_h + 60;
        // } else {
        //     th = slick_h + 60;
        // }
        $('.hwmt .slick-dots').css('top', th + 'px');
    }
    $(".hw-hero-banner img").one('load', function() {
        setTimeout(slick_dots, 200);
    });
    $(window).resize(function() {
        function slick_resize() {
            var slick_h = $('.hw-hompage-banner').height();
            var th;
            // if (screen.width > 350) {
            th = slick_h + 60;
            // } else {
            //     th = slick_h + 60;
            // }

            $('.hwmt .slick-dots').css('top', th + 'px');
        }
        setTimeout(slick_resize, 1500);
    });
    $('.pf-vertical-header').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    var pf_vh = $('.pf-vh').length;
    for (var i = 1; i <= pf_vh; i++) {
        $('#pvh-' + i).on('click', function() {
            var pvhId = $(this).attr('id');
            var pvhId_sub = pvhId.substring(4, 5);
            for (var j = 1; j <= pf_vh; j++) {
                $('#pvh-' + j).removeClass('pvh-active');
                $('#pvd-' + j).removeClass('pvd-active');
            }
            $('#pvh-' + pvhId_sub).addClass('pvh-active');
            $('#pvd-' + pvhId_sub).addClass('pvd-active');
        });
    }

    $('.pf-dd a').on('click', function() {
        var clickid = $(this).attr('clickid');
        $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        $('html, body').animate({
            scrollTop: '0px'
        });
        if (clickid == "pvh-3") {
            $('.slick-next').trigger('click');
        } else {
            $('.slick-prev').trigger('click');
        }
        $('#' + clickid).trigger('click');
    });

    $(window).load(function() {

        var loc = $(location).attr('href');
        var href = loc.substring(loc.indexOf('#') + 1);
        if (href == "mobility/") {
            $("#pvh-5").trigger('click');
            $('.slick-prev').trigger('click');
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        } else if (href == "DevOps/") {
            $("#pvh-2").trigger('click');
            $('.slick-prev').trigger('click');
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        } else if (href == "DataScience/") {
            $("#pvh-3").trigger('click');
            $('.slick-next').trigger('click');
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        } else if (href == "ui-ux/") {
            $("#pvh-4").trigger('click');
            $('.slick-prev').trigger('click');
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        } else {
            $("#pvh-1").trigger('click');
            $('.slick-prev').trigger('click');
            $('.gsc-results-close-btn.gsc-results-close-btn-visible').trigger('click');
        }
    });

    // $(window).load(function() {
    //     if(pageName == "bootcamp" || pageName == "blog" || pageName == "casestudy" || pageName == "collaborative_workforce" || pageName == "company" || pageName == "job_board" || pageName == "engage_us" || pageName == "navblog_detail" || pageName == "our_thinking"){
    //       $('.pf-dd a').on('click',function(){
    //       $("#pvh5-5").attr("href", "http://127.0.0.1:4000/portfolio/#mobility");
    //       $("#pvh1-1").attr("href", "http://127.0.0.1:4000/portfolio/#DataOps");
    //       $("#pvh2-2").attr("href", "http://127.0.0.1:4000/portfolio/#DevOps");
    //       $("#pvh3-3").attr("href", "http://127.0.0.1:4000/portfolio/#DataScience");
    //       $("#pvh4-4").attr("href", "http://127.0.0.1:4000/portfolio/#ui-ux");
    //        });
    //      }
    //     });
    // var pencilliquid1 = document.querySelector ('#pencil-liquid1');
    //     var myTimeline = new TimelineMax({tweens:
    // [new TweenMax(pencil-liquid1, 0, {x:"0",y:"5px"})], 
    // TweenMax(pencilliquid1, 25, {x:"-11px",y:"91px"}), 
    // TweenMax(pencilliquid1, 0.5, {x:"-11px",y:"91px"}), 
    // TweenMax(pencilliquid1, 0.75, {x:"0",y:"5px"}), 
    // TweenMax(pencilliquid1, 1, {x:"0",y:"5px"})});
    //     TweenMax.to(pencilliquid1, 3, {ease:Linear.easeNone});

    // var timeline = new TimelineMax;
    // timeline.to('#pencil-bubble-1', .3, {
    // x: 240,
    // opacity: 0,
    // ease: Linear.easeIn
    // });
    // timeline.to('#target2', 1.0, {
    //   x: -240,
    //   ease: Quad.easeInOut 
    // });

    $('.carousel-div').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    var tab_count = $('.tab-val').length;
    for (var i = 1; i <= tab_count; i++) {
        $('#tab-' + i).on('click', function() {
            var tabId = $(this).attr('id');
            var tabId_sub = tabId.substring(4, 5);
            for (var j = 1; j <= tab_count; j++) {
                $('#tab-' + j).removeClass('active pvh-active');
                $('#tabContent-' + j).removeClass('active pvd-active');
            }
            $('#tab-' + tabId_sub).addClass('active pvh-active');
            $('#tabContent-' + tabId_sub).addClass('active pvd-active');
        });
    }
    setTimeout(function() {
        var heights = $(".resp-pf .col-20").map(function() {
                return $(this).height();
            }).get(),
            maxHeight_mob = Math.max.apply(null, heights);
        $('.resp-pf .col-20 .hw-work-cont').css({
            height: maxHeight_mob + 'px'
        });
    }, 1000);
    /* end : Mobile code */
    $('.mob-business-value').on('click', function() {
        $('.business-show').removeClass('in');
        $('.business-show').hide();
        $('.mobile-business-show').show();
        $('#mob-nav li').removeClass('active');
        $('#home1').removeClass('active in');
        $('#home2').removeClass('active in');
        $('#home3').removeClass('active in');
        $('#home4').removeClass('active in');
        $('.triangle-up1').hide();
        $('.triangle-up2').hide();
        $('.triangle-up3').hide();
        $('.triangle-up4').hide();
        $('.mob-busval-show').show();
        $('.js-bs-example').show();
    });

    $('.text').on('click', function() {
        var tabId1 = $(this).attr('id');
        var tabId_sub1 = tabId1.substring(6, 7);
        $('.business-show').addClass('in');
        $('.business-show').show();
        $('#js-class' + tabId_sub1).addClass('active');
        $('#home' + tabId_sub1).addClass('active in');
        $('.triangle-up' + tabId_sub1).show();
        $('.mobile-business-show').hide();
        $('.mob-busval-show').hide();
        $('.js-bs-example').hide();
    });

    var tab_count11 = $('.js-com-cls').length;
    for (var i = 1; i <= tab_count11; i++) {
        $('#js-class' + i).on('click', function() {
            var tabId11 = $(this).attr('id');
            var tabId_sub11 = tabId11.substring(8, 9);
            for (var j = 1; j <= tab_count11; j++) {
                $('.triangle-up' + j).hide();
            }
            $('.triangle-up' + tabId_sub11).show();
        });
    }

    $('#check-1').on('click', function() {
        $('#check-1').attr('checked', true);
        $('#check-2').attr('checked', false);
        $('#check-3').attr('checked', false);
    });
    $('#check-2').on('click', function() {
        $('#check-1').attr('checked', false);
        $('#check-2').attr('checked', true);
        $('#check-3').attr('checked', false);
    });
    $('#check-3').on('click', function() {
        $('#check-1').attr('checked', false);
        $('#check-2').attr('checked', false);
        $('#check-3').attr('checked', true);
    });

});
/* Homepage hack */

// $(document).ready(function () {
//   function reorient(e) {
//     var portrait = (window.orientation % 180 == 0);
//     $("body > .hwmt").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
//   }
//   window.onorientationchange = reorient;
//   window.setTimeout(reorient, 0);
// });
$(document).on('orientationchange resize', function(event) {
    if (event.orientation) {
        if (event.orientation == 'landscape') {
            if (window.rotation == 90) {
                rotate(this, -90);
            } else {
                rotate(this, 90);
            }
        }
    }
});

function rotate(el, degs) {
    iedegs = degs / 90;
    if (iedegs < 0) iedegs += 4;
    transform = 'rotate(' + degs + 'deg)';
    iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + iedegs + ')';
    styles = {
        transform: transform,
        '-webkit-transform': transform,
        '-moz-transform': transform,
        '-o-transform': transform,
        filter: iefilter,
        '-ms-filter': iefilter
    };
    $(el).css(styles);
}



// $('.eng-zoom-in').click(function () {
//      var w1=$(".zoomin1 img").width()/$(".zoomin1 img").parent().width() * 100+"%";
//   if(w1<130+"%"){
//   $(".zoomin1 img").animate({
//             width: "+=10%"
//         });
//   }
//    else{
//     $(".zoomin1 img").css("width",w1);
//   }
//    });



// $('.eng-zoom-in1').click(function () {
//   var w=$(".zoomin img").width()/$(".zoomin img").parent().width() * 100+"%";
//   if(w<130+"%"){
//   $(".zoomin img").animate({
//             width: "+=10%"
//         });}
//   else{
//     $(".zoomin img").css("width",w);
//   }
//   });


// $('.eng-zoom-out').click(function () {
// var h1=Math.floor($(".zoomin1 img").width()/ $('.zoomin1 img').parent().width() * 100)+"%";
//   if(h1>100+"%"){
//   $(".zoomin1 img").animate({
//             width: "-=10%"
//         });

// }
//   else{
//     $(".zoomin1 img").css("width",h1);
//   }

// });




// $('.eng-zoom-out1').click(function () {
//   var h=Math.floor($(".js-tab-img").width()/ $('.js-tab-img').parent().width() * 100)+"%";
//   if(h>100+"%"){
//   $(".zoomin img").animate({
//             width: "-=10%"
//         });

// }
//   else{
//     $(".zoomin img").css("width",h);
//   }
//    });
// $("#eng-zoom-out").pinchzoomer();
// if(pageName == "homepage"){

// $("#logo-img img").one('load', function() {
//     setTimeout(logo_img,200);
//   });
// function logo_img(){
//   // $('#logo-img').hide('clip',{direction:"horizontal"},4000);
//   var myDiv = document.getElementById("logo-img");
//   var show = function(){
//     setTimeout(hide, 3000); 
//   }
//   var hide = function(){
//     $('#logo-img').hide();
//     $('#home-screen').css('visibility','visible');
//   }
//   show();
// }
$(window).load(function() {
    $("#logo-img").fadeOut(1000, function() {
        $("#home-screen").fadeIn(1000);
    });
});


var body = document.documentElement;
if (body.requestFullscreen) {
    body.requestFullscreen();
} else if (body.webkitrequestFullscreen) {
    body.webkitrequestFullscreen();
} else if (body.mozrequestFullscreen) {
    body.mozrequestFullscreen();
} else if (body.msrequestFullscreen) {
    body.msrequestFullscreen();
}

$('.hw-upskill-cont').on('click', function() {
    if ($('#page-view').length > 0) {
        // load pageview if this page has #page-view div

        $.ajax({
            url: 'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A128076146&start-date=30daysAgo&end-date=yesterday&metrics=ga%3Apageviews',
            dataType: 'jsonp', // for cross-origin access

            timeout: 1000 * 30, // 30 sec
        });
    }
});
// window.addEventListener("load", function() { window. scrollTo(0, 0); });
// document.addEventListener("touchmove", function(e) { e.preventDefault() });
// var expanded = false;
//     function showCheckboxes() {
//         var checkboxes = document.getElementById("cat");
//         if (!expanded) {
//             checkboxes.style.display = "block";
//             expanded = true;
//         } else {
//             checkboxes.style.display = "none";
//             expanded = false;
//         }
//     }
//      function showCheckboxes1() {
//         var checkboxes1 = document.getElementById("checkboxes1");
//         if (!expanded) {
//             checkboxes1.style.display = "block";
//             expanded = true;
//         } else {
//             checkboxes1.style.display = "none";
//             expanded = false;
//         }
//     }

// if ($(".bootcamp-devops1-checkbox-1").prop('checked')==true){
//   $(".Social-blog-content").each(function(){
//     if($(this).children('.blog-content-wrapper').children('h4').children('.categories-list').children('a').text().toLowerCase().trim()=="dataops"){
//       $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
//     }

//   });
//   }
//   else
//   {
//     $(".Social-blog-content").each(function(){
//     if($(this).children('.blog-content-wrapper').children('h4').children('.categories-list').children('a').text().toLowerCase().trim()=="dataops"){
//       $(this).css("display","none");
//     }
//     });
//   }
//     function function1() {
//   var ul = $(".slick-dots");
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode("play"));
//   li.appendChild(document.createTextNode("pause"));
//   ul.appendChild(li);
// }
// function1();
//     $('.pause').on('click', function() {
//     $('.slider')
//         .slick('slickPause')
//         .slick('slickSetOption', 'pauseOnDotsHover', false);
// });

// $('.play').on('click', function() {
//     $('.slider')
//         .slick('slickPlay')
//         .slick('slickSetOption', 'pauseOnDotsHover', true);
// });
// $('.view-mar').click(function (e) {

//     $('html, body').animate({scrollTop: '0px'});
//     });
// define([ "jquery", "plugins/jquery.panzoom" ], function( $ ) {
//   $(document).ready(function() {
//     $(".img-css").panzoom();
//   });
// });