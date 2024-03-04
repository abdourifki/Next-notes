import { createSlice } from "@reduxjs/toolkit";
import { addNote, deleteNote, fetchNotes, getOneNote, updateNote } from "./noteThunk";


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
            state.error = null;
            state.loading = false;
            state.note = action.payload;
        }).addCase(fetchNotes.rejected, (state, action) => {
            state.error = action.error;
        }).addCase(fetchNotes.pending, (state, action) => {
            state.loading = true});
        
         builder.addCase(getOneNote.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.note = action.payload;
        }).addCase(getOneNote.rejected, (state, action) => {
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