export default function Create() {
    return (
      <>
      <div className="flex items-center justify-center h-screen bg-slate-500 ">
        <div className="bg-gray-900/90 bg-blur w-[50%] rounded-[10px]  ">
          <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create note</h2>
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="note" required />
                 
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="date" required /> 
                </div>
                <div className="sm:col-span-2 w-[640] h-[292]">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
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
  