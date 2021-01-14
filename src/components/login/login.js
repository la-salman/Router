import {createElement} from  "../../react/index";
import logo from "../../../src/netflix-bg.jpg";
import brand from "../../../src/logo.png"
import fbPic from "../../../src/fb-logo.png"
import {footer} from "../footer"


let Login = ()=> {
  let loginContainer=createElement("div", {class: "container-wrapper"},createElement("div", {class: "img-container",style:`background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${logo});min-height:100vh`},
                      createElement("div", {class: "container"}, createElement("img", {src:brand, class: "brand"}),createElement("div",{class: "wrapper-form"},
                      createElement("form", {class: "form"}, createElement("div", {class: "form-container"}, 
                      createElement("h1", {class: "heading-form"}, "Sign In"),createElement("input", {placeholder: "Email Or Phone number", class:"field-input",type: "text"}),
                      createElement("input", {placeholder: "pasword", class:"field-input",type: "password"})),
                      createElement("button",{class: "btn-form",},"Sign Up"),createElement("input", {type: "checkbox", class: "checkbox"}),
                      createElement("label",null, "Remember Me"),createElement("label",{class: "label-need"}, "Need help?")),
                      createElement("span",null,createElement("img", {src:fbPic, class: "img-fb"}), createElement("a",{class: "label-img"},"Login With Facebook")),
                      createElement("span",{class: "signNow"}, "New to Netflix?  Sign up Now" ),
                      createElement("p", {class: "last-p"}, "This page is protected by Google reCAPTCHA to <br>ensure you're not a bot."),
                      )),footer()
                      
                      )
                      
  )                               


return loginContainer;
}

// practice purposes**********************

// let Login = ()=> {
//   let loginContainer=createElement("div", {class: "container-wrapper"},createElement("div", {class: "img-container",style:`background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${logo});min-height:100vh`},
//                       createElement("div", {class: "container"}, createElement("img", {src:brand, class: "brand"}),createElement("div",{class: "wrapper-form"},
//                       createElement("form", {class: "form"}, createElement("div", {class: "form-container"}, 
//                       createElement("h1", {class: "heading-form"}, "Sign In"),createElement("input", {placeholder: "Email Or Phone number", class:"field-input",type: "text"}),
//                       createElement("input", {placeholder: "pasword", class:"field-input",type: "password"}),createElement("button",{class: "btn-form",},"Sign Up"),
//                       createElement("input", {type: "checkbox", class: "checkbox"}),createElement("label",null, "Remember Me"),createElement("label",{class: "label-need"}, "Need help?")),
                      
//                       ),
//                       )),footer()
                      
//                       )
                      
//   )                               


// return loginContainer;
// }




export default Login;









