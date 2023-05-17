import React, { useState, useRef } from 'react';

import { ReactRotationSlider } from 'react-rotation-slider';
import 'react-rotation-slider/dist/index.css';

import img1 from '../../assets/images/food1.png';
import img2 from '../../assets/images/food2.png';
import img3 from '../../assets/images/food3.png';
import img4 from '../../assets/images/food4.png';

const Home = () => {
    let images = [img1, img2, img3, img4, img1, img2, img3, img4, img1];
    const [imageIndex, setImageIndex] = useState(0);

    const slider = useRef();

    const sliderHandler = ({ type }) => {
        if (type === "next") {
            slider.current.next();
            if (imageIndex > 0) {
                setImageIndex(imageIndex - 1);
            } else {
                setImageIndex(images.length - 1);
            }
        } else {
            slider.current.prev();
            if (imageIndex < images.length - 1) {
                setImageIndex(imageIndex + 1);
            } else {
                setImageIndex(0);
            }
        }
    };

    return (
        <div className='container mx-auto relative'>
            {/* back slider */}
            <div className='w-11/12 aspect-square rounded-full absolute -top-[900px] -right-[350px] bg-slate-400
                flex justify-center items-end overflow-hidden'>
                <div className='absolute -bottom-[350px]'>
                    <ReactRotationSlider images={images} ref={slider} />
                </div>
            </div>

            {/* front slider */}
            <div className='absolute w-[20rem] right-[200px] top-[500px]'>
                <div className='flex justify-center items-center'>
                    {images?.map((image, i) => (
                        <img
                            src={image}
                            alt="food"
                            key={i}
                            className={`w-full absolute ease-in-out duration-500 ${i === imageIndex ? 'scale-100' : 'scale-0'}`}
                        />
                    ))}
                </div>

                <div className='flex mx-auto -ml-[8rem] mt-20 gap-[30rem]'>
                    <p
                        onClick={() => sliderHandler({ type: "prev" })}
                        className='cursor-pointer'
                    >
                        Prev
                    </p>
                    <p
                        onClick={() => sliderHandler({ type: "next" })}
                        className='cursor-pointer'
                    >
                        Next
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
