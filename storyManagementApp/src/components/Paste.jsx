import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromPastes } from "../redux/pasteSlice";
import toast, { Toaster } from "react-hot-toast";

const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

    function handleDelete(pasteId) {
        dispatch(RemoveFromPastes(pasteId))
    }

    function logAddress(pasteId) {
     var address = window.location.href;
     console.log(address)
     alert("the page address is:   " + address + "\n" +
        "id of this content is:   " + pasteId
     )
    }

    return (
        <div className="w-[80vw]">
            <input 
            className="p-2 pl-6 rounded-2xl min-w-[600px] mt-5 border-1 text-white"
            type="search" 
            placeholder="search here "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex flex-col gap-5 mt-8">
                {
                    filteredData.length > 0 && filteredData.map((paste) => {
                        return (
                            <div className="border bg-sky-100 rounded-2xl text-blue-900" key={paste?._id}>
                                <div className="mt-1 text-blue font-bold underline text-3xl">
                                  {paste.title}
                                </div>
                                <div className="mt-2 mb-2 text-slate-600 text-2xl">
                                  {paste.content}
                                </div>

                                <div className="flex flex-row gap-1 justify-end mb-1 mt-5 text-sm pr-2">
                                    <button style={{ backgroundColor: '#4077efff', color: '#FFFFFF' }}>
                                        <a href={`/?pasteId=${paste?._id}`} style={{ color: 'white' }}>
                                          <span className="mr-1">✎</span>Edit
                                        </a> 
                                    </button>
                                    <button
                                    style={{ backgroundColor: '#64748B', color: '#FFFFFF' }}>
                                        <a href={`/pastes/${paste?._id}`} style={{ color: 'white' }}>
                                          <span className="mr-1">👁</span>View
                                        </a>                                        
                                    </button >
                                    <button onClick={() => handleDelete(paste?._id)} style={{ backgroundColor: '#e25a5aff', color: '#FFFFFF' }}>
                                        <span className="mr-1">🗑️</span>Delete 
                                    </button>
                                    <button style={{ backgroundColor: '#3f867eff', color: '#FFFFFF' }} onClick={() => {
                                        navigator.clipboard.writeText(paste?.content)
                                        toast.success("Data copied")
                                    }}>
                                        <span className="mr-1">📋</span>Copy 
                                    </button>
                                    <button style={{ backgroundColor: '#6366F1', color: '#FFFFFF' }} onClick={() => logAddress(paste?._id)}>
                                        <span className="mr-1">♻️</span>Share
                                    </button>
                                </div>
                                <div>
                                    {paste.CreatedAt}
                                </div>
                            </div>

                        )
                    })
                }    
            </div>        
        
        </div>
    )
}

export default Paste 