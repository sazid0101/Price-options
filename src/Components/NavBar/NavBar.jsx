import Link from "../../Link/Link";

const NavBar = () => {

    const navRoutes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
      ];

    return (
        <nav>
           <ul className="md:flex">
           {
                navRoutes.map(route => <Link route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;