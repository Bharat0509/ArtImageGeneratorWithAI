import React from "react";
import { downloadImage } from "../utils";
type Props = {
    _id: string;
    name: string;
    prompt: string;
    image: string;
};
const Card = ({ _id, name, prompt, image }: Props) => {
    return (
        <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card transition duration-300 z-0'>
            <img
                className='w-full h-auto object-cover rounded-xl'
                src={image}
                alt={prompt}
            />
            <div className='group-hover:flex flex-col max-h-[96.5%] hidden absolute bottom-0 left-0 ring-0 bg-gradient-to-b transition-all duration-300 from-[#333d6344] to-[#020116]  p-4 rounded-lg w-full'>
                <p className='text-white text-sm overflow-y-auto prompt'>
                    {prompt}
                </p>
                <div className='mt-5 flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-[12px] font-bold'>
                            {name[0].toUpperCase()}
                        </div>
                        <p className='text-white text-sm'>{name}</p>
                    </div>
                    <button
                        type='button'
                        onClick={() => downloadImage(_id, image)}
                        className='outline-none bg-transparent border-none'
                    >
                        <img
                            src='/assets/download.png'
                            className='h-6 w-6 object-contain invert'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
