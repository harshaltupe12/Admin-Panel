import React from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const New = ({inputs, title}) => {
  const[file, setFile] = useState("")
  const [data, setData] = useState({})

  const handleInput = (e)=>{
    const id = e.target.id;
    const value = e.target.value;
    setData({...data,[id]:value})
  }
  console.log(data)

  const handleAdd = async (e)=>{
    e.preventDefault()
    try{
      const res = await createUserWithEmailAndPassword(auth,data.email, data.password)
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp : serverTimestamp()
      });
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://shorturl.at/efjBM"} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>

              <div className="formInput">
                Select Image<label htmlFor='file'><DriveFolderUploadIcon className="icon"/></label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

              {inputs.map((input)=>(
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} onChange={handleInput} id={input.id}/>
              </div>
              ))}
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New