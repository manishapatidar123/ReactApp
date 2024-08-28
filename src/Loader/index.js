// import React, { useEffect, useState } from 'react';
 



// function Loader() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const texts = ["Loading...", "Please wait...", "Preparing your experience...", "Almost there..."]; 

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//         }, 250);

//         return () => clearInterval(interval);
//     }, [texts.length]);

//     return (
//         <div className="loader loop-text bg-black text-white min-h-screen flex items-center justify-center">
//             <div className='flex items-center justify-center w-full h-full'>
//                 {texts.map((text, index) => (
//                     <p 
//                         key={index} 
//                         className={`text-3xl transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//                     >
//                         {text}
//                     </p>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Loader;
import React, { useEffect, useState } from 'react';

function Loader() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["Loading...", "Please wait...", "Preparing your experience...", "Almost there..."]; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);  // Adjust the interval as needed

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="loader loop-text bg-black text-white min-h-screen flex items-center justify-center">
            <div className='flex items-center justify-center w-full h-full'>
                <p className="text-3xl">
                    {texts[currentIndex]}
                </p>
            </div>
        </div>
    );
}

export default Loader;
