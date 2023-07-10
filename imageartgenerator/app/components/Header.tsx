import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
    return (
        <nav
            className='w-screen max-w-7xl mx-auto flex 
     justify-between items-center bg-white sm:px-8 px-4 py-4 border-b lg:px-0 border-b-[#e6ebf4] '
        >
            <Link href={"/create-image"}>
                <Image
                    src={"/assets/logo.svg"}
                    alt='Logo'
                    width={112}
                    height={112}
                    className='object-contain'
                />
            </Link>

            <Link
                href={"/create-image"}
                className='font-medium  transition duration-300 bg-[#6469ff] border border-[#6469ff] hover:bg-transparent hover:text-[#6469ff] text-white px-4 py-2 rounded-md'
            >
                Create
            </Link>
        </nav>
    );
}

export default Header;
