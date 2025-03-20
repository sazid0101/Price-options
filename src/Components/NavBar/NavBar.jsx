import { useState } from "react";
import Link from "../../Link/Link";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const navRoutes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
      ];

    return (
        <nav className="bg-slate-300 pt-4 pb-5">
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true?
                    <IoClose className="text-3xl"></IoClose>:
                    <BiMenuAltLeft className="text-3xl"></BiMenuAltLeft>
                }
            
            </div>
           <ul className={`md:flex duration-1000 absolute bg-none md:static text-white rounded-lg pl-5   ${open? "top-16 bg-green-500" : "-top-60"} text-black`}>
           {
                navRoutes.map(route => <Link route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;