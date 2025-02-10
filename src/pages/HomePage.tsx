import Header from "../components/Header";

const HomePage = () => (
  <div className="main-div">
    <Header />
    <main className="main-home">
      <article className="main-home__top">
        <div className="main-home__top-image-wrapper">
          <img
            className="main-home__top-image"
            src="https://sun9-53.userapi.com/s/v1/ig2/6-LWteAv8LqwVamQ3lkyhs-b0L20UEFTWM5i28bOBZONljZOFNZSu6D5aYCIZXht5Vz8E7sicyxYAqbIPl2l31zy.jpg?quality=96&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1814x1020&from=bu&u=JeXYK1aO3KrXBpiQOIXCc56vZ8Uvwz1HLJTwlQRZw40&cs=1814x1020"
            alt="аниме"
          />
          <h1 className="main-home__top-image-title">Какая-то хуйня</h1>
        </div>
      </article>
      <article className="main-home__mid">
        <p>место для ещё какой нибудь хуйни</p>
      </article>
    </main>
  </div>
);

export default HomePage;
