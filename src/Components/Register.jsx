"use client"

import React, { useState } from 'react';

export default function Home() {
    const [name, setName] = useState("luqmantest");
    const [email, setEmail] = useState("luqmantest@gmail.com"); 

    const handleSubmit = async () => {
        const res = await fetch("api/write", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ name, email })
        });
    }

    return (
        <div className='flex justify-center items-center h-[95vh]'>
        <div className=''>
            <button onClick={handleSubmit} className='bg-blue-400 p-3 rounded-md'>SEND DATA</button> {/* Remove parentheses */}
        </div>
        </div>
    );
}
