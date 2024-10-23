import React from 'react'
import photo1 from '../Assets/photo1.1.png';
import photo2 from '../Assets/photo2.png';

const TestComponent = () => {
    return (
        <div className='flex flex-col '>

            <h1 className='font-bold leading-[48px] text-[40px] mx-auto'>Success Project</h1>

            <div className='mx-auto mt-2 text-[#A7ABB6] text-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam sed hic ullam</p>
                <p>sit nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='flex flex-row gap-6 justify-center mt-10 flex-wrap p-1'>

                <div>
                    <div className='relative sm:w-[450px] md:w-[558px]'>

                        <img src={photo1} alt="photo-1" className='rounded-md h-[529px] object-cover' />


                        <div className='flex flex-row absolute bottom-0 mx-auto justify-center bg-custom-gradient p-2 w-full rounded-lg'>
                            <div className='flex flex-col p-2 '>
                                <p className='text-white text-[32px] leading-[38.4px] font-bold'>Website Design</p>
                                <p className='text-white w-[320px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi modi numquam laboriosam </p>
                            </div>

                            <div className='flex items-center p-1'>
                                <button className='border border-[white] rounded-full text-white py-[10px] px-[20px]  '>Let's work</button>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-4 w-[558px] '>
                    <div className='relative '>
                        <img src={photo2} alt='photo2' className='rounded-lg h-[252px] object-cover' />
                        <div className='flex flex-col p-3 absolute bottom-0 bg-custom-gradient w-full rounded-lg'>
                            <p className='text-white text-[24px] leading-[28.8px] font-bold'>Website Design</p>
                            <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi modi numquam laboriosam </p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src={photo2} alt='photo3' className='rounded-lg h-[252px] object-cover' />
                        <div className='flex flex-col p-3 absolute bottom-0 bg-custom-gradient w-full rounded-lg'>
                            <p className='text-white text-[24px] leading-[28.8px]  font-bold'>Website Design</p>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi modi numquam laboriosam </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='mx-auto mt-6'>
                <button className='bg-[#1E5A66] text-white py-4 px-8 rounded-full'>View Project</button>
            </div>

        </div>
    )
}

export default TestComponent