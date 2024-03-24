const handelLoginReq = () =>{
    return{type : "LOGIN_REQUEST"}

}

const handelLoginSuc = (payload) =>{
    return{type : "LOGIN_SUCCESS" , payload:payload}

}

const handelLoginFai = () =>{
    return{type : "LOGIN_FAILURE"}

}

export const handelPostLogin = (data) => async(dispatch) =>{
    dispatch(handelLoginReq())
    try {
        const response = await fetch("https://greenmentor-2-0hp9.onrender.com/api/login", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        console.log("Success:", result);
        dispatch(handelLoginSuc(result.token))
        
        alert("Login Successful")
        if (result.token){
            localStorage.setItem("token" , result.token)
        }
      } catch (error) {
        console.error("Error:", error);
        dispatch(handelLoginFai())
        alert("plz login")
        
      }
}

