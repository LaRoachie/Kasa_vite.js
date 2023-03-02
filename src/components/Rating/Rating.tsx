import "./style.scss"

interface RatingProps {
    score: any
}

export default function Rating({ score }: RatingProps) {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rate-comp">
            {stars.map((level) =>
                score >= level ? (
                    <img
                        key={level.toString()}
                        className="star"
                        src="/src/assets/fullStar.svg"
                        alt="rating star"
                    />) : (
                    <img
                        key={level.toString()}
                        className="star"
                        src="/src/assets/emptyStar.svg"
                        alt="rating star"
                    />
                )
            )}
        </div>
    );
}