export const profileData = (payload) =>{
    return {type: "PROFILE", payload: payload}

}

const token = localStorage.getItem("token")
console.log(token)

export const getProfilekData = () => async(dispatch) =>{

    
    try {
        const response = await fetch("https://greenmentor-2-0hp9.onrender.com/api/users", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        // console.log("Data:", responseData);
        dispatch(profileData(responseData))
        
    } catch (error) {
        console.error("Error:", error);
        // alert("Login first")
       
    }
}
