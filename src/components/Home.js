import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [expire, setExpire] = useState('')

  useEffect(() => {
    refreshToken()
  }, [])

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:3001/token');
      setToken(response.accessToken);
      const decoded = jwt_decode(response.data.accessToken)
      setName(decoded.name)
      setExpire(decoded.exp)
    } catch (error) {
      console.log(error);
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:3001/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp)
    }
    return config
  }, (error) =>  {
    return Promise.reject(error)
  })

  return (
    <>
      <Navbar name={name}/>
      <p className='text-center text-4xl mt-36'>Welcome to Zani-code</p>
      <p className='text-center text-2xl mt-10'>Haiiii {name}</p>
    </>
  )
}

export default Home