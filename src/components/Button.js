import React from 'react';

const Button = ({onClick, children}) => {

    return (
        <button onClick={onClick} type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            {children}
        </button>
    );
};

export default Button;