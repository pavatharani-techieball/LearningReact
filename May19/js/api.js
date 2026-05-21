// export async function fetchUsers(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/users");
//         if(!response.ok){
//             throw new Error("failed");
//         }
//         const data=await response.json();
//         return data;
//     }
//     catch(error){
//         throw error;
//     }
    
// }
export async function addUser(user){
try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    });
    if(!response.ok){
        throw new Error("failed to add user");
    }
    const data=await response.json();
    return data;
} 
catch(error){
    throw error;
}   
}

export function fetchUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{return response.json();
})
.catch((error)=>{
    throw error;
})
}