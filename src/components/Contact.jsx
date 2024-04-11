/* eslint-disable react/prop-types */
function Contact({ item , setContacts , contacts }) {
  
  const deleteHandler = (id) => {
      const newContacts = contacts.filter((contact) => contact.id !== id)
      setContacts(newContacts)
  
  }

  return (
    <div className='bg-gray-100 flex justify-between border mt-2 p-2 rounded w-[900px]'>
      <p>{`${item.name} ${item.lName}`}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
      <button onClick={() => deleteHandler(item.id)} className="rounded bg-red-500 text-white px-2">Delete</button>
    </div>
  )
}

export default Contact