import { useState, useEffect } from 'react';

const Timer = ({limitDate}) => {
    const calculateTimeLeft = () => {
        let diff = limitDate - new Date();
        let timeLeft = {};

        if (diff >= 1000) {
            timeLeft.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            timeLeft.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeLeft.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            timeLeft.seconds = Math.floor((diff % (1000 * 60)) / 1000);
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div className="flex shrink-0">
            <div className="relative bg-white p-16 rounded-2xl shadow-lg text-center overflow-hidden">
                {Object.keys(timeLeft).length > 0 ? (
                    <div>
                        <div className="relative z-10">
                            <p className="text-black text-lg font-semibold font-mono">
                                {String(timeLeft.hours).padStart(2, '0')}:
                                {String(timeLeft.minutes).padStart(2, '0')}:
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </p>
                        </div>

                        <div className="absolute inset-0 flex items-center z-0 justify-center w-full h-full">
                            {timeLeft.days > 99 ? (
                                <div className="flex flex-col items-center w-full pb-5">
                                    <span className="text-9xl font-bold text-gray-800 opacity-20 pb-0 mb-0 leading-none">
                                        {String(timeLeft.days).padStart(2, '0')}
                                    </span>
                                    <span className="text-2xl font-bold text-gray-800 opacity-20 mt-0 pt-0 leading-none">
                                        days
                                    </span>
                                </div>
                            ) : (
                                <>
                                    <span className="text-9xl font-bold text-gray-800 opacity-20 pb-3">
                                        {String(timeLeft.days).padStart(2, '0')}
                                    </span>
                                    <span
                                        className="text-2xl font-bold text-gray-800 opacity-20"
                                        style={{ transform: 'rotate(-90deg)' }}
                                    >
                                        days
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <p className="text-lg font-semibold text-red-500 z-10 relative">Time is up!</p>
                )}
            </div>
        </div>
    );
}

export default Timer;
