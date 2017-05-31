var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider   .state('404', {
        url:'/404' ,
        templateUrl: 'ErrorPage.html',
    });
    $stateProvider   .state('home', {
        url:'/home' ,
        templateUrl: 'HomePage.html',
    });
    $stateProvider  .state('create', {
        url:'/create' ,
        templateUrl: 'CreateItem.html',
    });
    $stateProvider  .state('error', {
        url: '/404',
        templateUrl: 'error-404.html'
    });
    $stateProvider  .state('detail', {
        url:'/detail' ,
        templateUrl: 'DetailItem.html',
    });
    $stateProvider  .state('search', {
        url:'/search' ,
        templateUrl: 'Result.html',
    });
    $stateProvider  .state('resultfail', {
        url:'/error' ,
        templateUrl: 'ResultFail.html',
    });
});


var curIndex = 0;

function showImage(images, maxIndex, index) {
  if (index > maxIndex - 1) {
    index = index - maxIndex;
  }
  if (index < 0) {
    index = maxIndex + index;
  }
  images[index].style.display = "block";
}

function showSlider(index) {
  var images = document.getElementsByClassName("sub_container");
  var maxIndex = images.length;

  if (index > maxIndex - 1) {
    index = 0;
  }
  if (index < 0) {
    index = maxIndex - 1
  }

  if (index >=0 && index <= maxIndex - 6) {
    curIndex = index; 
    
    for (i = 0; i < maxIndex; i++) {
      images[i].style.display = "none";
    }

    for (i = 0; i < 6; i++) {
      showImage(images, maxIndex, curIndex + i);
    }
  }
}

function slideBack() {
  showSlider(curIndex - 1);
}

function slideNext() {
  showSlider(curIndex + 1);
}
var flg = "1";
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
    if(flg == "2"){
        location.reload();
    }

});

var headerHeight = $("#navbar").height();
$("#main-container").css("margin-top", headerHeight);
$( window ).resize(function() {
    var headerHeight = $("#navbar").height();
    $("#main-container").css("margin-top", headerHeight);
});

$("#search_panel").keyup(function(event){
    if(event.keyCode == 13){
        $("#search_button").click();
    }
});

$("#btnLoc").click(function () {
    window.location.replace("/QST/#/search");
});


$("#search_button").click(function () {
    var x = $("#search_panel").val();
    x = x.toLowerCase();
    if(  x == "samsung" || x == "sam sung"){
        window.location.replace("/QST/#/search");
    }
    else {
        window.location.replace("/QST/#/error");
    }
});
