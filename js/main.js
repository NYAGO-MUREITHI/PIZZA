function Order(size, price, total, quantity){
  this.size = size;
  this.price = [];
  this.total = total;
  this.quantity = quantity
}
$(document).ready(function(){
  $("button#hwncart").click(function(){
    // vary prices for different sizes with what is selected
    var hwnvalue = $(".hawaiianmenuorder option:selected");
    var hwnsize = hwnvalue.val()
    if(hwnsize === "large"){
      var hwnprice = 1000
    }else if (hwnsize === "medium") {
      var hwnprice = 700
    }else if (hwnsize === "small"){
       var hwnprice = 500
    }else{
      var hwnprice = 0
    }
    //append price according to size chosen
    if(hwnsize === "large"){
      $("#hwnprice").append("<li>" + hwnprice + "</li>" )
    }else if (hwnsize === "medium") {
      $("#hwnprice").append("<li>" + hwnprice + "</li>" )
    }else{
      $("#hwnprice").append("<li>" + hwnprice + "</li>" )
    }
    //fuction to get final price by multiplying the price by quantity
    var hawOrder = new Order(hwnsize)
    hawOrder.price.push(hwnprice)
    var quantity = $(".hawaiianquantity option:selected")
    var newValue = parseInt(quantity.val());
    function quantiFy(){
      return hawOrder.price * newValue
    }
    var result = quantiFy();
    $(".prod1").text(hawOrder.size + " Hawaiian pizza" )
    $(".price1").text( result )

});
$("button#bbqcart").click(function(){
    var value = $(".bbqmenuorder option:selected");
    var size = value.val()
    if(size === "large"){
      var price = 1000
    }else if (size === "medium") {
      var price = 700
    }else if (size === "small"){
       var price = 500
    }else{
       var price = 0
    }
     if(size === "large"){
       $("#bbqprice").append("<li>" + price + "</li>" )
     }else if (size === "medium") {
       $("#bbqprice").append("<li>" + price + "</li>" )
     }else{
       $("#bbqprice").append("<li>" + price + "</li>" )
     }
     var bbqOrder = new Order(size, price)
     bbqOrder.price.push(price)
     var quantity = $(".bbqquantity option:selected")
     var newValue = parseInt(quantity.val());
     function quantiFy(){
       return bbqOrder.price * newValue
     }
     var result = quantiFy();
     $(".prod2").text(bbqOrder.size + " Meatzza pizza")
     $(".price2").text(  result )


});
