import React, { useState, useRef } from 'react';
import { ReactRotationSlider } from 'react-rotation-slider';
import 'react-rotation-slider/dist/index.css';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

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
                        <BsFillArrowDownCircleFill className='text-4xl hover:translate-y-1 ease-in-out hover:scale-105' />
                    </p>
                    <p
                        onClick={() => sliderHandler({ type: "next" })}
                        className='cursor-pointer'
                    >
                        <BsFillArrowDownCircleFill className='text-4xl hover:translate-y-1 ease-in-out hover:scale-105' />
                    </p>
                </div>
            </div>

            {/* left side */}
            <div className='flex flex-col pt-64 gap-5'>
                <h1 className='text-5xl font-bold'>Delicious</h1>
                <h2 className='text-4xl opacity-75'>Quench the Hunger</h2>
                <h3 className='text-justify w-[30rem] text-xl opacity-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa expedita, doloremque dolorum et quisquam aperiam
                    similique assumenda numquam placeat ullam.
                </h3>
                <p className='mt-14 text-lg bg-slate-500 w-max px-7 py-4 rounded-[4rem] cursor-pointer text-white 
                    ease-in-out duration-700 hover:rounded-sm shadow-2xl'
                >
                    Quench Now
                </p>
            </div>
        </div>
    );
};

export default Home;
