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
    }
  ]





  return (
    <>
      <div className="grid flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:lg-cols-3 items-center justify-center h-fit w-fit gap-1 m-5">

          {
            projects.map((value) => {
              return (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-64">
                  <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl h-64">
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
      </div>

    </>
  )
}

export default Projects

