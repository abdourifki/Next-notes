"use client";
import { getOneNote, updateNote } from "@/store/notes/noteThunk";
import { AppDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Update({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormdata] = useState({
    title: "",
    description: "",
  });
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log("formData updated :", formData);

    dispatch(updateNote({id: params.id, title:formData.title, description: formData.description}));
   
}

  useEffect(() => {
    const getOneData = async () => {
      const data = await dispatch(getOneNote(params.id));
      console.log(data.payload);
      setFormdata({
        title: data.payload.title,
        description: data.payload.description,
      });
    };

    getOneData();
  }, [params.id]);

  console.log(formData);

  return (
    <>
      {/* {params.id} */}
      <div className="flex items-center justify-center h-screen bg-slate-500 ">
        <div className="bg-gray-900/90 bg-blur w-[50%] rounded-[10px]  ">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-white">Update note</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Note Name
                  </label>
                  <input
                    value={formData.title}
                    onChange={(e) =>
                      setFormdata({ ...formData, title: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    className=" border  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="note"
                    required
                  />
                </div>

                <div className="sm:col-span-2 w-[640] h-[292]">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormdata({...formData, description: e.target.value })
                    }
                    id="description"
                    className="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  >
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US
                  </textarea>
                </div>
              </div>
              <div className="flex items-center space-x-4 ">
                <button
                  type="submit"
                  className="text-black bg-blue-300 rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-blue-500 duration-500"
                >
                  Update note
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
