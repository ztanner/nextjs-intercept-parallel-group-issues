import React from 'react'

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <span className=" text-red-600">intercept</span>
      {id}
    </div>
  )
}

export default page
