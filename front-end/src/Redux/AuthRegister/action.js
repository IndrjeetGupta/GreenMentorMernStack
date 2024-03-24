export const registerPostData = () =>{
    return {type: "REGISTER"}

}

export const handelPostRegi = (data) => async(dispatch) =>{
    try {
        const response = await fetch("https://greenmentor-2-0hp9.onrender.com/api/register", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        console.log("Success:", result);
        dispatch(registerPostData())
        alert("Registration Successful")
      } catch (error) {
        console.error("Error:", error);
        throw("errr")
      }
}