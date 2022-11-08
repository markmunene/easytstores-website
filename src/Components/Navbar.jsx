import React,{useRef, useState} from "react";


const Navbar = ({ scrollDown, scrollDownFaq, scrollDownContact }) => {

    const [toggleNavBar, setToggleNavBar] = useState(false);
        const navRef = useRef(null)
    const HandleToggleNavBar = () => {
        console.log("data mining");
        setToggleNavBar(!toggleNavBar)
        navRef.current.style.display  = toggleNavBar ? 'none': 'block'
        
    }
      

    return (
        <nav>
            <div className="navbar navbar-expand-lg w-100">
                <div className="container-fluid">
                    <button className="navbar-toggler" onClick={HandleToggleNavBar} type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " style={{display:"none"}}  ref={navRef} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    role="button"
                                    onClick={()=>scrollDown("aboutRef")}
                                >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                    onClick={()=>scrollDownFaq("featuresRef")}
                                >FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"
                                onClick={()=>scrollDownContact("contactRef")}
                                >Contact</a>
                            </li>

                        </ul>
                        <a className="navbar-brand " href="#">EasyStores</a>
                        <div className="d-flex loginbtns">
                            <button className="btn btn-light">Login</button>
                        <a className=" btn btn-primary" role="button" href="#">signin</a>

                        </div>                        
                    </div>
                

                </div>
            </div>


        </nav>
    )
}
export default Navbar;
