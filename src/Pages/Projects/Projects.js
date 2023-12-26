import React from 'react'

function Projects() {


  let projects = [
    {
      id: "01",
      prjectName: "News App",
      description: "An Api based project with using only react js and external api that can fetch the some of current news.In here The NewsApi.org website's API is used for the real time news data.It shows the news with the tumbnail and Read more option from that option the user can redirect to the official source of the news",
      TechStack: "React js, API",
      Url: ""

    },
    {
      id: "02",
      prjectName: "E commerce Website",
      description: " Developed a project with  React Js as Frontend with React Hooks and some packages like axios,formik,react-bootstrap.Node Js is used as backend with some packages like express for server creation multer for file handeling , mongoose for connection with databse and aws-sdk for connect with AWS. MongoDB is used for the databse to store user or the product data and AWS S3 Bucket is used for the image storage",
      TechStack: "React Js,Node Js,MongoDb, AWS",
      Url: "hjkd"
    },
    {
      id: "03",
      prjectName: "Brain tumor detection using deep learning",
      description: " A deep learning project using the YOLO object detection model that is trained in the Brain Tumor dataset. Here the YOLO v8 is used.The model is trained upto 100 epochs that can give quite good accuracy.",
      TechStack: "ultralytics,pandas,numpy,matplotlib,OpenCv",
      Url: "https://colab.research.google.com/drive/1KFyT1cqoDqs7Ojc97RXoa6oHwdBbpnxY?usp=sharing"
    },
    {
      id: "03",
      prjectName: "Brain tumor detection using deep learning",
      description: " A deep learning project using the YOLO object detection model that is trained in the Brain Tumor dataset. Here the YOLO v8 is used.The model is trained upto 100 epochs that can give quite good accuracy.",
      TechStack: "ultralytics,pandas,numpy,matplotlib,OpenCv",
      Url: "https://colab.research.google.com/drive/1KFyT1cqoDqs7Ojc97RXoa6oHwdBbpnxY?usp=sharing"
    },
    {
      id: "03",
      prjectName: "Brain tumor detection using deep learning",
      description: " A deep learning project using the YOLO object detection model that is trained in the Brain Tumor dataset. Here the YOLO v8 is used.The model is trained upto 100 epochs that can give quite good accuracy.",
      TechStack: "ultralytics,pandas,numpy,matplotlib,OpenCv",
      Url: "https://colab.research.google.com/drive/1KFyT1cqoDqs7Ojc97RXoa6oHwdBbpnxY?usp=sharing"
    }

  ]





  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:lg-cols-3 items-center justify-center h-screen overflow-auto mt-5">

      {
  projects.map((value) => {
    return (
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">{value.prjectName}</h1>
          <p class="my-4 text-center text-sm text-gray-500">Woah, successfully completed 3/5 Tasks</p>
          <div class="space-x-4 bg-gray-100 py-4 text-center">
            <button class="inline-block rounded-md bg-green-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Live URL</button>
            <button class="inline-block rounded-md bg-blue-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">About</button>
          </div>
        </div>
      </div>
      
      
    )
  })
}
        
      </div>

    </>
  )
}

export default Projects






{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
</a>
<div class="p-5">
  <a href="#">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  </a>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Read more
    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
  </a>
</div>
</div> */}





// map card


// {
//   projects.map((value) => {
//     return (
//       <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
//         <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
//           <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">{value.prjectName}</h1>
//           <p class="my-4 text-center text-sm text-gray-500">Woah, successfully completed 3/5 Tasks</p>
//           <div class="space-x-4 bg-gray-100 py-4 text-center">
//             <button class="inline-block rounded-md bg-green-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Live URL</button>
//             <button class="inline-block rounded-md bg-blue-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">About</button>
//           </div>
//         </div>
//       </div>
      
      
//     )
//   })
// }



//grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:lg-cols-2 gap-y-3 gap-x-1
