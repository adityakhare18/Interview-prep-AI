// import React from 'react'

// const SkeletonLoader = () => {
//   return (
//     <>
//     <div role='status' class="animate-pulse space-y-4 max-w-3xl">
//         <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2"></div>

//         <div class="space-y-2">
//             <div class='h-3 bg-gray-200 rounded dark:bg-gray-700 w-full'></div>
//             <div class='h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12'></div>
//             <div class='h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12'></div>
//             <div class='h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12'></div>
//         </div>

//         <div class="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
//             <div class="h-2.5 bg-gray-300 rounded w-3/4"></div>
//             <div class="h-2.5 bg-gray-300 rounded w-2/3"></div>
//             <div class="h-2.5 bg-gray-300 rounded w-1/2"></div>
//         </div>


//     </div>
//     </>
//   )
// }

// export default SkeletonLoader


import React from 'react';

const SkeletonLoader = () => {
  return (
    <div
      role="status"
      className="animate-pulse space-y-6 max-w-3xl w-full p-4 border border-gray-200 rounded-lg shadow-md dark:border-gray-700"
    >
      
      <div className="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2"></div>

      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
        <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
        <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
        <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-9/12"></div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 space-y-2">
        <div className="h-2.5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-2.5 bg-gray-300 rounded w-2/3"></div>
        <div className="h-2.5 bg-gray-300 rounded w-1/2"></div>
      </div>

      <div className="h-32 bg-gray-200 rounded-md dark:bg-gray-700 w-full"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonLoader;
