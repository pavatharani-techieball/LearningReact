function placeOrder(item, user){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(item.price >500){
				reject(new Error("Item price greater than 500"));
			}
			else{
				resolve({
					orderId:101,
					item:item.item,
					user:user.name,
					status:"confirmed"
				});
			}
		},1000);
	});
}
let statusIndex =0;
const statuses =[
	"preparing",
	"picked up",
	"on the way",
	"delivered"
];
function getDeliveryStatus(orderId){
	const currentStatus =statuses[statusIndex];
	if(statusIndex < statuses.length - 1){
		statusIndex++;
	}
	return currentStatus;
}
function pollDelivery(orderId){
	return new Promise((resolve, reject)=>{
		let ticks = 0;
		const intervalId =setInterval(()=>{
			ticks++;
			const status =getDeliveryStatus(orderId);
			console.log("Current Status:",status);
			if(status ==="delivered"){
				clearInterval(intervalId);
				resolve("Delivered");
			}
			if(ticks >=8){
				clearInterval(intervalId);
				reject("Delivery timeout");
			}
		}, 2000);
	});
}
const item ={
	item: "biryani",
	price: 250
};
const user ={
	name: "pavatharani"
};
const start = Date.now();
placeOrder(item, user)
.then((order)=>{
	console.log(order);
	return pollDelivery(order.orderId);
})
.then((message)=>{
	console.log(message);
})
.catch((error)=>{
	console.log("Error:", error);
})
.finally(()=>{
	const end = Date.now();
	console.log(
		"Total  execution Time:",
		end - start,
		"ms"
	);
});