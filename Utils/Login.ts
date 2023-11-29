// // valid login scenarios
// // 1. Login using valid email and password 
import jsondata from "../TestData/Login.json"
export function ValidLoginPassword(email:string,password:string){
    if(email===jsondata.username && password === jsondata.password){
        return true;
    }
    return false;
}