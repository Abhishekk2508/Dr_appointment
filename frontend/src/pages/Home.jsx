import React from 'react'
import heroimg01 from '../assets/images/hero-img01.png'
import heroimg02 from '../assets/images/hero-img02.png'
import heroimg03 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/about/About'
import faqImg from '../assets/images/faq-img.png'
import ServiceList from '../components/services/ServiceList'
import featureImg from '../assets/images/feature-img.png'
import imageicon from '../assets/images/video-icon.png'
import avtarImg from '../assets/images/avatar-icon.png'
import DoctorList from '../components/doctors/DoctorList'
import FaqList from '../components/faq/FaqList'
import Tesmonomial from '../components/testmonial/Tesmonomial'

const Home = () => {
  return <>
    {/* herosection */}
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

          {/* Hero Content */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
              "Supporting Healthier Lives, Every Step of the Way."</h1>
              <Link to="/doctor"><button className='btn'>Request an Appointment</button></Link>
            </div>

            {/* hero counter */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text-para'>Years of experience</p>
              </div>


              <div>
                <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text-para'>Clinic Location</p>
              </div>


              <div>
                <h2 className='text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor '>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text-para'>Patient Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className='flex gap-[30px] justify-end'>
            <div>
              <img className="w-full" src={heroimg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroimg02} className='w-full mb-[30px]' alt="" />
              <img src={heroimg03} className='w-full' alt="" />

            </div>
          </div>
        </div>
      </div>

    </section>


    <section>
      <div className="container">
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>Providing best Medical Services</h2>
          <p className='text_para text-center'>grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] Velit eligendi numquam i</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icon1}></img>
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Doctor
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum neque magnam possimus molestiae commodi!</p>
              <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icon2}></img>
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Location
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum neque magnam possimus molestiae commodi!</p>
              <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className='flex items-center justify-center'>
              <img src={icon3}></img>
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find Appointment
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum neque magnam possimus molestiae commodi!</p>
              <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5 ' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <About />

    {/* Service Section */}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our Medical Service</h2>
          <p className="text_para text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            officiis maiores pariatur.</p>
        </div>
        <ServiceList />
      </div>
    </section>

    {/* Feature Section */}
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* Feature Content */}
          <div className="xl:w-[670px]">
            <h2 className='heading'>
              Get Virtual Treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
              <li className="text_para">
                1.Sheadule the Appointment directly
              </li>
              <li className="text_para">
                2.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="text_para">
                3.Lorem, ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit.
              </li>
            </ul>
            <Link to="/"><button className="btn">Learn More</button></Link>
          </div>


          {/* Feature Image */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className='w-3/4' alt="" />

            <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue 24
                  </p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                    10:00
                  </p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={imageicon} alt="" />
                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">Consaltation</div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avtarImg} alt="" />
                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading--[22px] font-[700] text-headingColor'>Mukesh Ambani</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our great doctors */}
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>Our Great Doctors</h2>
          <p className="text_para text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nisi doloribus
             modi magni aut fugit asperiores, distinctio eum!
          </p>
        </div>
        <DoctorList/>
      </div>
    </section>

    {/* Faq section */}
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50] lg:gap-0">
          <div className="w-1/2 hidden md:block">
          <img src={faqImg} alt="" />
          </div>

          <div className="w-full md:w-1/2">
          <h2 className='heading'>Most asked questions by our Beloved Patients</h2>
          <FaqList/>
          </div>
        </div>
      </div>
    </section>

    {/* Tesmonomial Slides */}
    <section>
    <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className='heading text-center'>What our Patients say</h2>
          <p className="text_para text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nisi doloribus
             modi magni aut fugit asperiores, distinctio eum!
          </p>
        </div>
        <Tesmonomial/>
      </div>
    </section>
  </>

}

export default Home