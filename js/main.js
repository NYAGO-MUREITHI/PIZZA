function Order(size, price, total, quantity){
  this.size = size;
  this.price = [];
  this.total = total;
  this.quantity = quantity
}
$(document).ready(function(){
  $("button#hwncart").click(function(){
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
