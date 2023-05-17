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
    const [themeColors, setThemeColors] = useState(
        [
            { light: '#c2ffa7', dark: '#509630' },
            { light: '#ffbe96', dark: '#f99456' },
            { light: '#ffeba3', dark: '#dab322' },
            { light: '#959df4', dark: '#5d219e' },
            { light: '#a2cef9', dark: '#1d1ac5' },
            { light: '#f55d5d', dark: '#a80404' },
        ]
    );
    const [themeIndex, setThemeIndex] = useState(0);

    const slider = useRef();

    const sliderHandler = ({ type }) => {
        // theme change
        if (themeIndex < themeColors.length - 1) {
            setThemeIndex(themeIndex + 1);
        } else {
            setThemeIndex(0);
        }

        // slide
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
            <div
                className='w-11/12 aspect-square rounded-full absolute -top-[900px] -right-[350px] 
                    flex justify-center items-end overflow-hidden shadow-2xl'
                style={{ backgroundColor: themeColors[themeIndex].light }}
            >
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
                        style={{ color: themeColors[themeIndex].dark }}
                    >
                        <BsFillArrowDownCircleFill
                            className='text-4xl hover:translate-y-1 ease-in-out hover:scale-105 drop-shadow-sm' />
                    </p>
                    <p
                        onClick={() => sliderHandler({ type: "next" })}
                        className='cursor-pointer'
                        style={{ color: themeColors[themeIndex].dark }}
                    >
                        <BsFillArrowDownCircleFill
                            className='text-4xl hover:translate-y-1 ease-in-out hover:scale-105 drop-shadow-sm' />
                    </p>
                </div>
            </div>

            {/* left side */}
            <div className='flex flex-col pt-64 gap-5'>
                <h1
                    className='text-5xl font-bold ease-in-out duration-500'
                    style={{ color: themeColors[themeIndex].dark }}
                >
                    Delicious
                </h1>
                <h2 className='text-4xl opacity-75'>Quench the Hunger</h2>
                <h3 className='text-justify w-[30rem] text-xl opacity-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa expedita, doloremque dolorum et quisquam aperiam
                    similique assumenda numquam placeat ullam.
                </h3>
                <p className='mt-14 text-lg bg-slate-500 w-max px-7 py-4 rounded-[4rem] cursor-pointer text-white 
                    ease-in-out duration-700 hover:rounded-sm shadow-2xl'
                    style={{ backgroundColor: themeColors[themeIndex].dark }}
                >
                    Quench Now
                </p>
            </div>
        </div>
    );
};

export default Home;
