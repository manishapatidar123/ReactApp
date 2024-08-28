import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './Marquee.css';
import { Col, Container, Navbar, Nav, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnimatedLetters from './AnimatedLetters'
import NumberCounter from 'number-counter';
import { useInView } from 'react-intersection-observer';
// import 'animate.css';
import Loader from './Loader';
import bannertopleft from './images/banner-top-left.png';
import bannercircleimg from './images/banner-circle-img.png';
import videoSectionImage from './images/video-section.png';
import aboutimage from './images/about_image.png';
import bannertopright from './images/banner-top-right.jpg';
import bannerrimg from './images/bannerimg.png';
import BornWalks from './images/BornWalks.png';
import boxflip from './images/box-flip.svg';
import cannabies from './images/Cannabies.png';
import duckcard from './images/DuckCard.png';
import erides from './images/eRides.png';
import expcodiant from './images/exp-codiant.svg';
import expfaizstudio from './images/exp-faizstudio.svg';
import expfriends from './images/exp-friends.svg';
import exppixbrand from './images/exp-pixbrand.svg';
import exppxper from './images/exp-pxper.svg';
import firstmobile from './images/first-mobile.png';
import first from './images/first.png';
import footerbtmshap from './images/footer-btm-shap.svg';
import funflix from './images/FunFlix .png';
import groshoppy from './images/GroShoppy.png';
import hey from './images/hey .svg';
import megamover from './images/MegaMover.png';
import primwork from './images/PrimWork.png';
import quickbites from './images/QuickBites.png';
import secondmobile from './images/second-mobile.png';
import second from './images/second.png';
import shoegallery from './images/ShoeGallery .png';
import taqizaweb from './images/Taqiza-Web.png';
import thankyou from './images/thankyou.png';
import thearbian from './images/The-Arabian.png';
import theastro from './images/TheAstro.png';
import thirdmobile from './images/third-mobile.png';
import third from './images/third.png';
import yuval from './images/Yuval.png'


function Home() {

    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['W', 'o', 'r', 'k']
    const ourArray = ['O', 'u', 'r']
    const caseArray = ['C', 'a', 's', 'e', 'S', 't', 'u', 'd', 'y']
    const expArray = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const stickyRef = useRef(null);

    useEffect(() => {
        // Adding scroll event listener
        document.addEventListener('scroll', horizontalScroll);

        return () => {
            // Cleanup: Remove the scroll event listener when the component unmounts
            document.removeEventListener('scroll', horizontalScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount

    const horizontalScroll = () => {
        const sticky = stickyRef.current;

        if (!sticky) {
            return; // Guard against accessing properties on a null element
        }

        const stickyPosition = sticky.getBoundingClientRect().top;

        if (stickyPosition > 1) {
            return;
        } else {
            const stickyParent = document.querySelector('.sticky-parent');
            const scrolled = stickyParent.getBoundingClientRect().top;
            sticky.scrollLeft = (sticky.scrollWidth / (stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height)) * (-scrolled) * 0.85;
        }
    };
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5, // 50% visibility threshold
    });

    useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
            setLoading(false); // Set loading to false once data is fetched
            setTimeout(() => {
                setIsVisible(true);
            }, 400);
        }, 3500); // Simulating a 2-second delay
    }, []);
    return (
        <>
            {loading ? <Loader className={loading ? '' : 'hidden'} /> :
                <>
                    <main className={`content ${isVisible ? 'visible' : ''}`}>

                        <div className="bg-black text-white font-sans text-base leading-[22px] relative">
                            <header className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
                                <nav className="bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-between p-4 rounded-lg">
                                    <div className="hidden md:block">
                                        <em className="icon icon-menu-alt text-white text-xl"></em>
                                    </div>
                                    <div className="flex space-x-8">
                                        <a href="#home" class="text-white hover:text-yellow-500 text-xl font-semibold">Home</a>
                                        <a href="#about" class="text-white hover:text-yellow-500 text-xl font-semibold">About</a>
                                        <a href="#casestudy" class="text-white hover:text-yellow-500 text-xl font-semibold">CaseStudy</a>
                                        <a href="#experience" class="text-white hover:text-yellow-500 text-xl font-semibold">Experience</a>
                                        <a href="#contact" class="text-white hover:text-yellow-500 text-xl font-semibold">Contact</a>
                                    </div>
                                    <div className="hidden md:block">
                                        <img src={boxflip} alt="box-flip" class="w-auto h-8" />
                                    </div>
                                </nav>
                            </header>
                            <section className="relative" id="home">
                                <div className="container ">
                                    <div className="absolute left-0 mt-10 w-40 h-auto  transform -translate-y-1/2">
                                        <p className="mb-0 text-sm text-gray-500">Luxeliving - Web UI</p>
                                        <img src={bannertopleft} alt="banner-top-left" className="mt-20 ml-10 h= " />
                                        <p className="mb-0 text-sm ml-10 text-gray-500">Luxeliving - Web UI</p>
                                    </div>
                                    <div className="text-center">
                                        <h1 className="text-4xl font-bold">
                                            <img src={hey} alt="hey" className="inline-block" /> Buddy.. <br />
                                        </h1>
                                        <h1 className="text-4xl font-bold">
                                            I am Faizan Ahmed<br />UIUX Designer
                                        </h1>
                                        <div className="relative mt-8">
                                            <Link to="/project6">
                                                <img src={bannerrimg} alt="bannerimg" className="mx-auto" />
                                            </Link>
                                            <div className="absolute inset-0 flex justify-center items-center">
                                                <img src={bannercircleimg} alt="banner-circle-img" className="h-48 w-48 object-cover rounded-full animate-spin"
                                                />
                                            </div>


                                        </div>
                                        <p className="mt-8 text-2xl text-gray-400">
                                            I'm a selectively <span className="font-semibold text-white ">skilled product designer</span> <br />
                                            with strong focus on producing <span className="font-semibold text-blue-600">high quality</span> & <br />
                                            impactful <span className="font-semibold text-orange-500">digital experience.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute w-40 right-0 top-1/4 transform -translate-y-1/2">
                                    <img src={bannertopright} alt="banner-top-right" className="img-fluid ml-4" />
                                    <p className="mb-0 text-lg text-white mt-2">Taquiza - Web UI</p>
                                </div>
                                <div className="text-center mt-16">
                                    <div className="relative inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="257.258" height="588.582" viewBox="0 0 257.258 588.582">
                                            <path className={`path ${inView ? 'animate' : ''}`} id="Path_121133" data-name="Path 121133" d="M2393.107-7656.02s186.351-5.41,216.408-5.41,67.327-19.237,0-16.231-163.4,24.857-138.561,51.588,45.673,26.52,45.673,26.52-75.77-22.31-43.568,6.1,133.543,130.161,78.054,178.714-137.335,110.515-110.516,228.43c7.992,35.139,40.04,65.154,47.617,93.568" transform="translate(-2391.565 7679.483)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                                        </svg>
                                    </div>
                                </div>
                            </section>
                            <section className="aboutUs py-24" id="about">
                                <div className="container mx-auto px-4">
                                    <div className="aboutUs_text text-center mb-12">
                                        <h2 className="text-5xl font-bold text-white">
                                            Transforming ideas into captivating
                                            <img src={aboutimage} className="inline-block ml-2 w-40 h-20" alt="aboutus" />
                                            realities, I sculpt seamless digital journey with a fusion of innovation & elegance
                                        </h2>
                                    </div>

                                    <div className="flex flex-wrap justify-around">
                                        {/* Counter 1 */}
                                        <div className="lg:w-1/4 text-center mb-8">
                                            <img src={first} className="hidden lg:block w-full mb-4" alt="counter-top-img" />
                                            <img src={firstmobile} className="block lg:hidden w-full mb-4" alt="counter-top-img" />
                                            <h2 className="text-9xl font-bold text-white inline-flex items-center">
                                                <NumberCounter start={0} end={80} delay={3} className="increment" /><span>+</span>
                                            </h2>
                                            <p className="text-[1.25rem] leading-7 text-gray-400 font-thin mt-4">
                                                years of unwavering passion, I am a skilled UI/UX designer dedicated to creating immersive digital experiences.
                                            </p>
                                        </div>

                                        {/* Counter 2 */}
                                        <div className="lg:w-1/4 text-center mb-8">
                                            <img src={second} className="hidden lg:block w-full mb-4" alt="counter-top-img" />
                                            <img src={secondmobile} className="block lg:hidden w-full mb-4" alt="counter-top-img" />

                                            <h2 className="text-9xl font-bold text-white inline-flex items-center">
                                                0<NumberCounter start={0} end={1} delay={2} className="increment" /><span className='text-5xl'>K+</span>
                                            </h2>
                                            <p className="text-[1.25rem] leading-7 text-gray-400 font-thin mt-4">
                                                Each project reflects a commitment to excellence and innovation in design.
                                            </p>
                                        </div>

                                        {/* Counter 3 */}
                                        <div className="lg:w-1/4 text-center mb-8">
                                            <img src={third} className="hidden lg:block w-full mb-4" alt="counter-top-img" />
                                            <img src={thirdmobile} className="block lg:hidden w-full mb-4" alt="counter-top-img" />

                                            <h2 className="text-9xl font-bold text-white inline-flex items-center">
                                                <NumberCounter start={0} end={50} delay={3} className="increment" /><span>+</span>
                                            </h2>
                                            <p className="text-[1.25rem] leading-7 text-gray-400 font-thin mt-4">
                                                Building strong connections & fostering a positive work environment are integral to my approach in collaborative projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='videoSec py-100 pt-0'>
                                <Container>
                                    <img src={videoSectionImage} alt="Video Section" />

                                </Container>
                            </section>
                            <section className="caseStudy py-20 bg-black text-white" id="casestudy">
                                <div className="container mx-auto">
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-2/3">
                                            <div className="commonHead">
                                                <h2 className="commonHead_title text-8xl font-bold">
                                                    {/* "Our" text split into individual spans */}
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        O
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        u
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        r
                                                    </span>{' '}
                                                    <br ></br>
                                                    {/* "CaseStudy" text split into individual spans */}
                                                    <span className="ml-16 hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        C
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        a
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        s
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        e
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        S
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        t
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        u
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        d
                                                    </span>
                                                    <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                        y
                                                    </span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/3">
                                            <div className="commonHead">
                                                <h2 className="commonHead_subtitle">
                                                    <p className="text-lg leading-10">
                                                        {/* Text for the description split into individual spans */}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            Explore
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            latest
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            casestudy
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            showcasing
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            how
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            innovative
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            solutions
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            transformed
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            challenges
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            into
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            success
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            stories
                                                        </span>{' '}
                                                        <span className="hover:scale-110 hover:text-red-500 transition-transform duration-300 ease-in-out inline-block">
                                                            seamlessly.
                                                        </span>
                                                    </p>
                                                    <Link to="#" className="commonHead_link mt-4 inline-block text-lg font-semibold underline">
                                                        Learn more <span className="icon icon-arrow-right ml-2 inline-block">&rarr;</span>
                                                    </Link>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div class="flex space-x-4 overflow-x-scroll scrollbar-hide mt-20">

                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={duckcard} class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">DuckCard</p>
                                </div>


                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={shoegallery} alt="ShoeGallery" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">ShoeGallery</p>
                                </div>


                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={taqizaweb} alt="Taqiza-Web" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">Taqiza-Web</p>
                                </div>


                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={thearbian} alt="The-Arabian" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">The-Arabian</p>
                                </div>

                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={primwork} alt="PrimWork" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">PrimWork</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={BornWalks} alt="BornWalks" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">BornWalks</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={cannabies} alt="Cannabies" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">Cannabies</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={erides} alt="E-Rides" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">E-Rides</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={funflix} alt="FunFlix" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">FunFlix</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={megamover} alt="MegaMover" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">MegaMover</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={quickbites} alt="QuickBites" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">QuickBites</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={theastro} alt="TheAstro" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">TheAstro</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={yuval} alt="Yuval" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">Yuval</p>
                                </div>
                                <div class="relative group w-full h-96 transform transition duration-300 ease-in-out hover:-rotate-6">
                                    <img src={groshoppy} alt="Groshoppy" class="w-full h-full object-cover rounded-lg" />
                                    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-lg"></div>
                                    <p class="absolute bottom-4 left-4 text-white font-bold">Groshoppy</p>
                                </div>
                            </div>


                            {/* Work Experience section  */}
                            <section className='workedExp py-100' id="experiece">
                                <Container>
                                    <section class="py-24" id="experience">
                                        <div class="container mx-auto">
                                            <div class="flex flex-wrap">

                                                <div class="w-full md:w-2/3">
                                                    <div class="mb-8">

                                                        <h2 class="text-8xl font-bold flex space-x-1">

                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">W</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">o</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">r</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">k</span>
                                                        </h2>


                                                        <br></br>
                                                        <h2 class="text-8xl font-bold flex space-x-1 ml-16">
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">E</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">x</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">p</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">e</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">r</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">i</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">e</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">n</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">c</span>
                                                            <span class="transition transform duration-300 ease-in-out hover:text-purple-500 hover:scale-110">e</span>
                                                        </h2>


                                                    </div>
                                                </div>

                                                <div class="w-full md:w-1/3">
                                                    <div>
                                                        <h2 class="text-lg font-normal">
                                                            <p class="text-gray-400 mb-4">I've crafted delightful digital journeys. From sketch to screen, I've transformed ideas into user-friendly designs.</p>
                                                            <a href="#" class="text-white underline flex items-center">
                                                                Learn more
                                                                <svg class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7" /></svg>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>


                                    <div class="flex justify-end">
                                        <div class="w-full lg:w-11/12 xl:w-3/4">
                                            <ul class="list-none p-0">

                                                <li class="mb-4">
                                                    <div class="grid grid-cols-12 items-start">
                                                        <div class="col-span-12 md:col-span-5 flex items-start">
                                                            <div class="mr-4">
                                                                <img src={expcodiant} className='img-fluid' alt="codiant-logo" />
                                                            </div>
                                                            <div>
                                                                <p class="mb-0">Codiant Software Technologies Pvt. Ltd.</p>
                                                                <div class="md:hidden">
                                                                    <p class="text-sm mb-1">Sr. UIUX Designer</p>
                                                                    <p class="text-sm">Oct 2021 - Present</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-3 hidden md:block">
                                                            <p class="text-sm">Sr. UIUX Designer</p>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-4 hidden md:block">
                                                            <p class="text-sm">Oct 2021 - Present</p>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li class="mb-4">
                                                    <div class="grid grid-cols-12 items-start">
                                                        <div class="col-span-12 md:col-span-5 flex items-start">
                                                            <div class="mr-4">
                                                                <img src={exppixbrand} className='img-fluid' alt="pixbrand-logo" />
                                                            </div>
                                                            <div>
                                                                <p class="mb-0">Pix Brand Private Limited</p>
                                                                <div class="md:hidden">
                                                                    <p class="text-sm mb-1">Sr. UIUX Designer</p>
                                                                    <p class="text-sm">Sep 2020 - Oct 2021</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-3 hidden md:block">
                                                            <p class="text-sm">Sr. UIUX Designer</p>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-4 hidden md:block">
                                                            <p class="text-sm">Sep 2020 - Oct 2021</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="mb-4">
                                                    <div class="grid grid-cols-12 items-start">
                                                        <div class="col-span-12 md:col-span-5 flex items-start">
                                                            <div class="mr-4">
                                                                <img src={expfaizstudio} className='img-fluid' alt="faizstudio-logo" />
                                                            </div>
                                                            <div>
                                                                <p class="mb-0">FabStudio ( Freelance Design )</p>
                                                                <div class="md:hidden">
                                                                    <p class="text-sm mb-1">Founder & UIUX Designer</p>
                                                                    <p class="text-sm">Aug 2019 - Jul 2021</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-3 hidden md:block">
                                                            <p class="text-sm">Founder & UIUX Designer</p>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-4 hidden md:block">
                                                            <p class="text-sm">Aug 2019 - Jul 2021</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="mb-4">
                                                    <div class="grid grid-cols-12 items-start">
                                                        <div class="col-span-12 md:col-span-5 flex items-start">
                                                            <div class="mr-4">
                                                                <img src={exppxper} className='img-fluid' alt="pxper-logo" />
                                                            </div>
                                                            <div>
                                                                <p class="mb-0">PxPer by Shree KDK Enterprise</p>
                                                                <div class="md:hidden">
                                                                    <p class="text-sm mb-1">Graphic Designer & Product Designer</p>
                                                                    <p class="text-sm">Jul 2016 - Mar 2019</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-3 hidden md:block">
                                                            <p class="text-sm">Graphic Designer & Product Designer</p>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-4 hidden md:block">
                                                            <p class="text-sm">Jul 2016 - Mar 2019</p>
                                                        </div>
                                                    </div>
                                                </li>


                                                <li class="mb-4">
                                                    <div class="grid grid-cols-12 items-start">
                                                        <div class="col-span-12 md:col-span-5 flex items-start">
                                                            <div class="mr-4">
                                                                <img src={expfriends} className='img-fluid' alt="friends-logo" />
                                                            </div>
                                                            <div>
                                                                <p class="mb-0">Friends Graphics & Printing Press</p>
                                                                <div class="md:hidden">
                                                                    <p class="text-sm mb-1">Internship Trainee</p>
                                                                    <p class="text-sm">May 2013 - Mar 2016</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-3 hidden md:block">
                                                            <p class="text-sm">Internship Trainee</p>
                                                        </div>
                                                        <div class="col-span-12 md:col-span-4 hidden md:block">
                                                            <p class="text-sm">May 2013 - Mar 2016</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </Container>
                            </section>
                            {/* Footer  */}
                            <footer className='footer' id="contact">
                                <div className="marquee-container overflow-hidden">
                                    <div className="marquee-content whitespace-nowrap inline-block animate-marquee text-9xl font-bold">
                                        creativity meets functionality — creativity meets functionality — creativity meets functionality —
                                    </div>
                                </div>

                                <Container>
                                    <div className="footer_inner text-center">
                                        <h4 className="flex items-end justify-center text-5xl mb-0">
                                            Thank you
                                            <img src={thankyou} className=" text-5xl w-20 h-20 ml-3 mr-3" alt="thankyou" />
                                            for
                                        </h4>
                                        <h4 className="mt-2 text-5xl">your interest in my portfolio!</h4>
                                        <img src={footerbtmshap} className="mx-auto mt-4 w-28 h-28" alt="footer-path-img" />
                                        <Link to="#" className="btn btn-light mx-auto mt-8 flex justify-center items-center inline-block bg-white text-black text-3 w-52  h-16 py-2 px-4 rounded-full shadow hover:bg-gray-200 transition">
                                            Get in Touch <em className="icon icon-arrow-right ml-2" />
                                        </Link>

                                        <div className="footer_links mt-6">
                                            <ul className="list-none flex items-center justify-center text-5xl space-x-4">
                                                <li><Link to="https://www.linkedin.com/in/imfaizu/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-white hover:text-gray-400">Linkedin</Link></li>
                                                <li><Link to="https://dribbble.com/fabstudio_design" className="text-white hover:text-gray-400">Dribbble</Link></li>
                                                <li><Link to="https://www.behance.net/fabstudio_design" className="text-white hover:text-gray-400">Behance</Link></li>
                                                <li><Link to="https://www.instagram.com/fabstudio.design?utm_medium=copy_link" className="text-white hover:text-gray-400">Instagram</Link></li>
                                                <li><Link to="https://www.youtube.com/@fabstudio2879" className="text-white hover:text-gray-400">Youtube</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Container>

                            </footer>
                        </div>
                    </main>

                </>
            }
        </>
    )
}

export default Home;