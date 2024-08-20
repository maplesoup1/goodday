'use client'
import React, { useState, FormEvent } from 'react';

const help_assistent = () => {
    const [inputValue, setInputValue] = useState('');
    const [attention, setAttention] = useState(false);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className='fixed top-0 right-3 w-96 h-500 bg-white 
    shadow-lg rounded-sm'>

            <div className='relative bg-secondary4 mb-16'>
                <h2 className='p-4 h-24 text-xl'>Godday</h2>
                <div className='h-20 absolute rounded-lg shadow-lg mx-8 -mt-8 p-4 z-10 bg-secondary4_60'>
                    Hi! Let us know how we can help and we'll respond shortly.
                </div>
            </div>

            <div className=''>
                <div className='flex justify-center'>
                    <input className='w-80 h-14 text-base border-b pt-4'></input>
                    <span className='absolute text-base mt-7 mr-64
                        focus:text-orange-400
                    '>
                        Name*
                    </span>
                </div>
                <span className={`${attention ? 'block' : 'invisible'} text-red-400`}>
                    Please fill in this required field
                </span>
            </div>


            <div>
                <input placeholder='E-mail*'></input>
            </div>
            <div>
                attention
            </div>
            <textarea placeholder='How can we help*'>

            </textarea>
            <div>
                attention
            </div>

            <button>
                Send
            </button>
        </div>
    )
}

export default help_assistent
