
import { BsSearch } from "react-icons/bs";
import React, {useState} from 'react';

const SearchPopUp = () => {
    const[popUp, setPopUp] = useState(false);
    const searchClick =()=>{
        popUp ? setPopUp(false) : setPopUp(true);
    }
    const closePopUp=()=>{
        setPopUp(false);
    }

    return (    
    <>
    <div className="search-click-icon" onClick={searchClick}>
        <BsSearch/>
    </div>
    <div className={popUp ? "active header-search-popup" : "header-search-popup"}>
        <div className="header-search-overlay" onClick={closePopUp}></div>
        <div className="header-search-popup-content">
            <form className="searchform">
                <input type="text" name="search" placeholder="Search here... " />
                <button type="submit"><BsSearch className="popup-search-icon"/></button>
            </form>		
        </div>
    </div>
    </>
    );
};

export default SearchPopUp;