import Link from 'next/link';
import Create from "./create/page";
import axios from 'axios';


export default function Home() {
  return (
    <>
      <div className=" h-screen bg-slate-500 ">
       
          <h1 className="font-bold text-3xl ml-28 pt-8">Notes</h1>
        
        <div className="mx-auto container py-10 px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="rounded">
              {/* create new note */}
              <div className="w-full h-64 flex flex-col justify-center items-center dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
               
                <Link href="/create"  className="w-24 h-24 rounded-full justify-center dark:text-gray-800 text-white flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-300  focus:ring-black hover:bg-green-500 duration-500" aria-label="create note" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>

                </Link>
                
              </div>

              {/* map */}
              <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  {/* title */}
                  <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">13 things to work on</h4>
                  {/* description */}
                  <p className="text-gray-800 dark:text-gray-100 text-sm">Our interior design experts work with you to create the space that you have been dreaming about.</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                    {/* date */}
                    <p className="text-sm">March 28, 2020</p>
                    {/* div des buttons */}
                    <div className="flex items-center ">
                      {/* button delete */}
                      <button className="w-8 h-8 rounded-full bg-red-300 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black hover:bg-red-500 duration-500" aria-label="delete note" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {/* button edite */}
                      <Link href={`/${1}`}>
                      <button className="ml-5 w-8 h-8 rounded-full bg-blue-300 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black hover:bg-blue-500 duration-500" aria-label="edit note" role="button" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                        </svg>

                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
