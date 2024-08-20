'use client'
import React, { useState, FormEvent } from 'react';

const help_assistent = () => {

    const [nameAttention, setNameAttention] = useState(false);
    const [emailAttention, setEmailAttention] = useState(false);
    // const [isInput, setIsInput] = useState('')

    // const handleIsInput = (e: React.FocusEvent<HTMLInputElement>) => {
    //     if (!e.target.value) {

    //     }
    // }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleNameAttention = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setNameAttention(true);
        } else {
            setNameAttention(false);
        }
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailAttention = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setEmailAttention(true);
        } else {
            const inputEmail = e.target.value;
            if (!validateEmail(inputEmail)) {
                setEmailAttention(true)
            } else {
                setEmailAttention(false)
            }
        }
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

            <div className='assistent_input'>
                <div className='relative flex justify-center'>
                    <input className='w-80 h-14 text-base border-b pt-5 pl-2 
                    peer  focus:border-black' placeholder='' onBlur={handleNameAttention} required
                    />
                    <span className='absolute text-base mt-7 mr-64
                        peer-focus:text-orange-400 peer-focus:-translate-y-7
                        peer-valid:text-orange-400 peer-valid:-translate-y-7
                        transition-transform duration-200 peer-focus:text-sm pointer-events-none
                    '>
                        Name*
                    </span>
                </div>
                <span className={`${nameAttention ? 'block' : 'invisible'} text-red-400 ml-8`}>
                    Please fill in this required field
                </span>
            </div>

            <div className='assistent_input'>
                <div className='relative flex justify-center'>
                    <input className='w-80 h-14 text-base border-b pt-5 pl-2 
                    peer  focus:border-black' placeholder='' onBlur={handleEmailAttention} />
                    {/* <div>
                        TODO: dont know thy border is not balck.
                    </div> */}
                    <span className='absolute text-base mt-7 mr-64
                        peer-focus:text-orange-400 peer-focus:-translate-y-7
                        peer-focus:text-sm transition-transform duration-200
                    '>
                        E-mail*
                    </span>
                </div>
                <span className={`${emailAttention ? 'block' : 'invisible'} text-red-400`}>
                    Please fill in this required field
                </span>
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
