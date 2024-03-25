const handelLoginReq = () => {
  return { type: "LOGIN_REQUEST" }

}

const handelLoginSuc = (payload) => {
  return { type: "LOGIN_SUCCESS", payload: payload }

}

const handelLoginFai = () => {
  return { type: "LOGIN_FAILURE" }

}

export const handelPostLogin = (data) => async (dispatch) => {
  dispatch(handelLoginReq())
  try {
      const response = await fetch("https://greenmentor-2-0hp9.onrender.com/api/login", {
          method: "POST", // or 'PUT'
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      var res = await response.json();
      localStorage.setItem("token", res.token)
      console.log("Success:", res);
      dispatch(handelLoginSuc(res.token))
      alert("Login Successful")

  } catch (error) {
      console.error("Error:", error);
      dispatch(handelLoginFai())
      alert("Enter correct email password")

  }
}

// Log out

const hadelLogut = () =>{
  return{type: "LOGOUT",  }
}
export const logoutFun = () => (dispatch) => {

  dispatch(hadelLogut())
  localStorage.removeItem('token');
  alert("Logout Successful")
  
  
};