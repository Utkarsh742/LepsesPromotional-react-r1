import React from 'react'
import './Team.css'
import right from '.././assets/right-bg-decor.svg'

const Team = () => {
   
 
React.useEffect(() => {
  const script = document.createElement("script");
  script.innerHTML = `
     
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
`
document.body.appendChild(script)
}, [])

  return (
      <div className='Teamcover' id='Team' data-aos="fade-right">
          <img className='moveme'src={right} alt="" />
         <div className='movesection' >
          <div className='headersection'>
              <h2>Team behind <span>LEPSES</span></h2>
              <p>We are students of 2nd year buliding the next wave of networking and education.</p>
          </div>
    <div className="slide-container swiper" >
    <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">Aditya Singh</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">Sarveshwar Shukla</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">Utkarsh Dwivedi</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">PremRaj Kunwar</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">Stuti Jha</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">Aniket</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src="https://freesvg.org/img/hombre-hello-remix-cyberscooty.png" alt="" className="card-img" />
                    </div>
                </div>

                <div className="card-content">
                    <h2 className="name">Abhishek</h2>
                    <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                    <button className="button">View More</button>
                </div>
            </div>
           
        </div>
    </div>

    <div className="swiper-button-next swiper-navBtn"></div>
    <div className="swiper-button-prev swiper-navBtn"></div>
    <div className="swiper-pagination"></div>
</div>
</div>
</div>
  )
}

export default Team