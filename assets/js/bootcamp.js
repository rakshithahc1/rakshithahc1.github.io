$(document).ready(function(){
// if ($(window).width() > 767 ) {
//   $('.carousel-div').slick('unslick');
//    });

$(document.body).on('click', '.dropdown-menu li', function(event) {
      var $target = $(event.currentTarget);

      $target.closest('.btn-group')
          .find('[data-bind="label"]').text($target.text()).css("color", "black")
          .end()
          .children('.dropdown-toggle').dropdown('toggle');

      return false;

  });
$('.bootcamp-dropdown-list').click(function(e) {
   e.stopPropagation();
});
       // upskilling 

      //filter
        $('.hw-upskilling-filter li').click(function(){
            $('.hw-upskilling-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");

            $('.upskill-cont-filter').each(function(){
              if($(this).hasClass(dataval)) {
                $(this).css({'display':'block'});
              }
              else {
                $(this).css({'display':'none'});
              }
              
            });

        });


      // End of upskilling

      // upskilling-casestudy collapse

        //arrow - toggle rotate
        $('#upskill-accordion .accordion-toggle').click(function(){
          $(this).children().children().children().next().children().children().toggleClass("arrow-rotate");
        });
      // End of upskilling-casestudy collapse

      // service details
        $('.filter').click(function(){
          var dtab = $(this).attr("data-tab");
          
          $('.filter').removeClass('active');
          $(this).addClass('active');

          $('.filter-content').each(function(){
              var dval = $(this).attr("data-value");
              if(dtab == dval) {
                $(this).addClass('active');
              }
              else {
                  $(this).removeClass('active');
              }
          });
        });
      // End of service detials

 // casestudy

      //filter
        $('.hw-casestudy-filter li').click(function(){
          
            $('.hw-casestudy-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");
           
            case_study_filter(dataval);

        });


      var case_study_filter = function(dataval) {
        $('.casestudy-cont-filter').each(function(){
        if($(this).hasClass(dataval)) {
          $(this).css({'display':'block'});
        }
        else {
          $(this).css({'display':'none'});
        }
        });
      }

      // End of casestudy

 /*for filtering in bootcamp*/

var no_of_total_bootcamp_item=0;
$(".upskill-cont-filter").each(function(){
  no_of_total_bootcamp_item++;
      });
$(".bootcamp-filter-total-no").text(no_of_total_bootcamp_item);

function bootcamp_filter_function(){

    $(".no_of_matched_case_item").remove();
    var no_of_matched_item=0;
     if ($(".bootcamp-dataops-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="dataops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="dataops"){
          $(this).css("display","none");
        }
      });
      }

     if ($(".bootcamp-devops-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="devops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="devops"){
          $(this).css("display","none");
        }
      });
      }

      if ($(".bootcamp-datascie-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="data science"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="data science"){
          $(this).css("display","none");
        }
      });
      }

      if ($(".bootcamp-ui-ux-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="ui"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="ui"){
          $(this).css("display","none");
        }
      });
      }
      if ($(".bootcamp-mobility-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="mobility"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="mobility"){
          $(this).css("display","none");
        }
      });
      }
      
      $(".bootcamp-filter-total-no").text(no_of_matched_item+"/"+no_of_total_bootcamp_item);
      if(no_of_matched_item==0)
      $(".hw-upskilling-details ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b;margin-top:40px;margin-bottom:40px"><p>sorry, no match found</p></div>');
}

  $(".bootcamp-mobility-checkbox-1,.bootcamp-client-checkbox-1,.bootcamp-dataops-checkbox-1,.bootcamp-devops-checkbox-1,.bootcamp-datascience-checkbox-1, .bootcamp-ui-ux-checkbox-1").click(function(){
bootcamp_filter_function();
});

  function blog_filter_function(){
  
    $(".no_of_matched_case_item").remove();
    var no_of_matched_item=0;
     if ($(".blog-dataops-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        var s=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s).find('a').text().toLowerCase().trim()=="dataops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        var s=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s).find('a').text().toLowerCase().trim()=="dataops"){
          $(this).css("display","none");
        }
      });
      }

     if ($(".blog-devops-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        var s1=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s1).find('a').text().toLowerCase().trim()=="devops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        var s1=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s1).find('a').text().toLowerCase().trim()=="devops"){
          $(this).css("display","none");
        }
      });
      }

      if ($(".blog-datascience-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        var s2=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s2).find('a').text().toLowerCase().trim()=="data science"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        var s2=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s2).find('a').text().toLowerCase().trim()=="data science"){
          $(this).css("display","none");
        }
      });
      }

      if ($(".blog-ui-ux-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
       var s3=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s3).find('a').text().toLowerCase().trim()=="ui/ux"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        var s3=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s3).find('a').text().toLowerCase().trim()=="ui/ux"){
          $(this).css("display","none");
        }
      });
      }
      if ($(".blog-mobility-checkbox-1").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        var s4=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s4).find('a').text().toLowerCase().trim()=="mobility"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        var s4=$($(this).children('div')[1]).find('h4 span')[1];
        if($(s4).find('a').text().toLowerCase().trim()=="mobility"){
          $(this).css("display","none");
        }
      });
      }
      
      $(".bootcamp-filter-total-no").text(no_of_matched_item+"/"+no_of_total_bootcamp_item);
      if(no_of_matched_item==0)
      $(".hw-upskilling-details ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b;margin-top:40px;margin-bottom:40px"><p>sorry, no match found</p></div>');
}

  $(".blog-mobility-checkbox-1,.blog-client-checkbox-1,.blog-dataops-checkbox-1,.blog-devops-checkbox-1,.blog-datascience-checkbox-1, .blog-ui-ux-checkbox-1").click(function(){
blog_filter_function();
});

