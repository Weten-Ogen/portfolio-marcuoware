import Image from "next/image"
import hero_banner from '/public/about-banner.png'

const About = () => {
  return (
    <div className="max-w-5xl mt-16 border shadow-xl rounded-md border-slate-300 mx-auto py-20 md:grid md:grid-cols-2 gap-1">
      <div className="p-5 object-cover max-w-md mx-auto">
        <Image className="text-teal-500" src={hero_banner} alt='hero-banner'/>
      </div>
      <div className="max-w-md p-5 mx-auto">
        <h2 className="capitalize leading-9 mb-4 text-teal-600 text-3xl">about me</h2>
          <p className="py-3 text-slate-600 text-md">
            In 1935 novelist Eiji Yoshikawa (1892 – 1962)     changed the martial arts world when he published his epic Musashi, a fictionalized account of the adventures of Miyamoto Musashi which was serialized in the newspaper Asahi Shimbun. The legendary swordsman was well known to practitioners of classical Japanese swordsmanship, but virtually no one had heard of Musashi beyond that fellowship. Certainly he was not the mythic figure we think we
          know today, one who has been portrayed in books, movies, manga,and comics to the point where he has become a household name farbeyond the traditional martial arts community.
        </p>
      </div>
    </div>
  )
}

export default About
