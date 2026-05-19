function fetchMenu(restaurantid){
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
	  },1000);
	});
}
function fetchUserProfile(userId){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve({
				userId:userId,
				name:"pavatharani",
				address:"TVR"
			});
		},1000);
	});    
}
function fetchPaymentMethod(userId){
	return new Promise((resolve, reject) =>{
		setTimeout(() =>{
           if (Math.random() >0.5){
			   resolve("UPI payment");
			   }
            else{
				reject("Payment failed");
			}
        },1000);
    });
}
const start =Date.now();
Promise.all([
  fetchMenu(1),
  fetchUserProfile(1)
])
.then(([menu,user])=>{
    console.log(menu);
    console.log(user);
    const end =Date.now();
    console.log(
        "Parallel loading time:",
        end-start,
        "ms"
    );
})

.catch((error)=>{
    console.log(error);
});
Promise.allSettled([
 fetchMenu(1),
 fetchUserProfile(1),
 fetchPaymentMethod(1)
])
.then((results) =>{
    results.forEach((result)=>{
		console.log(result);
	});
    const fulfilled=results.filter((result)=>{
		return result.status ==="fulfilled";
    });
    const rejected=results.filter((result)=>{
        return result.status ==="rejected";
    });
    console.log("Fulfilled count:",fulfilled.length);
    console.log("rejected count:",rejected.length);
    rejected.forEach((item)=>{
        console.log("reason:",item.reason);
    });
});
