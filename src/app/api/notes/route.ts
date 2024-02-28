
import connexion from '../../../../libs/connectiondb'
import Task from '../../../models/Taskschema';

import { NextResponse } from 'next/server'


export async function POST(request: Request){
    await connexion();
    
    try{ 
        const {title, description}= await request.json();    
        await Task.create({title, description})
        return NextResponse.json({message:"Note Created"},{status:201})
    }catch(err:any){
        return NextResponse.json({message:err.message},{status:400})
    }
}

export async function GET(){
    await connexion();   
    try{ 
       const tasks =await Task.find();
        return NextResponse.json(tasks)
    }catch(err:any){
        return NextResponse.json({message:err.message},{status:400})
    }
}