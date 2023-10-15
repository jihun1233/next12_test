import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen : false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsOpen(state, action) {
            state.isOpen = action.payload
        },
        toggleIsOpen(state, action){
            state.isOpen = !state.isOpen
        }
    }
    // extraReducers : 페이지 이동 시 상태 초기화가 필요한 경우 추가
})

export const {setIsOpen, toggleIsOpen} = modalSlice.actions;
export const selectModalIsOpen = (state) => state.modal.isOpen
export default modalSlice.reducer;
