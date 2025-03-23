
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
            console.log(data)
            const phonesData = data.data.data;
            const phonesWithFakeData = phonesData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData)
            setPhones(phonesWithFakeData)
        })
        
    },[])
    return (
        <div>
            <h1 className='text-4xl font-bold'>Phones: {phones.length}</h1>
        </div>
    );
};

export default PhoneData;