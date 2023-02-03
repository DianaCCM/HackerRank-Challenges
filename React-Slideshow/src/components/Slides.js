import React, { useState } from 'react';

function Slides({slides}) {
    const [restartSlides, setRestartSlides] = useState(false);
    const [nextSlide, setNextSlide] = useState(true);
    const [prevSlide, setPrevSlide] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const size = slides.length;

    const restart = () => {
      setRestartSlides(false);
      setNextSlide(true);
      setCurrentSlide(0);
      setPrevSlide(false);
    }

    const next = () => {
      setCurrentSlide(currentSlide+1);
      setNextSlide(currentSlide < size-2 ? true : false)
      setPrevSlide(true);
      setRestartSlides(true);
    }

    const previous = () => {
      setNextSlide(true)
      setPrevSlide(currentSlide > 1 ? true : false);
      setRestartSlides(currentSlide > 1 ? true : false);
      setCurrentSlide(currentSlide-1);
    }


    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={!restartSlides}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previous} disabled={!prevSlide}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next} disabled={!nextSlide}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides && slides[currentSlide].title}</h1>
                <p data-testid="text">{slides && slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
