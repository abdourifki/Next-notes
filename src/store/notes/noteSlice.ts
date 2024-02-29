import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote, fetchNotes, updateNote } from "./noteThunk";


const initialState ={
   loading : false,
   error: null,
   note:null
} as any;

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchNotes.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.note = action.payload;
        }).addCase(fetchNotes.rejected, (state, action) => {
            state.error = action.error;
        });
        builder.addCase(addNote.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.note = action.payload;
        }).addCase(addNote.rejected, (state, action) => {
            state.error = action.error;
        });
        builder.addCase(updateNote.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.note = action.payload;
        }).addCase(updateNote.rejected, (state, action) => {
            state.error = action.error;
        });
        builder.addCase(deleteNote.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.note = action.payload;
        }).addCase(deleteNote.rejected, (state, action) => {
            state.error = action.error;
        });
    }});
     
export default noteSlice;