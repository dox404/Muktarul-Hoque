import React, { useState } from 'react'
import Modal from '../../Components/Modal/Modal'
function Projects() {
  const [showModal, setShowModal] = useState(false)
  const[tempData,setTempData]=useState([])
  let projects = [
    {
      id: "01",
      prjectName: "News App",
      description: "An Api based project with using only react js and external api that can fetch the some of current news.In here The NewsApi.org website's API is used for the real time news data.It shows the news with the tumbnail and Read more option from that option the user can redirect to the official source of the news",
      TechStack: "React js, API",
      Url: "This is the live url for news App"

    },
    {
      id: "02",
      prjectName: "E commerce Website",
      description: " Developed a project with  React Js as Frontend with React Hooks and some packages like axios,formik,react-bootstrap.Node Js is used as backend with some packages like express for server creation multer for file handeling , mongoose for connection with databse and aws-sdk for connect with AWS. MongoDB is used for the databse to store user or the product data and AWS S3 Bucket is used for the image storage",
      TechStack: "React Js,Node Js,MongoDb, AWS",
      Url: "This is live url for e commerce"
    },
    {
      id: "03",
      prjectName: "Brain tumor detection using deep learning",
      description: " A deep learning project using the YOLO object detection model that is trained in the Brain Tumor dataset. Here the YOLO v8 is used.The model is trained upto 100 epochs that can give quite good accuracy.",
      TechStack: "ultralytics,pandas,numpy,matplotlib,OpenCv",
      Url: "https://colab.research.google.com/drive/1KFyT1cqoDqs7Ojc97RXoa6oHwdBbpnxY?usp=sharing"
    }
  ]




  const getData=(prjectName,TechStack,description,Url)=>{
    let tempData=[prjectName,TechStack,description,Url]
    // console.log(tempData)
    setTempData([1,...tempData])
    setShowModal(true)
  }

  return (
    <>
    <Modal isVisible={showModal} onClose={() => setShowModal(false)} prjectName={tempData[1]} TechStack={tempData[2]} description={tempData[3]} Url={tempData[4]}/>
      
      <div className="grid flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:lg-cols-3 items-center justify-center h-fit w-fit gap-1 m-5">

          {
            projects.map((value) => {
              
              return (
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-64">
                  <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl h-64">
                    <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">{value.prjectName}</h1>
                    <p class="my-4 text-center text-sm text-gray-500"></p>
                    <div class="space-x-4  py-4 text-center">
                      {/* <button class="inline-block rounded-md bg-green-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400"></button> */}
                      {/* <p>{value.Url}</p> */}
                      <button class="inline-block rounded-md bg-blue-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-red-400" onClick={()=>getData(value.prjectName,value.TechStack,value.description,value.Url)}>About</button>
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







                // <div className="card card-compact w-96 bg-base-100 shadow-xl">
                //   <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                //   <div className="card-body">
                //     <h2 className="card-title">Shoes!</h2>
                //     <p>If a dog chews shoes whose shoes does he choose?</p>
                //     <div className="card-actions justify-end">
                //       <button className="btn btn-primary" onClick={()=>setShowModal(true)}>Buy Now</button>
                //       <button className="btn btn-primary">Buy Now</button>
                //     </div>
                //   </div>
                // </div>




                 