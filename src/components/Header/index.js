// import {useState} from 'react'
import { BsSearch,BsChevronDown } from "react-icons/bs";
import searchContext from '../../Context/searchContext';
import './index.css'

const Header=()=>(
    <searchContext.Consumer>

   { value=>{
   const {searchFun}=value
   const onChangeSearch=(e)=>{
        searchFun(e.target.value)
   }
    return(
    
        <nav className="nav-bar">
            <div className="search-con">
                <input type='search' placeholder="Search..." onChange={onChangeSearch} className="search-item"/>
                <BsSearch/>
            </div>
            <ul className="nav-items-con">
                <li className="nav-item">
                    <p className="tag-nav">
                        Relevance
                    </p>
                    <BsChevronDown className="arrow-icon"/>
                </li>
                <li className="nav-item">
                    <p className="tag-nav">
                        All brands
                    </p>
                    <BsChevronDown className="arrow-icon"/>
                </li>
            </ul>
        </nav>
    
    )}}
    </searchContext.Consumer>
)

export default Header