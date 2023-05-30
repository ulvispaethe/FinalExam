import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./CardList.scss"
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../../redux/wishlistSlice/wishlistSlice'
import { Link } from 'react-router-dom'


const CardList = () => {
    const items = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch()
    const [data,setData]= useState([])
    const [searchValue, setSeachValue] = useState([])
    const [dummys, setDummy] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8080/').then((res)=>{
            setData(res.data)
        })
    },[searchValue === "", dummys ? data : ""])
  return (
   <React.Fragment>
       <div className="top">
           <div className="topmid">FEATURED PROPERTIES</div>
           <div className="topbottom">See our best offers</div>
       </div>
       <div className="mid">
           <input type="text" placeholder='Search' className='search' onChange={(e)=>{
                setSeachValue(e.target.value)
                setData(data.filter(item => item.name.includes(searchValue)))
           }} />
           <button className='filter' onClick={()=>{
               setData([...data.sort((a, b) => b.price - a.price)])
           }}>Filter by Price</button>
       </div>
       <div className="cardlist">
{
    data.map((item,index)=>{
        return(
            <div className="card" key={index}>
            <div className='featured'><p>Featured</p></div>
            <div className="cardimg"><img className='img1' src="https://preview.colorlib.com/theme/theestate/images/featured_1.jpg.webp" alt="" /></div>
            <div className="cardname">{item.name}</div>
            <div className="carddesc">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</div>
            <div className="cardmain">
                <div className="room">
                    <p>Bedroom</p>
                    <div className='room2'>
                        <div className="roomleft"><img src="https://preview.colorlib.com/theme/theestate/images/bedroom.png.webp" alt="" /></div>
                        <div className="roomright">4</div>
                    </div>
                </div>
                <div className="room">
                    <p>Bathroom</p>
                    <div className='room2'>
                        <div className="roomleft"><img src="https://preview.colorlib.com/theme/theestate/images/shower.png.webp" alt="" /></div>
                        <div className="roomright">4</div>
                    </div>
                </div>
                <div className="room">
                    <p>Area</p>
                    <div className='room2'>
                        <div className="roomleft"><img src="https://preview.colorlib.com/theme/theestate/images/area.png.webp" alt="" /></div>
                        <div className="roomright">7100 Sq Ft
</div>
                    </div>
                </div>
                <div className="room">
                    <p>Patio</p>
                    <div className='room2'>
                        <div className="roomleft"><img src="https://preview.colorlib.com/theme/theestate/images/patio.png.webp" alt="" /></div>
                        <div className="roomright">1</div>
                    </div>
                </div>
                <div className="room">
                    <p>Garage</p>
                    <div className='room2'>
                        <div className="roomleft"><img src="https://preview.colorlib.com/theme/theestate/images/garage.png.webp" alt="" /></div>
                        <div className="roomright">2</div>
                    </div>
                </div>
                
            </div>
            <div className="cardbtns">
                <button className="orange" >Hottub</button>
                <button className="orange" >SwimingPool</button>
                <button className="orange" >Garden</button>
                <button className="orange" >Patio</button>
                <button className="orange" >HardFoodFloor</button>
            </div>
            <div className="cardprice">
                <div className="cardpriceleft"><img className='svg' src="https://preview.colorlib.com/theme/theestate/images/tag.svg" alt="" /></div>
                <div className="cardpriceright">
                    <div className="righttop">For Sale</div>
                    <div className="rightprice">$ {item.price}</div>
                </div>
            </div>
            <div className="mybtns">
                <button><Link className='abc' to={`/${item._id}`}>Go Detail</Link></button>
                <button onClick={()=>{
                        axios.delete(`http://localhost:8080/${item._id}`).then(res => {
                            toast.success("Item Deleted")
                            setDummy(true)
                        })
                    }}>Delete</button>
                <button  onClick={() => {
                    dispatch(addToWishlist({ id: item._id, name: item.name, price: item.price }))
                    console.log(items)
                    }}>Add to Wishlist</button>
            </div>
        </div>
        )
    })
}
       </div>
   </React.Fragment>
  )
}

export default CardList