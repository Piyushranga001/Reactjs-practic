import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

    let param = useParams();

    console.log(param)

  return (
    <div>CoursesDetail</div>
  )
}

export default CoursesDetail