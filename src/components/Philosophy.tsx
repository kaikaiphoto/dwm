import { motion } from "motion/react";
import { Quote, Heart, Feather, ShieldCheck } from "lucide-react";

export default function Philosophy() {
  const principles = [
    {
      title: "琴人合一 · 融通天人",
      icon: <Heart className="w-5 h-5" />,
      text: "二胡结构质朴，以竹木为琴杆，蒙蟒皮为共鸣，两根钢弦。它看似简单，其材质却融草木兽皮之灵。演奏者不应将琴视为客观工具，而当视其为躯体之延伸、呼吸之共鸣。手指、弓毛、蟒皮、空气、心神，在揉弦和运弓中浑然一体，琴声方能直指人心。",
    },
    {
      title: "气韵生动 · 虚实相生",
      icon: <Feather className="w-5 h-5" />,
      text: "中国传统艺术不尚机械、冰冷之完美，而尚“气韵”与“骨骼”。一弓拂过，力道有虚实交错、吞吐徐疾；一指揉动，音域有宽窄起伏、情感跌宕。无声处的“留白”与渐弱处的“气声”，往往比饱满的音符更具说服力。这是属于东方美学的写意留白与大音希声。",
    },
    {
      title: "守正创新 · 融汇古今",
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "师从名家使我获得传统国乐最纯正的血液，但艺术从不停滞。在上海民族乐团的首席生涯中，我深入钻研传统与现代大型交响乐的律动章法。真正的传承当是‘守正而不泥古，创新而不忘本’。既能深刻还原古乐的江南神韵，亦能在现代协奏曲中拓宽二胡的表达张力。",
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 bg-silk-100 relative overflow-hidden bg-silk-grain"
    >
      {/* Absolute traditional calligraphy elements for decoration (using vertical text) */}
      <div className="absolute left-10 top-1/4 hidden xl:block select-none pointer-events-none opacity-20 hover:opacity-40 transition-opacity duration-500">
        <p className="font-serif text-3xl text-gold-600 tracking-[0.4em] uppercase writing-vertical font-black">
          以心运指 · 以琴传神
        </p>
      </div>

      <div className="absolute right-12 bottom-1/4 hidden xl:block select-none pointer-events-none opacity-20 hover:opacity-40 transition-opacity duration-500">
        <p className="font-serif text-3xl text-gold-600 tracking-[0.4em] uppercase writing-vertical font-black">
          大音希声 · 弦里乾坤
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase">
            Artistic Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900 mt-2 tracking-widest">
            艺术理念
            <span className="block w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
          </h2>
          <p className="font-serif text-sm text-ink-600 mt-4 max-w-xl">
            对琴弓的掌控，即是对人生的投射。在弦与指的触碰中，感知生命、历史与自然。
          </p>
        </div>

        {/* Bento/Grid Layout for Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Giant Quote Block (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-silk-50 p-8 md:p-10 border border-silk-200 shadow-sm rounded-sm relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-400" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-400" />

            <div className="space-y-6">
              <Quote className="w-12 h-12 text-gold-400/50" />
              <blockquote className="font-serif text-xl md:text-2xl text-ink-900 font-medium tracking-widest leading-relaxed text-justify-chinese">
                “二胡之所以能催人泪下，因其弓毛夹在两弦中央，推拉皆有阻力，皆需倾注气力。此正如人生，于夹缝求声，于逆境歌咏。拉好一把二胡，实则是与天地往来的一场修行。”
              </blockquote>
            </div>

            <div className="mt-8 border-t border-silk-200 pt-6">
              <p className="font-serif text-sm font-bold text-ink-900">— 邓伟民</p>
              <p className="font-serif text-xs text-ink-600 mt-1 uppercase tracking-widest">
                一级演奏员 · 艺术思考
              </p>
            </div>
          </div>

          {/* Three core pillars of philosophy (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {principles.map((p, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-silk-50 p-6 md:p-8 border border-silk-200/60 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 relative group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gold-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white rounded-sm transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300 tracking-wider">
                    {p.title}
                  </h3>
                </div>
                <p className="font-serif text-xs md:text-sm text-ink-700 leading-relaxed text-justify-chinese">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Calligraphic quote stamp at bottom */}
        <div className="mt-16 bg-gold-50/50 border border-gold-300/10 p-6 rounded-sm text-center max-w-3xl mx-auto">
          <p className="font-serif text-base text-gold-800 tracking-widest italic">
            “以心运指，以琴传神，让古老的两弦乐器在当代世界焕发出直击心灵的雅正之音。”
          </p>
        </div>

      </div>
    </section>
  );
}
