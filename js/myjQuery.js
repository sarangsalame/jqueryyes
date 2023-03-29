// this line will make sure once the document is loaded then only jQuery exicution start
// their are 2 ways to write the same

//1. $(document).ready(function(){})
//2. $(function(){})

$(document).ready(function () {
  // this both jQuery and $ returns a same function we can use any at any place it gives the same result but preferably to use $
  //   console.log(jQuery);
  //   console.log($);

  // this is the syntax of jQuery that says
  // 1. start with $ sign
  // 2. then in paranthesis put a selector(like div, p, h1 etc.)
  // 3. then mention action, action are the methods which we want to use for example: click, hide
  //   $("selector").action();

  // this syntax means on click on p tag exicutes the function
  $("p").click(function () {
    // .hide() hides the element
    // $("p").hide();
    //this keyword refers to the the element which has targeted
    // $(this).hide();
    // there are 3 main type of selectors
    // a. element selector
    // for eg: $("p").click();
    // b. id selector
    // $("#two").hide();
    // c. class selector
    //   for eg: $(".para").hide();
    //other seletor
    //   clicks on all elements
    // $("*").click();
  });

  // events in jquery

  // Mouse Events = click, dbclick, mouseenter, mouseout
  // keyboard = keypress, keydown, keyup
  // forms= submut, change, focus, blur
  // document= load, resize, scroll, unload

  //   $("p").dblclick(function () {
  //     console.log("you double clicked on " + this.TEXT_NODE);
  //   });

  // demo on method
  //   $("p").on("click", function () {
  //     console.log("you clicked on with on method " + this);
  //   });
  //   $("#update").hide(4000, function () {
  //     console.log("hidden");
  //   });
  //   $("#update").show(1000, function () {
  //     console.log("show");
  //   });

  //   $("#btn").click(function () {
  //     $("#update").toggle(3000);
  //   });

  //   fadeIn, fadeOut, fadeToggle, fadeTo
  //   slideup, slidedown
  $("#btn").click(function () {
    // takes 2 args first is speed or time and other is callback fun both are optional
    //fade method
    // $("#update").fadeOut(1000);
    // $("#update").fadeIn(1000);
    // $("#update").fadeToggle(2000);
    // $("#update").fadeTo(2000);
    // Slide method
    // $("#update").slideUp(2000);
    // $("#update").slideDown(2000);
    // $("#update").slideToggle(2000); //slide to toggle
    //Animation
    // second parameter could be time in milsec, fast and slow
    // $("#update").animate(
    //   {
    //     color: "green",

    //     width: "200px",
    //   },
    //   "fast"
    // );
    // $("#update").animate(
    //   {
    //     opacity: 0.7,
    //     width: "300px",
    //   },
    //   4000
    // );
    // Stop the animation
    // $('#update').stop();

    // operation on text
    // console.log($("#update").text("I am sarang"));
    // console.log($("#textarea").val());
    // $("#textarea").val("this is i am appending");
    // $("#textarea").html("setting html");
    // $("#inp").val("setting val");
    // $("#textarea").empty();
    // $("#textarea").remove(); //remove the element
    // document.getElementById("inp").classList.add="newclass1"
    // $("#inp").addClass("newclass");
    // $("#inp").removeClass("newclass");
    // $("#inp").toggleClass("newclass");
    // To add CSS in jQuery
    $("#textarea").css({
      backgroundColor: "grey",
      color: "white",
    });
    // ajax jquery
  });
});
