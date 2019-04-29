var product =[];
var price= [];
$(".additem").click(function(){
var item=$(".item").val();
var cost= parseInt($(".cost").val());
product.push(item);
price.push(cost);
$(".items").append("<div class=\"flex-items\">" +
"<p>" + item + "</p>" +
"<p>$"+ cost + "</p></div>");
$(".item-account").html(product.length);
var total=0;
price.forEach(function(singlePrice){
total=total+singlePrice;
alert("Thanks For Shopping");
});
$(".total-account").html(total);

});
