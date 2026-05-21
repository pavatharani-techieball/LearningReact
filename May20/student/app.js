import { fetchStudents } from "./api.js";
import { debounce } from "./utils.js";
const studentsDiv=document.getElementById("students");
const loading=document.getElementById("loading");
const search=document.getElementById("search");
const filter=document.getElementById("filter");
const sort=document.getElementById("sort");
const form=document.getElementById("studentForm");
const clearAll=document.getElementById("clearAll");
let students=[];
let editId=null;
async function loadStudents(){
    try{
        loading.innerText="loading";
        const localData=JSON.parse(localStorage.getItem("students"));
        if(localData){
            students=localData;
        }
        else{
            students=await fetchStudents();
            localStorage.setItem("students",JSON.stringify(students));

        }
        displayStudents(students);
    }
    catch(error){
        loading.innerText=error.message;
    }
    finally{
        setTimeout(()=>{
            loading.innerText="";
        },1000)
    }
}
function displayStudents(data){
    studentsDiv.innerHTML="";
    console.log(data);   
    if(data.length>0){
    data.forEach((student,index)=>{
        const div=document.createElement("div");
        div.className="card";
        div.innerHTML=`<h3>${student.name}</h3>
                       <p> age:${student.age}</p>
                       <p>gender:${student.gender}</p>
                       <p>marks:${student.marks}</p>
                       <p>email:${student.email}</p>
                       <p>course:${student.course}</p>
                       <button onclick="editStudent(${index})">edit</button>
                       <button onclick="deleteStudent(${index})">delete</button>`;
                       studentsDiv.appendChild(div);
    });
}
}
window.deleteStudent=(index)=>{
    students.splice(index,1);
    localStorage.setItem("students",JSON.stringify(students));
    displayStudents(students);
};
window.editStudent=(index)=>{
    const student=students[index];
    document.getElementById("name").value =student.name;
    document.getElementById("age").value =student.age;
    document.getElementById("gender").value =student.gender;
    document.getElementById("course").value =student.course;
    document.getElementById("email").value =student.email;
    document.getElementById("marks").value =student.marks;
    editId = index;
};
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const age=Number(document.getElementById("age").value);
    const gender=document.getElementById("gender").value;
    const course=document.getElementById("course").value;
    const email=document.getElementById("email").value;
    const marks=Number(document.getElementById("marks").value);
    if(marks <0 || marks >100){
        alert("marks value invalid");
        return;
    }
    if(editId !==null){
    students[editId].name=name;    
    students[editId].age=age;    
    students[editId].gender=gender;    
    students[editId].course=course;
    students[editId].email=email;
    students[editId].marks=marks;
    editId=null;
    }
    else{
        students.push({
            name,
            age,
            gender,
            course,
            email,
            marks
        });
    }
    localStorage.setItem("students",JSON.stringify(students));
    displayStudents(students);
    form.reset();
});
search.addEventListener("input",
    debounce(()=>{
        const value=search.value.toLowerCase();
        const filtered=students.filter((student)=>{
            return(
                student.name.toLowerCase().includes(value) || student.email.toLowerCase().includes(value) || student.course.toLowerCase().includes(value)
            
            );
        })
        displayStudents(filtered);
            
    },500)
);
filter.addEventListener("change",()=>{
    let filtered=[...students];
    if(filter.value=="passed"){
        filtered=students.filter((student)=>{
            return student.marks >=40;  
        });
    }
    if(filter.value=="failed"){
        filtered=students.filter((student)=>{
            return student.marks <40;
        });
    }
    if(filter.value=="topper"){
        filtered=students.filter((student)=>{
            return student.marks >=90;
        });
    }
    displayStudents(filtered);
});
sort.addEventListener("change",()=>{
    let sorted=[...students];
    if(sort.value =="name"){
        sorted.sort((a,b)=>{
            return a.name.localeCompare(b.name);
        });
    }
    if(sort.value=="marks"){
        sorted.sort((a,b)=>{
            return b.marks-a.marks;
        });
    }
    if(sort.value =="age"){
        sorted.sort((a,b)=>{
            return a.age-b.age;
        });
    }
    displayStudents(sorted);
});
clearAll.addEventListener("click",()=>{
    localStorage.removeItem("students");
    students=[];
    displayStudents(students);
});
loadStudents();