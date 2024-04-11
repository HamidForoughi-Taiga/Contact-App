/* eslint-disable react/prop-types */
//components
import Contact from "./Contact";

// eslint-disable-next-line react/prop-types
function Contacts({contacts , setContacts}) {

  
  return (
    <div className="flex flex-col mt-12">
        {
          contacts.map((item , index) => {
            return <Contact contacts={contacts} item={item} key={index} setContacts={setContacts}/>
         })
        }
    </div>
  )
}

export default Contacts