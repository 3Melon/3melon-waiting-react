import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="heading">The Blog</h1>
      <div className="featured">
        <Image
          src="https://picsum.photos/seed/picsum/1600/900"
          width={360}
          height={280}
          layout="fixed"
        ></Image>
        <div className="ft-container">
          <p className="date">12th June 2022</p>
          <h2 className="ft-title">NFT 2.0 is here! Check it out!</h2>
          <p className="ft-description">
            NFT 2.0 is here, what are your thoughts about it? Let's look at this
            in this blog and if SBTs would be the future of web3?
          </p>
        </div>
      </div>
      <div className="blog-grid">
        <div className="blog-container"></div>
        <div className="blog-container"></div>
      </div>
    </div>
  );
};

export default Blog;
