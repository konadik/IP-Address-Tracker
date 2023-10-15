import React, { useState, useEffect } from 'react';
import backgroundDesktop from './assets/pattern-bg-desktop.png';
import backgroundMobile from './assets/pattern-bg-mobile.png';

const Navbar = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [backgroundImage, setBackgroundImage] = useState(
        window.innerWidth >= 768 ? backgroundDesktop : backgroundMobile
    );

    const handleSetInputValue = (input) => {
        setInputValue(input.target.value);
    }

    const handleSubmit = () => {
        props.userInput(inputValue);
        setInputValue('');
    }

    useEffect(() => {
        const handleResize = () => {
            setBackgroundImage(
                window.innerWidth >= 768 ? backgroundDesktop : backgroundMobile
            );
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex items-center justify-center flex-col p-10 md:pb-28 pb-48 space-y-10" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h1 className="text-4xl text-white font-bold whitespace-nowrap">
                IP Address Tracker
            </h1>
            <div className="flex items-center justify-center">
                <input value={inputValue} onChange={handleSetInputValue} type="text"
                       className="border border-black rounded-l-xl pl-8 pr-24 md:pr-56 text-gray-900 outline-none h-12 "
                       id="ipAddress" placeholder="Search for any IP address " required />
                <button className="bg-black px-5 rounded-r-xl h-12 transition duration-300 ease-in-out hover:bg-gray-700 " onClick={handleSubmit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" /></svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
