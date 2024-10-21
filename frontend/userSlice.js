import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: "idle",
    error: null
}

export const createUser = createAsyncThunk(
    "user/createUser",
    async ({ name, email}) => {
        const response = await axios.post("http://localhost:8080/api/user",{
            name,
            email
        });
        return response.data;
    }
)

const Slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state,action){
            state.userId = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state)=>{
                state.status = "loading";
            })

            .addCase(createUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.status = "succeeded";
                state.data.push(action.payload);
                if(action.payload.id){
                    state.userId = action.payload.id;
                }
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default Slice.reducer;