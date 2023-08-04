import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative h-screen">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>

        </svg>
      </div>

      <video
          autoPlay
          playsInline
          muted
          loop
          controls={false}
          id="backgroundVideo"
          poster="mj4d-background-thumb.png"
          className="min-w-full absolute h-full object-cover"
        >
          <source src="/videos/hero_vid.mp4" type="video/webm"></source>
          <source src="/videos/hero_vid.mp4" type="video/mp4"></source>
          {/* MP4 needs to be H264 encoded for Safari compat; see https://developer.apple.com/documentation/webkit/delivering_video_content_for_safari */}
        </video>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-40 pb-12 md:pt-90 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-4 md:pb-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">idk lol</span>
            <br></br>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">lmao</span>
            </h1>
          </div>

        </div>
      </div>
    </section>
  )
}