import React, { useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import {toast} from 'react-toastify';
function Contact() {
  const [loading, setLoading] = useState(false)
  const form = useRef();


  const  sendEmail = async(e) => {
    e.preventDefault();
    setLoading(true)
    await emailjs.sendForm('service_ism72rs', 'template_y10vd97', form.current, 'xUFSG0ZHbIGku9_8A')
      .then((result) => {
        
        toast.success('Meassage Sent', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
      });
      console.log(form)
      setLoading(false)
      }, (error) => {
        console.log(error)
        toast.error("Meassege Sending Unsuccessfull", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }); 
      });
  };


  return (
    <>
    <h1 className='justify-center items-center flex Heading text-3xl '>CONTACT ME</h1>
      <div className="grid flex items-center justify-center">
      
      <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto w-full lg:w-96 xl:w-96 2xl:w-96">
        <div className="mb-5">
          <label for="email" className="block mb-2 text-sm font-medium text-black-900">Your Name</label>
          <input type="text" id="name" name="user_name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Full Name" required />
        </div>
        <div class="mb-5">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
          <input type="email" id="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your email" required />
        </div>

          <div className="max-w-sm mx-auto">
            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 min-w-[60px]" placeholder="Your meassage"></textarea>
          </div>

        <div className="flex justify-center items-center">
        {loading ? <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled">Sending</button>: <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">Submit</button>}
        </div>
      </form>
      </div>







    </>
  )
}

export default Contact
