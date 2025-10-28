import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ?  JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("data create successfully ")      
    },
    updateToPastes: (state,action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >= 0) {
        state.pastes[index] = paste
        localStorage.setItem("Pastes", JSON.stringify(state.pastes))
        toast.success("data updated")
      }
    },

    ResetAllPastes: (state, action) => {
      state.pastes = []
      localStorage.removeItem("Pastes")
    },

    RemoveFromPastes: (state,action) => {
      const pasteId = action.payload
      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("Pastes", JSON.stringify(state.pastes));
        toast.success("data deleted");
      }
    },
  },
})

export const { addToPastes, updateToPastes, ResetAllPastes, RemoveFromPastes} = pasteSlice.actions

export default pasteSlice.reducer