// $('.blog-btn-group').click(function(){
//   $('.dropdown-toggle').dropdown('toggle');
// });
// $('.boot-dropdown-menu1').click(function(e){
//   e.stopPropagation();
//   $('.dropdown-toggle').dropdown('toggle');
// });

// $('#bootcamp-dropdown-menu1').click(function(e){
//   e.stopPropagation();
//   $('#dropdown-toggle').dropdown('toggle');
// });
//  $('#bootcamp-dropdown-menu2').click(function(e){
//   e.stopPropagation();
//   $('#dropdown-toggle1').dropdown('toggle');
// });

/*end filtering in bootcamp*/ 

$(function(){
  $(".job-word-wrap").each(function(i){
    len=$(this).text().length;
    if(len>200)
    {
      $(this).text($(this).text().substr(0,200));
    }
    $(this).text($(this).text().substr(0,len));
  });       
});

$('.job-detailed-content').hide();
$('.apply-full-div').hide();
var count = $('.f-option').length;
    for(var i=1; i<=count; i++){

 $('#f-option'+i).on('click',function(){
  var id=$(this).attr('id');
  var sub=id.substring(8);
  for(var j=1; j<=count;j++){
    $('#jd-'+j).hide();
  }
  // if($(this).siblings('#f-option'+sub).prop('checked')===true) {
    
  $('#jd-'+sub).show();
  $('.jobs-tab-header').hide();
  $('.job-board-content').hide();
  $('#pager').hide();
  $('#form-map-div').hide();
  $('.hw-started1').hide();
   $('html, body').animate({scrollTop: '0px'});
  $('.apply-full-div').show();
  // }
 });
 }

$(".devopss-fa-arrow-left").click(function(){
  $('.job-detailed-content').hide();
  $('.jobs-tab-header').show();
  $('.job-board-content').show();
  $('#pager').show();
  $('.hw-started1').show();
  $('.apply-full-div').hide();
 });

// $(function(){
// /*whitepapers Pagination*/
// var paginate = $.fn.paginate({//options here
//     perPage  : 4,//list items per page
//     pageId    : "paginationList", //pagination ul Id
//     pager    : "pager",//pager Id
//     leftImgSrc  : "/assets/img/pager-left.png",
//     rightImgSrc  : "/assets/img/pager-right.png",
//     leftImgActiveSrc : "/assets/img/pager-left-active.png",
//     rightImgActiveSrc : "/assets/img/pager-right-active.png",
//     getCurrentPage : function(currentPage){
//       $(".pageNo").html("Page "+currentPage);
//     }
// });

// });
  $(".devopss-fa-arrow-left1").click(function(){
  window.history.back();
  });

 });

       