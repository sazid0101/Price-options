import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PhoneData = () => {
    const [phones, setPhones] = useState([])

    // useEffect(()=>{
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res => res.json())
    //     .then(data => setPhones(data.data))
    // },[])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            // console.log(data)
            const phonesData = data.data.data;
            const phonesWithFakeData = phonesData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            // console.log(phonesWithFakeData)
            setPhones(phonesWithFakeData)
        })
        
    },[])
    return (
        <div>
            <h1 className='text-4xl font-bold flex justify-center'>Phones: {phones.length}</h1>
            <BarChart width={1260} height={500} data={phones}>
                <XAxis dataKey='name'></XAxis>
                <Bar dataKey={"price"} fill='blue'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneData;