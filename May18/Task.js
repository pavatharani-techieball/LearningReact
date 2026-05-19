const rawOrder={
id:1,
item:"biriyani",
qty:2,
userId:42
};
function ValidateOrder(order){
if(!order.id){
  throw new Error("id is missing");
}
if(!order.item){
  throw new Error("item is missing");
}
if(!order.qty){
  throw new Error("qty is missing");
}
return true;
}
try{
ValidateOrder(rawOrder);
console.log("valid order");
}
catch(error){
console.log(error.message);    
}