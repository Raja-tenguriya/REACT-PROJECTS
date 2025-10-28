import React, { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useSelector } from "react-redux";

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        console.log("inside use effect ");
        if(pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title)
            setValue(paste.content);
        }
            
    }, [pasteId])    

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || 
                 Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        if(pasteId) {
            dispatch(updateToPastes(paste));
        }
        else{
            dispatch(addToPastes(paste));
        }

        setTitle('');
        setValue('');
        setSearchParams({});
    }
    
    return( 
        <div className="relative bg-green-50 rounded-2xl w-[80vw] bg-cover bg-center bg-no-repeat p-12">
            <div className="text-2xl text-black font-bold md-8 underline">
                STORY DATA MANAGEMENT
            </div>
            <div className="flex flex-row place-content-around mt-8 text-black bg-green-50 rounded-2xl">
            <input type="text"
            className="pl-4 rounded-2xl mt-2 ml-4 border-2 text-lg border-black w-[40%] bg-blue-200 placeholder-black"
            placeholder="input title here "
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            />

            <button className="rounded-2xl mt-2 text-black"
            style={{ backgroundColor: '#35ab43ff', padding: '12px', paddingLeft: '20px', paddingRight: '20px', fontSize: '18px' }}
            onClick={createPaste}>
                {
                    pasteId ? "update data" : "create data"
                }
            </button>
        </div>
        <div className="mt-8 bg-green-50">
            <textarea 
            className="rounded-2xl mt-4 min-w-[52vw] text-xl p-4 border-2 border-black h-[300px] placeholder-black text-black bg-zinc-100"
            value={value}
            placeholder="enter the content "
            onChange={(e) => setValue(e.target.value)}
            rows={20}
            />
        </div>
        <div className="text-black font-bold absolute bottom-2 left-[37%]">
            created by raja tenguriya
        </div>
        </div>
    )
}

export default Home