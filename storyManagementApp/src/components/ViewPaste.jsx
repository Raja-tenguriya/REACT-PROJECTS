import React, { useRef } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const ViewPaste = () => {

    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
    console.log("final paste: ", paste);

    const textRef = useRef(null);
    const handleCopy = () => {
      const text = textRef.current?.innerText;
      if (text) {
        navigator.clipboard.writeText(text);
        alert("data copied!");
      }
    };

    return (
        <div className="w-[80vw] bg-sky-50 rounded-2xl">
            <div className="flex justify-center text-center text-black py-2 my-4">
                <p className="text-2xl text-red-900">YOUR SAVED DATA</p>
            </div>
            <div className="flex flex-row place-content-between">
                <div className="w-[83%]" >
                    <span className="text-black mx-2">unique id :-</span>
                    <input type="text"
                    className="pl-4 my-2 border-2 border-black bg-amber-100 text-black z-10 center"
                    placeholder="no id"
                    value={paste?._id}
                    onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
            </div>
            <div className="flex flex-row gap-7 place-content-between justify-center">
                <span className="text-black py-3"> TITLE :- </span>
                <input type="text"
                className="pl-4 py-2 mt-2 border-1 border-white w-[42%] bg-indigo-500 text-white z-10 center"
                placeholder="no titile "
                value={paste.title}
                 onChange={(e) => setTitle(e.target.value)} 
               />
            </div>
            <div className="mt-8 relative">
                <div
                ref={textRef}
                className= "mt-4 min-w-[550px] min-h-[10rem] p-4 border-2 border-white bg-gray-900 text-white">
                    {paste.content}
                </div>
                <button
                className="absolute rounded border-1 top-2 right-2"
                onClick={handleCopy}
                style={{ backgroundColor: '#64748B', color: '#FFFFFF', padding: '0.2em 0.6em'}}>
                    copy
                </button>   
            </div>
        </div>
    )
}

export default ViewPaste