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
    if(hwnsize === "large"){
      $("#hwnprice").append("<li>" + hwnprice + "</li>" )
    }else if (hwnsize === "medium") {
      $("#hwnprice").append("<li>" + hwnprice + "</li>" )
    }else{
      $("#hwnprice").append("<li>" + hwnprice + "</li>" )
    }
