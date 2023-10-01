import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";

export const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <>
      {ratingArray.map((value, index) =>
        value ? (
          <BsFillStarFill
            key={index}
            className="text-lg text-yellow-500 mr-1"
          />
        ) : (
          <AiOutlineStar key={index} className="text-lg text-yellow-500 mr-1" />
        )
      )}
    </>
  );
};
