import React from "react";

function Home() {
  return (
    <section className="main-section">
      <a href="" className="logo"></a>
      <div className="slider">
        <div className="slide active">
          <div className="slide-images">
            <img
              src="https://scontent.flim1-2.fna.fbcdn.net/v/t39.30808-6/291039981_7699501173454966_3577399229605085077_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGnJmc91lvianttrRs4FisehAntE71hc3uECe0TvWFzewlt4vVy73TDQpeMV-XGGj8Zekg4c5UxWp2wPp8Y9YbW&_nc_ohc=aFIats15je4Q7kNvgF9-JB_&_nc_ht=scontent.flim1-2.fna&oh=00_AYDHVnn9yNOR6E9iR9NX_9YzOoxoRgnndgbBgA5gIClwYA&oe=66977127"
              alt="EspaceX"
              className="slide-bg-img"
            />
            <h1 className="an-name">SISTEMAS</h1>
          </div>
          <div className="slide-text-content">
            <h3 className="slide-caption">INGENIERÍA DE </h3>
          </div>
        </div>
      </div>

      <div className="h-screen w-full"></div>
    </section>
  );
}

export default Home;
