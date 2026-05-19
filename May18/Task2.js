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
			if(item.price > 500){
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
fetchRestaurant(1)
.then((data)=>{
	console.log(data);
})
.catch((error)=>{
	console.log(error);
});
fetchMenu(1)
.then((menu)=>{
	console.log(menu);
})
.catch((error)=>{
	console.log(error);
});
fetchUserprofile(42)
.then((user)=>{
	console.log(user);
})
.catch((error)=>{
	console.log(error);
});
const item={
	item:"biryani",
	price:250
};
const user={
	name:"pavatharani"
};
placeOrder(item,user)
.then((order)=>{
	console.log(order);
})
.catch((error)=>{
	console.log(error);
});