/*-------------------------------------------------------------------
|  🐼 React FC Form (Starter – no validation)
*-------------------------------------------------------------------*/

import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className="container"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <input name="name" placeholder="Name" className="border rounded-md p-2"/>
        <input name="email" type="email" placeholder="Email" className="border rounded-md p-2"/>
        <input name="phone" type="tel" placeholder="Phone" className="border rounded-md p-2"/>
        <input name="password" placeholder="Password" className="border rounded-md p-2"/>
        <textarea
            name="description"
            placeholder="Description"
            className="md:col-span-2 border rounded-md p-2"
        />
      </div>

      <div className="mt-5">
        {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill/> Form has been submitted successfully
            </p>
        )}

        <button
            type="submit"
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
        >
          <GrMail/>
          Submit Form
        </button>
      </div>
    </form>
  )
}
