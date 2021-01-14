import {about} from "./about"
import { home } from "./home"
import { contact} from "./contact"
import  login from "../components/login/login"


export const Layout = () =>{
    if(location.pathname === "/"){
        return login()
    }else if (location.pathname === "/about"){
        return about()
    }else if (location.pathname === "/contacts"){
        return contact()
    }
   
}