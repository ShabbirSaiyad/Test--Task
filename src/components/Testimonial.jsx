import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import Card from './Card'
import userPhoto from '../Assets/user photo.png'

const testimonials = [
    {
        id: 1,
        name: "Malte Herberg",
        title: "CTO at TerraOne & Partner at Teclead Ventures",
        text: "NativeExpress has become our go-to for mobile development.",
        highlightedText: "It makes the setup and deployment of our projects more efficient, saving us both time and money,",
        photo: userPhoto
      },
      {
        id: 2,
        name: "Shi Zai",
        title: "CTO at StackAuth (YC S24)",
        text: "Having built React Native apps before,",
        highlightedText: "I know how much time you can lose in all the random details. Native Express handles all that for you",
        photo: userPhoto
      },
      {
        id: 3,
        name: "Andrei Hudovich",
        title: "Indie Maker @AndreiHudovich",
        text: "As a web developer building my first app, this boilerplate made my life so much easier.",
        highlightedText: "It was super easy to set up and understand, saving me countless hours. The close support from Robin was invaluable.",
        photo: userPhoto
      },
    {
        id: 4,
        name: "Shiv Kumar",
        title: "CTO at StackAuth ( YC S24)",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit id excepturi, fugit quas corrupti expedita, quos nostrum veniam ad non eius praesentium tempora, incidunt dolores?",
        highlightedText: "It was super easy to set up and understand, saving me countless hours. The close support from Robin was invaluable.",
        photo: userPhoto
    },
    {
        id: 5,
        name: "Janah Doel",
        title: "CEO at TechWorld",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula.",
        highlightedText: "It was super easy to set up and understand, saving me countless hours. The close support from Robin was invaluable.",
        photo: userPhoto
    },
    {
        id: 6,
        name: "Johnny Smith",
        title: "Developer at OpenSourceHub",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
        highlightedText: "It was super easy to set up and understand, saving me countless hours. The close support from Robin was invaluable.",
        photo: userPhoto
    }
]


const Testimonial = () => {
    return (
        <div className='flex flex-row mt-20 mb-10 justify-center'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                className="mySwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                {testimonials.map((testimonial) => (

                    <SwiperSlide key={testimonial.id}>
                        <Card
                            key={testimonial.id}
                            name={testimonial.name}
                            title={testimonial.title}
                            text={testimonial.text}
                            photo={testimonial.photo}
                            highlightedText={testimonial.highlightedText}
                        />
                    </SwiperSlide>

                ))}
            </Swiper>


        </div>


    )
}

export default Testimonial