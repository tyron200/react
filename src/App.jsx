import React, { useState } from 'react';
import Counter from "./Counter";
// // const LikeButton = () => {
// //   const [liked, setLiked] = useState(false);
// //   const [likeCount, setLikeCount] = useState(5);

// //   const handleLikeClick = () => {
// //     if (!liked) {
// //       setLiked(true);
// //       setLikeCount(likeCount + 1);
// //     }
// //   };

// //   return (
// //     <div>
// //       {liked ? (
// //         <p>Liked! <span role="img" aria-label="heart">❤️</span> {likeCount}</p>
// //       ) : (
// //         <button onClick={handleLikeClick}>
// //           Like <span role="img" aria-label="heart">❤️</span> {likeCount}
// //         </button>
// //       )}
// //     </div>
// //   );
// // };


// export default LikeButton;

// // 

const App= () => {
  const [count, setCOUNT] = useState(0);

  const handleIncrement = () => {
    setCOUNT(count + 1);
  }

  const handleDecrement = () => {
    setCOUNT(count - 1);
  }

  return(
    <>
    <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count} />
    </>
  );
  
}

export default App
