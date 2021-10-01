import { useState } from 'react';
import './styles.scss';

const StarRating = function () {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="stars">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={"stars__button " + (index <= (hover || rating) ? "on" : "off")}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="stars__star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
}

export default StarRating;