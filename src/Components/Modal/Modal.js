import React from 'react'

function Modal({ isVisible, onClose, prjectName, TechStack, description, Url }) {

    if (!isVisible) return null

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose()
    }

    console.log(Url)
    return (
        <>{


            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center p-auto" id="wrapper" onClick={handleClose}>
                {/* <div className='w-[600px] flex flex-col'> */}
                    
                    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <button className="text-black text-xl place-self-end absolute mr-5" onClick={() => onClose()}>X</button>
                        {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                        <div className="card-body flex justify-center items-center">
                            <h2 className="card-title">{prjectName}</h2>
                            <h2>{TechStack}</h2>
                            <p>{description}</p>
                            
                            <div className="card-actions">
                                <button className="btn btn-primary">Live Url</button>
                                <button className="btn btn-primary">Source Code</button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}

            </div>
        }
        </>
    )
}

export default Modal
