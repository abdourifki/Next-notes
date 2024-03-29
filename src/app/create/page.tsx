'use client';
import { addNote } from "@/store/notes/noteThunk";
import { AppDispatch } from "@/store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'


export default function Create() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const [formData, setFormData] = useState({
        title: "",
        description: ""
      });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log("formData create :", formData);
    
        dispatch(addNote(formData));
        setFormData({
            title: "",
            description: ""
        })
        router.push('/', { scroll: false })
}


    return (
        <>
            <div className="flex items-center justify-center h-screen bg-slate-500 ">
                <div className="bg-gray-900/90 bg-blur w-[50%] rounded-[10px]  ">
                    <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-white">Create note</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Note Name</label>
                                    <input value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})} type="text" name="name" id="name" className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="note" required />
                                </div>
                                
                                <div className="sm:col-span-2 w-[640] h-[292]">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                                    <textarea value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})} id="description" className="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 ">
                                <button type="submit" className="text-black bg-green-300 rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-green-500 duration-500">
                                    Create note
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
