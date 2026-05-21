import User from "./user.js";
import { fetchUsers,addUser } from "./api.js";
const userContainer=document.getElementById("userContainer");
const loading=document.getElementById("loading");
const userForm=document.getElementById("userForm");
const searchInput=document.getElementById("searchInput");
let users=[];
async function loadUsers(){
    loading.innerText="loading users";
    try{
        const data=await fetchUsers();
        users = data.map((item)=>{
            return new User(
                item.id,
                item.name,
                item.email,
                item.company.name
            );
        });

        displayUsers(users);
    }
    catch(error){
        loading.innerText=error.message;
    }
    finally{
        loading.innerText="";
    }
}
function displayUsers(userList){
    userContainer.innerHTML="";
    userList.forEach((user,index)=>{
        const div=document.createElement("div");
        div.className = "card";
        div.innerHTML=`
        ${user.displayUser()}
        <button
            class="deletebtn"
            value="${index}"> Delete
            </button>
        `;
     userContainer.appendChild(div);
    });
const deleteButton=
document.querySelectorAll(".deletebtn");
deleteButton.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        const index =
                e.target.value;
        users.splice(index,1);
        displayUsers(users);
    });
});
}
userForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const company=document.getElementById("company").value;
    const newUser={
        name,
        email,
        company:{
            name:company
        }
    };
    try{
        const data=await addUser(newUser);
        const user=new User(
            data.id,
            data.name,
            data.email,
            data.company.name
        );
        users.push(user);
        displayUsers(users);
        userForm.reset();
    }
    catch(error){
        alert(error.message);
    }
});
searchInput.addEventListener("input",()=>{
    const value =
    searchInput.value.toLowerCase();
    const filteredUsers =
    users.filter((user)=>{
        return user.name
        .toLowerCase()
        .includes(value);
    });
    displayUsers(filteredUsers);
});
loadUsers();