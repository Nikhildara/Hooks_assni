import { useEffect ,useState,useRef,useContext} from 'react';
import { useParams } from 'react-router-dom';
// import uuid from 'react-uuid';
import CarItem from '../CarItem';
import searchContext from '../../Context/searchContext';


import './index.css'

const Body=(props)=>{
    let [carData,setCarData]=useState([]);
    const pageID=useRef(1)

    const contextData=useContext(searchContext)
    console.log(contextData.searchData);
    const search=contextData.searchData
    let CurrentItems

    const getData=()=>{
        fetch('CarsData.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setCarData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])
      // console.log(carData);
 

      const params=useParams()
      const {id}=params
      pageID.current=id
      const {current}=pageID

      if (search!==''){
         CurrentItems= carData.filter((e)=>e.carTitle.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      }else{

      CurrentItems= carData.filter((e)=>e.page===parseInt(current))
      }

    // const lastItemIndex=currentPage*ItemsPerPage;
    // const firstItemIndex=lastItemIndex-ItemsPerPage;
    // const CurrentItems=carData.slice(firstItemIndex,lastItemIndex);

  return(
    <div className='body-con'>
      <ul className='cars-container'>
        {
          CurrentItems.map((e,i)=><CarItem carData={e} key={i} />)
        }
      </ul>
    </div>
  )

}

export default Body