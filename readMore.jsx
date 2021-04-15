import React, { useState } from "react";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span><button onClick={toggleReadMore} >
        {isReadMore ? "...read more" : " show less"}</button>
      </span>
    </p>
  );
};
  
const Content = () => {
  return (
    <div className="container">
    <ReadMore>
        The endless sky faded and grew darker. Of course it stopped where the Earth abruptly cuts it off. Even then the sky had something remarkable about it. Something about its darkness and stormy clouds drew my attention. I noticed the first few droplets of water begin to fall on the cracked and ashy street. Then I felt the drops of cold rain hit the back of my head and neck. The water ran down my face. The rain began falling heavier, clearing some of the filth and ash on the sidewalk. The chilling rain was almost a breath of fresh air; it had not rained in quite some time. There was something about the gentle pitter-patter of the droplets. I was almost at peace but alas I could not relax. If anyone was alive on this planet I had to find them. I looked at the empty road ahead devoid of life. I had to continue my journey even if I knew not where I was going.!
        </ReadMore>
    
    </div>
  );
};
  
export default Content;