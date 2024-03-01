import {  NextResponse } from 'next/server';
import connexion from '../../../../../libs/connectiondb'
import Task from '../../../../models/Taskschema';


export async function GET(request:Request, {params} :{params:{id:string}}){
    try{

        const {id}=params;
        await connexion();
        const task=await Task.findOne({_id: id});
        return NextResponse.json(task,{status: 200})
    }catch(error){
        return NextResponse.json({error},{status: 500})
    }}

export async function PUT(request:Request, {params} :{params:{id:string}}){
 try{
    const {id}= params;
    const { title, description } = await request.json();
    await connexion();
    const newTask = await Task.findOneAndUpdate({_id:id},{title,description})
    return NextResponse.json({ newTask,message: "Note Updated"},{status: 200});

 }catch(error){
   return NextResponse.json({error},{status: 500})
 }
}    

export async function DELETE(request:Request, {params} :{params:{id:string}}){
    try{
       const {id}= params;
       await connexion();
       const newTask = await Task.findOneAndDelete({_id:id})
       return NextResponse.json({ message: "Note Deleted"},{status: 200});
   
    }catch(error){
      return NextResponse.json({error},{status: 500})
    }
   }    