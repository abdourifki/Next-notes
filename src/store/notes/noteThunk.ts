import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNotes = createAsyncThunk('notes/getAllNotes',
 async (_, thunkAPI)=>{
    try{
        const response = await fetch('http://localhost:3000/api/notes')
        const data = await response.json()
        return data;
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});
export const getOneNote = createAsyncThunk('notes/getOneNote',
 async (id:string,thunkAPI)=>{
    try{
       const res = await fetch(`http://localhost:3000/api/notes/${id}`,{
        method:"GET",
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

export const addNote = createAsyncThunk('notes/addNote',
 async (credentials:{
    title:string,description:string},thunkAPI)=>{
        console.log(
            "credentials" , credentials
        );
        
    try{
       const res = await fetch("http://localhost:3000/api/notes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(credentials)
    })
    
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});


export const updateNote = createAsyncThunk('notes/updateNote',
 async (credentials:{id:string,
    title:string,description:string},thunkAPI)=>{
    try{
       const res = await fetch(`http://localhost:3000/api/notes/${credentials.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:credentials.title,
            description:credentials.description
        })
    })
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});


export const deleteNote = createAsyncThunk('notes/deleteNote',
 async (credentials:{id:string,
    },thunkAPI)=>{
    try{
       const res = await fetch(`http://localhost:3000/api/notes/${credentials.id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },      
    })
    
    }catch(error){
        const message = (error as Error).message
       return thunkAPI.rejectWithValue(message);
    }
});
