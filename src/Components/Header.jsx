import React from "react";
import "./Header.css"

function Header() {

    return (
        <div className=" p-5 bg-zinc-900 flex flex-row justify-between items-center self-center">
            <h1 h1 className="text-6xl text-white font-semibold"> Space</h1 >
            <div className="space-y-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
            </div>
        </div >
    )
}

export default Header