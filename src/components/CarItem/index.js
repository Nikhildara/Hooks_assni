import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { GoPeople } from "react-icons/go";
import { BsFillFuelPumpFill,BsSpeedometer ,BsHeart} from "react-icons/bs";
import { PiSteeringWheelLight } from "react-icons/pi";
import './index.css'

const CarItem=(props)=>{
    const {carData}=props
    const {capacity,carImages,carTitle,engineType,gearType,mileage,rent,year}=carData
  

   
    return(
        <li className='car-list-item'>
            <div className='img_con'>
                <Carousel slide={true} interval={null}>
                    {
                        carImages.map((e)=>(
                            <Carousel.Item>
                                <img src={e.img} alt='img1' className='img-item'/>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
            <div className='title-year-con'>
                <h1 className='title'>{carTitle}</h1>
                <p className='year'>{year}</p>
            </div>
            <div className=''>
                <div className='detail-con'>
                    <div className='sub-con'>
                        <GoPeople className='icon-list'/>
                        <p className='sub-details'>{capacity} People</p>
                    </div>
                    <div className='sub-con'>
                        <BsFillFuelPumpFill className='icon-list'/>
                        <p className='sub-details'>{engineType}</p>
                    </div>
                    <div className='sub-con'>
                        <BsSpeedometer className='icon-list'/>
                        <p className='sub-details'>{mileage}</p>
                    </div>
                    <div className='sub-con'>
                        <PiSteeringWheelLight className='icon-list'/>
                        <p className='sub-details'>{gearType}</p>
                    </div>
                </div>
                <hr/>
                <div className='priceRent-btn-con'>
                    <p className='rent'>
                        <span className='span-rent'>
                            ${rent}
                        </span> /month
                    </p>
                    <div className='btn-con'>
                        <button className='btn-love'>
                            <BsHeart className='icon-list'/>
                        </button>
                        <button className='rent-btn'>
                            Rent now
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )

}

export default CarItem