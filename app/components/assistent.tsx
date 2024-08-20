'use client';

import React, { useState } from 'react';
import { IoChatboxSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Help_assistent from './help_assistent';

const Assistent = () => {
    const [isChat, setIsChat] = useState(true);

    const handleClick = () => {
        setIsChat(prevState => !prevState);
    };

    return (
        <div 
            className={`rounded-full w-16 h-16 flex justify-center items-center ${isChat ? 'bg-secondary4' : 'bg-slate-600'}`}
            onClick={handleClick}
        >
            {isChat ? (
                <IoChatboxSharp className='size-8' />
            ) : (
                <RxCross2 className='size-8 text-white'/>
            )}
        </div>
    );
};

export default Assistent;
