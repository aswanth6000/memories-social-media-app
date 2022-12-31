import React from 'react'
import memories from './images/memories.jpg'
import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import './styles.css'


export default function App() {
  return (
    <div>
      <div className="heading">
        <img src={memories} alt="logo" />
      </div>
        <div className="section">
          <div className="first">
          <div className="fbox">
           <Posts/>
          </div>
          </div>
          <div className="second">
            <div className="box">
            <Form/>
            </div>
          </div>
        </div>
    </div>
  )
}
