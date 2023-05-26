import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: []
}

const loginSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      adduser(state, action) {
         return {
            ...state,
            data: [...state.data, action.payload],
         };
      },
      // ResetPassword(state, action) {
      //    console.log("pass ... reset", state.data.map((item) => {
      //       if (item.Email === action.payload.Email) {
      //          return action.payload;
      //       }
      //       return item
      //    }),)
      //    return {
      //       ...state
      //    }
      // }
      updatePassword: (state, action) => {
         const { phoneNumber, password } = action.payload;
         const userIndex = state.data.findIndex((user) => user.Number === phoneNumber);
         if (userIndex !== -1) {
           state.data[userIndex].Password = password;
         }
       },

       updateUserDetails(state, action) {
         const { FirstName, LastName, Email, PhoneNum, Address } = action.payload;
         const user = state.data[0];

         const updatedUser = {
            ...user,
            firstName: FirstName,
                lastName: LastName,
                email: Email,
                contactNumber: PhoneNum,
                city: Address,
         };
         console.log(updatedUser, 'myLog');
         console.log(state);
         let data = [...state.data];
         let userDetail = { ...data[0] };
         let finalData = { ...userDetail, ...updatedUser };
         data[0] = { ...finalData };
         return { ...state, data };
      },

   }
})

export const { adduser, updatePassword, updateUserDetails } = loginSlice.actions;
export default loginSlice.reducer;