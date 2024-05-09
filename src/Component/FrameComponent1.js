import React from "react";
import { FaLightbulb, FaVolumeUp } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";

const FrameComponent1 = () => {
    const items = [
        { label: "Study", active: true },
        { label: "Quiz", active: false },
        { label: "Test", active: false },
        { label: "Game", active: false },
        { label: "Others", active: false },
    ];

    return (
        <>
         <div className="m-0 p-0 mb-9 text-left">
                <h1 className="text-9xl font-bold gradient-text">Relations and Functions (Mathematics)</h1>
            </div>
        <section className="flex flex-col items-center justify-center w-full">
           
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center justify-center gap-2 mb-4">
                    {items.map((item) => (
                        <div key={item.label} className={`${item.active ? "text-blue-800 font-bold underline" : "text-gray-500"} px-4 py-2`}>
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className="rounded-3xl border border-gray-300 w-[712px] h-[485px] bg-gradient-to-l from-blue-900 to-blue-600 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center h-full w-full p-8 pb-0">
                        <div className="flex justify-between w-full">
                            <FaLightbulb className="text-white" size={24} aria-label="Idea" />
                            <FaVolumeUp className="text-white" size={24} aria-label="Sound" />
                        </div>
                        <div className="text-white text-9xl font-bold flex justify-center items-center h-full">
                            <h2>9 + 6 + 7x - 2x - 3</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-9 text-blue-800 text-10xl">
                    <IoMdRefresh className="text" size={50}  />
                    <IoIosArrowDropleftCircle className="text" size={70} />
                    <h1 className="text-9xl font-bold">01/10</h1>
                    <IoIosArrowDroprightCircle className="text" size={70}  />
                    <MdOutlineFullscreen className="text" size={50}  />
                </div>
            </div>
        </section>
        </>

    );
};

export default FrameComponent1;
