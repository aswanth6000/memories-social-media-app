import React from 'react'
import Post from './post/post'
import './style.css'
export default function posts() {
  return (
    <div className='main'>
    <h1>POSTS</h1>
    <Post/><br></br>
    <Post/>
    </div>
  )
}
