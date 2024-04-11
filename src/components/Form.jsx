import { useState } from "react"
import validateForm from "../functions/validation";

//components
import Contacts from "./Contacts";


function Form() {

    const [error , setError] = useState({})
    const [contacts , setContacts] = useState([])
    const [formData, setFormData] = useState({
        name : '',
        lName : '',
        email : '',
        phone : ''
    })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value})
        
    }

    const clickHandler = () => {
        if(!formData.name || !formData.lName || !formData.phone || !formData.email) {
            setError(validateForm(formData))
        } else {
            setContacts((contacts) => ([...contacts , formData]))
            setFormData({
                id : '',
                name : '',
                lName : '',
                email : '',
                phone : ''
            })
        }
    }

  return (
    <>
        <div className='w-[800px] mx-auto mt-10 shadow-lg p-10'>
            <div className="grid grid-cols-2 grid-row-2 gap-10">
                <div className="flex flex-col rounded-full">
                    <input value={formData.name} name="name" onChange={changeHandler} className="border px-2 py-1 rounded text-gray-400 font-bold" placeholder="Name"/>
                    {error.name && <span className="text-red-500 bg-red-200">{error.name}</span>}
                </div>
                <div className="flex flex-col rounded-full">
                        <input value={formData.lName} name="lName" onChange={changeHandler} className="border px-2 py-1 rounded text-gray-400 font-bold" placeholder="Last Name"/>
                        {error.lName && <span className="text-red-500 bg-red-200">{error.lName}</span>}
                </div>  
                <div className="flex flex-col rounded-full"> 
                        <input value={formData.email} name="email" onChange={changeHandler} className="border px-2 py-1 rounded text-gray-400 font-bold" placeholder="Email"/>
                        {error.email && <span className="text-red-500 bg-red-200">{error.email}</span>}
                </div>
                <div className="flex flex-col rounded-full">
                        <input value={formData.phone} name="phone" onChange={changeHandler} className="border px-2 py-1 rounded text-gray-400 font-bold" placeholder="Phone"/>
                        {error.phone && <span className="text-red-500 bg-red-200">{error.phone}</span>}
                </div>
                <div className="flex flex-col rounded-full">
                        <input value={formData.id} name="id" onChange={changeHandler} className="border px-2 py-1 rounded text-gray-400 font-bold" placeholder="Custom ID"/>
                        {error.phone && <span className="text-red-500 bg-red-200">{error.phone}</span>}
                </div>
                <button onClick={clickHandler} className="bg-blue-400 text-white text-2xl rounded w-36" type="submit">Add</button>
            </div>
            
        </div> 
        <div className="text-center flex justify-center">
            {
                formData && <Contacts contacts={contacts} setContacts={setContacts}/> 
            }
        </div>
    </>
     
  )
}

export default Form