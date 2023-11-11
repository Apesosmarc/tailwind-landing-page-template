import { PURPLE_OVERLAY } from "@/constants";

export default function Hero() {
  return (
    <section className="relative h-screen flex justify-center">
      <div className="video-container min-w-full relative h-full object-cover">
        <div
          style={{ backgroundColor: PURPLE_OVERLAY }}
          className="overlay h-full w-full absolute top-0 left-0 opacity-30"
        ></div>
        <video
          autoPlay
          playsInline
          muted
          loop
          controls={false}
          id="backgroundVideo"
          poster="mj4d-background-thumb.png"
          className="min-w-full absolute h-full object-cover -z-1"
        >
          <source src="/videos/hero_vid.mp4" type="video/webm"></source>
          <source src="/videos/hero_vid.mp4" type="video/mp4"></source>
          {/* /* MP4 needs to be H264 encoded for Safari compat; see https://developer.apple.com/documentation/webkit/delivering_video_content_for_safari */}
        </video>
      </div>

      {/* Socials*/}
      <div className="absolute top-20 w-full flex flex-col justify-center items-center">
        <img
          src="/images/GM-Logo_multicolor.png"
          alt="Guess Method Main Logo"
          className="hero-logo mb-12 lg:w-1/4 md:w- 2/4 w-1/2"
        />
        <nav
          className="
            links      
            w-full
            flex
            justify-center
            gap-10
          "
        >
          <a
            href="https://open.spotify.com/artist/1wJqYDH9LsyTL8HQstd6CD?si=c4s19_FJSW-rKf9g3l2NDQ&fbclid=IwAR3ESsAfRbepxBAKqhO2P8Fzbxf8vzU1GGHBX194-I2RCtVHl10mHHM09uM"
            target="_blank"
          >
            <img
              className="lg:w-14 lg:h-14 w-12 h-12"
              src="images/socials/spotify.png"
              alt="link to Guess Method spotify profile"
            />
          </a>
          <a href="https://www.facebook.com/search/top?q=pipin" target="_blank">
            <img
              className="lg:w-14 lg:h-14 w-12 h-12"
              src="images/socials/facebook.png"
              alt="link to Guess Method Facebook profile"
            />
          </a>
          <a href="https://www.instagram.com/pipin.hot.music/" target="_blank">
            <img
              className="lg:w-14 lg:h-14 w-12 h-12"
              src="images/socials/instagram.png"
              alt="link to Guess Method instagram profile"
            />
          </a>
        </nav>
      </div>
    </section>
  );
}
