import {useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { BsArrowLeftShort,BsArrowRightShort } from "react-icons/bs";
import './index.css'

const numbersList=[
    {id:1,no:1},
    {id:2,no:2},
    {id:3,no:3},
    {id:4,no:4},
    {id:5,no:5},
    {id:6,no:6},
    {id:7,no:7},
    {id:8,no:8},
    {id:9,no:9},
    {id:10,no:10}
]

const Footer=()=>{
    const currentPage=useRef(1)
    // console.log(currentPage);

    const navigate=useNavigate()

    const setCurrentState=(id)=>{
        console.log("isClicked");
        console.log(id);
        currentPage.current=id
    }
    
    const count=currentPage.current*6

    const nextPage=()=>{
        const {current}=currentPage
        if (current<10){
        navigate(`/${current+1}`)
        currentPage.current=current+1
        }
    }
    const prevPage=()=>{
        const {current}=currentPage
        if (current>1){
            navigate(`/${current-1}`)
            currentPage.current=current-1
        }
    }


    return(
        <div className='footer-con'>
            <p>{count} of 60</p>
            <ul>
                
                <li>
                    <button className='pagination-item-icon' ><BsArrowLeftShort className="pagination-icons" onClick={prevPage}/></button>
                </li>
                
                {
                    numbersList.map((e)=>(
                        <li  key={e.id}>
                            <a href={`/${e.id}`}>
                                <button className='pagination-item' onClick={()=>setCurrentState(e.id)}>{e.no}</button>
                            </a>
                        </li>
                    ))
                }
                
                <li>
                    <button className='pagination-item-icon'><BsArrowRightShort className="pagination-icons" onClick={nextPage}/></button>
                </li>
                
            </ul>
            
        </div>
    )
}


export default Footer