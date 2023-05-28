import { createSlice, configureStore } from '@reduxjs/toolkit';
import { webImgs } from '../../assets/images';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileImage: webImgs.avatarMale,
  },
  reducers: {
    updateProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { updateProfileImage } = profileSlice.actions;
export default profileSlice.reducer;

