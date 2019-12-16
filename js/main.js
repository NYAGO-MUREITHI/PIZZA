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
  $("button#vegcart").click(function(){
    var vegvalue = $(".vegmenuorder option:selected");
    var vegsize = vegvalue.val()
    if(vegsize === "large"){
      var vegprice = 1000
    }else if (vegsize === "medium") {
      var vegprice = 700
    }else if (vegsize === "small"){
      var vegprice = 500
    }else{
      var vegprice = 0
    }
    if(vegsize === "large"){
      $("#vegprice").append("<li>" + vegprice + "</li>" )
    }else if (vegsize === "medium") {
      $("#vegprice").append("<li>" + vegprice + "</li>" )
    }else{
      $("#vegprice").append("<li>" + vegprice + "</li>" )
    }
    var vegOrder = new Order(vegsize, vegprice)
    vegOrder.price.push(vegprice)
    var quantity = $(".veggiequantity option:selected")
    var newValue = parseInt(quantity.val());
    function quantiFy(){
      return vegOrder.price * newValue
    }
    var result = quantiFy();
    $(".prod3").text(vegOrder.size + " Veggie pizza")


    $(".price3").text( result )


  });
  $("button#margcart").click(function(){
    var margvalue = $(".margmenuorder option:selected");
    var margsize = margvalue.val()
    if(margsize === "large"){
      var margprice = 1000
    }else if (margsize === "medium") {
      var margprice = 700
    }else if (margsize === "small"){
      var margprice = 500
    }else{
      var margprice = 0
    }
    if(margsize === "large"){
      $("#marprice").append("<li>" + margprice + "</li>" )
    }else if (margsize === "medium") {
      $("#marprice").append("<li>" + margprice + "</li>" )
    }else{
      $("#marprice").append("<li>" + margprice + "</li>" )
    }
    var marOrder = new Order(margsize, margprice)
    marOrder.price.push(margprice)
    var quantity = $(".margaquantity option:selected")
    var newValue = parseInt(quantity.val());
    function quantiFy(){
      return marOrder.price * newValue
    }
    var result = quantiFy();
    $(".prod4").text(marOrder.size + " Margarita pizza")
    $(".price4").text( result )
  });
  $("button#checkout").click(function(){
    var hwnvalue = $(".hawaiianmenuorder option:selected");
    var value = $(".bbqmenuorder option:selected");
    var vegvalue = $(".vegmenuorder option:selected");
    var margvalue = $(".margmenuorder option:selected");
    if (hwnvalue.val() === "" && value.val() === "" && vegvalue.val() === "" && margvalue.val() === "" ){
      alert("PLEASE SELECT PIZZA")
    }
    $(".final-order").fadeIn();
  });
  $("button#finish").click(function(){
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
    var hawOrder = new Order(hwnsize)
    hawOrder.price.push(hwnprice)
    var quantity = $(".hawaiianquantity option:selected")
    var newValue = parseInt(quantity.val());
    function hawquantiFy(){
      return hawOrder.price * newValue
    }
    var hawresult = hawquantiFy();
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
    var bbqOrder = new Order(size, price)
    bbqOrder.price.push(price)
    var quantity = $(".bbqquantity option:selected")
    var newValue = parseInt(quantity.val());
    function bbqquantiFy(){
      return bbqOrder.price * newValue
    }
    var bbqresult = bbqquantiFy();
    var vegvalue = $(".vegmenuorder option:selected");
    var vegsize = vegvalue.val()
    if(vegsize === "large"){
      var vegprice = 1000
    }else if (vegsize === "medium") {
      var vegprice = 700
    }else if (vegsize === "small"){
      var vegprice = 500
    }else{
      var vegprice = 0
    }
    var vegOrder = new Order(vegsize, vegprice)
    vegOrder.price.push(vegprice)
    var quantity = $(".veggiequantity option:selected")
    var newValue = parseInt(quantity.val());
    function vegquantiFy(){
      return vegOrder.price * newValue
    }
    var vegresult = vegquantiFy();
    var margvalue = $(".margmenuorder option:selected");
    var margsize = margvalue.val()
    if(margsize === "large"){
      var margprice = 1000
    }else if (margsize === "medium") {
      var margprice = 700
    }else if (margsize === "small"){
      var margprice = 500
    }else{
      var margprice = 0
    }
    var marOrder = new Order(margsize, margprice)
    marOrder.price.push(margprice)
    var quantity = $(".margaquantity option:selected")
    var newValue = parseInt(quantity.val());
    function margquantiFy(){
      return marOrder.price * newValue
    }
    var margresult = margquantiFy()
    function addTotal(hawresult,bbqresult,vegresult,margresult){
      return parseInt(hawresult) + parseInt(bbqresult) + parseInt(vegresult) + parseInt(margresult)
    }
    var result = addTotal(hawresult,bbqresult,vegresult,margresult)
    if (document.getElementById("delivery").checked) {
      var result2 = result + 200;
      $(".price").text(result2);
      var address = prompt("PLEASE ENTER DELIVERY ADDRESS")
      var contact = prompt("PLEASE ENTER PHONE NUMBER")
      alert("OUR RIDER WILL BE IN TOUCH WITH YOU SOON")
    }else{
      $(".price").text(result)
      alert("OUR STORES ARE OPEN FROM 9:00AM - 10:00PM")
    }


  });
  $("#close").click(function(){
    $(".final-order").fadeOut()
  })
});
