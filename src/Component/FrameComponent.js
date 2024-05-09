import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import logo2 from '../images/Frame 41.png'


const FrameComponent = () => {
    return (
        <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[90.4px] pr-0 pl-1 box-border max-w-full text-left text-smi-4 text-dimgray font-med">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
                <div className="h-[80.6px] w-[217px] flex flex-row items-start justify-start gap-[21.3px]">
                    <div className="h-[100.6px] w-[100.6px] relative flex items-center justify-center">
                        <img
                            className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.769)]"
                            alt=""
                            src={logo2}
                        />
                    </div>
                    
                </div>
                <div className="w-[299px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-9xl">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                        <FaPlusCircle style={{ color: '#06286E', fontSize: '40px', alignSelf: 'center' }} />

                        <div className="flex-1 flex flex-col items-start justify-center">
                            <h3 className="m-0 relative text-inherit font-semibold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-3xl">
                                Create Flashcard
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent;