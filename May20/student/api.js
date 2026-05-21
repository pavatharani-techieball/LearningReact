export async function fetchStudents(){
    const response = await fetch(
        "http://localhost:8000/students")
    if(!response.ok){
        throw new Error("Failed");
    }
    const data = await response.json();
    return data;
}