import { createSlice } from "@reduxjs/toolkit";

const initialState={
        name:null,
        email:null,
        profilePic:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser(state,data){
            console.log(data)
            // state = data.payload
            state.email = data.payload.email;
            state.name= data.payload.name;
        },
        logOutUser(state){
            state={
                name:null,
                email:null,
                profilePic:null
            }
        }
    }
})

export const {loginUser,logOutUser} = userSlice.actions
export default userSlice.reducer