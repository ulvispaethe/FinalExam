import React from 'react'
import CardList from '../../components/CardList/CardList'
import Slider from '../../components/Slider/Slider'
import SliderPrev from '../../components/SliderPrev/SliderPrev'
import MySlider from "../../components/MySlider/MySlider"
import toast, { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <React.Fragment>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <Slider/>
        <CardList/>
        <SliderPrev/>
        <MySlider/>
        <Toaster/>
    </React.Fragment>
  )
}

export default Home