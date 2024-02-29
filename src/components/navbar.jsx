import * as React from "react";

function Navbar (){
    return(
        <nav className="text-xl-500 p-2 ">
            <div className="h-10vh flex justify-center ">
                <div className="flex item-center">
                    <h2 className=""></h2>
                </div>            
                <div>
                    <ol className="font-bold p-2 flex text-center space-x-4">
                        <a href='/#aboutme'>
                            <li className="border p-2 rounded-md bg-gray-100">Sobre Mi</li>
                        </a>
                        <a href='/#jobs'>
                            <li className="border p-2 rounded-md bg-gray-100">Trabajos</li>
                        </a>
                        <a href='/#portfolio'>
                             <li className="border p-2 rounded-md bg-gray-100">Portfolio</li>
                        </a>
                        <a href='/#contact'>
                             <li className="border p-2 rounded-md bg-gray-100">Contacto</li>
                        </a>
                        <a href='/'>
                            <li className="border p-2 rounded-md bg-sky-500 hover:bg-sky-700">
                                <button className="flex">MI CV</button>
                            </li>
                        </a>           
                    </ol>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;