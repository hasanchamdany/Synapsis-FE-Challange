import React from 'react'

const PostCard = (props) => {
  return (
    <div className="md:w-[800px] h-fit bg-white rounded-[30px] my-2">
        <div>{props.title}</div>
        <div>{props.user}</div>
        <div>{props.body}</div>
    </div>
  )
}

export default PostCard