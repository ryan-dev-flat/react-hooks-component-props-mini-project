import React from "react";

function About({ image = "https://picsum.photos/id/237/200/300", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
