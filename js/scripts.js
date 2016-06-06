// var testArray = [0];
// var test1 = [$(".person1"), $(".person2")];
var test1 = [];
var test2 = [];

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var items = ["item1","item2","item3","item4","item5","item6",];

    items.forEach(function(item){
      var userInput = $("input#" + item).val();
      $("." + item).append(userInput);
    });

    // var a1 = $("#item1").val();
    // var a2 = $("#item2").val();
    // var a3 = $("#item3").val();
    // var a4 = $("#item4").val();
    // var a5 = $("#item5").val();
    // var a6 = $("#item6").val();
    // test1= [a1,a2,a3,a4,a5,a6];
    // test2= (test1[0]);
    // $(".item1").append(test1[0]);
    // $(".item2").append(test1[1]);
    // $(".item3").append(test1[2]);
    // $(".item4").append(test1[3]);
    // $(".item5").append(test1[4]);
    // $(".item6").append(test1[5]);




    // var part1=test1[1];
    // var part2=test1[0];
    // var part3=test1[2];
    // test1=(part1 + part2 + part3);
    // var test2 = [(test1[0])];

    // 2 1 3

// Want to display arrays on page... Not enough JS chops yet.
// function displayArrays() {
//     var output1 = document.getElementByID("arrayTest1").innerHTML = test1;
//     var output2 = document.getElementByID("arrayTest2").innerHTML = test2;
// }

    $("#reveal").show();
    // var p1=t
    // var allInput = [item1, item2, item3, item4, item5, item6];
    // alert(allInput);

  });
});
