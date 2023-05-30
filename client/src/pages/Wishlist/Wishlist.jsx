import React from 'react'
import {Helmet} from "react-helmet";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../redux/wishlistSlice/wishlistSlice';
import "./Wishlist.scss"
const Wishlist = () => {
        const items = useSelector(state => state.wishlist.items)
    const dispatch = useDispatch()
  return (
    <React.Fragment>
                <Helmet>
            <title>Wishlist Page</title>
        </Helmet>
        <div className='wishlist'>
                {
                    items.map((item, index) => {
                        return (
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
                                <button className='basketdel' onClick={() => {
    dispatch(removeFromWishlist(item.id))
}}>Delete from Wishlist</button>
                            </div>
                            
                        </div>
                        )
                        
                    })
                }
            </div>
    </React.Fragment>
  )
}

export default Wishlist



