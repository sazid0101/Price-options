import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import b1 from "../Slider/SliderImg/b1.jpg";
import b2 from "../Slider/SliderImg/b2.jpg";
import b3 from "../Slider/SliderImg/b3.jpg";
const Slider = () => {
    return (
        <div className=" mx-auto mt-5 mb-10 h-50">
            <AwesomeSlider animation="cubeAnimation" className='h-[600px] rounded-lg'>
                <div data-src={b1} />
                <div data-src={b2} />
                <div data-src={b3} />
                </AwesomeSlider>
        </div>
    );
};

export default Slider;