const rawOrder={
	id:1,
	item:"biryani",
	qty:2,
	userId:42
};
function fetchRestaurant(id){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(!id){
				reject("id is missing");
			}
			else{
			  resolve({
					id:id,
					name:"a2b",
				    cuisine:"south indian"
				});
			}
		},1000);
	});
}
function fetchMenu(restaurantId){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve([
			{
				item:"biriyani",
			    price:250
			},
			{
			    item:"chappati",
				price:120
			},
			{
				item:"dosa",
				price:100
			}
			]);
		},800);
	});
}
function fetchUserprofile(userId){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve({
				userId:userId,
				name:"pavatharani",
				address:"TVR"
			});
		},600);
	});
}
function placeOrder(item,user){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(item.price >500){
				reject("item price is greater than 500");
			}
			else{
				resolve({
					orderId:101,
					item:item.item,
					user:user.name,
					status:"confirmed"
				});
			}
		},500);
	});
}
let chosenitem;
fetchRestaurant(1)
.then((restaurant)=>{
	console.log(restaurant);
	return fetchMenu(restaurant.id);
})
.then((menu)=>{
	console.log(menu);
	chosenitem=menu[0];
	return fetchUserprofile(rawOrder.userId);
})
.then((user)=>{
	console.log(user);
	return placeOrder(chosenitem,user);
})
.then((order)=>{
	console.log(order);
})
.catch((err)=>{
	console.error("order failed:",err.message);
})
.finally(()=>{
	console.log("chain complete");
	
});