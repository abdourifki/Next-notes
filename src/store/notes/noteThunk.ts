import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNotes = createAsyncThunk('notes/getAllNotes',
 async (_:any, thunkAPI)=>{
    try{
        const response = await fetch('url')
        const data = await response.json()
        return data;
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});

export const addNote = createAsyncThunk('notes/addNote',
 async (credentials:{
    title:string,description:string},thunkAPI)=>{
    try{
       const res = await fetch("",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:credentials.title,
            description:credentials.description
        })
    })
    const data = await res.json()
    return data;
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});


export const updateNote = createAsyncThunk('notes/updateNote',
 async (credentials:{id:string,
    title:string,description:string},thunkAPI)=>{
    try{
       const res = await fetch("",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:credentials.title,
            description:credentials.description
        })
    })
    const data = await res.json()
    return data;
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});


export const deleteNote = createAsyncThunk('notes/deleteNote',
 async (credentials:{id:string,
    },thunkAPI)=>{
    try{
       const res = await fetch("",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },      
    })
    const data = await res.json()
    return data;
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});
