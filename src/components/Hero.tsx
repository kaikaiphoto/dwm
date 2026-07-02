import { motion } from "motion/react";
import { ArrowRight, Play, Award, Compass, Music2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-36 pb-20 flex items-center overflow-hidden bg-silk-50 bg-silk-grain"
    >
      {/* Decorative Traditional Asian Elements (Pure CSS/SVG) */}
      <div className="absolute top-1/4 right-[-5%] w-96 h-96 rounded-full border border-gold-300/10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-120 h-120 rounded-full border border-gold-400/5 pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-96 h-96 rounded-full border border-gold-300/10 pointer-events-none" />

      {/* Decorative vertical red "seal" */}
      <div className="absolute top-36 right-12 hidden lg:flex flex-col items-center select-none pointer-events-none">
        <div className="w-10 py-4 bg-red-700 text-white rounded-sm font-serif font-bold text-center tracking-widest text-xs shadow-md border border-red-800">
          邓
          <br />伟
          <br />民
        </div>
        <div className="h-24 w-[1px] bg-gold-400/40 my-3" />
        <span className="font-serif text-[10px] tracking-widest text-gold-600 uppercase writing-vertical font-medium">
          二胡独奏艺术
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text content (7 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-gold-50 border border-gold-300/30 text-gold-600 rounded-sm w-fit mx-auto lg:mx-0 shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span className="font-serif text-xs font-medium tracking-widest uppercase">
                国家一级演奏员
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-ink-900 tracking-widest leading-none"
              >
                邓伟民
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-gold-600 font-semibold"
              >
                Deng Weimin — Erhu Virtuoso & Concertmaster
              </motion.p>
            </div>

            {/* Core titles and credentials with bullet symbols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-silk-200 py-6 my-2 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start p-2 hover:bg-silk-100/50 rounded transition-colors duration-300">
                <Music2 className="w-4 h-4 text-gold-500 mb-1 lg:mb-2" />
                <span className="font-serif text-sm font-semibold text-ink-900 tracking-wide">
                  中国民族管弦乐学会
                </span>
                <span className="font-serif text-xs text-ink-600 mt-1">
                  常务理事
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-2 hover:bg-silk-100/50 rounded transition-colors duration-300">
                <Compass className="w-4 h-4 text-gold-500 mb-1 lg:mb-2" />
                <span className="font-serif text-sm font-semibold text-ink-900 tracking-wide">
                  上海音乐家协会
                </span>
                <span className="font-serif text-xs text-ink-600 mt-1">
                  优秀会员
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start p-2 hover:bg-silk-100/50 rounded transition-colors duration-300">
                <Award className="w-4 h-4 text-gold-500 mb-1 lg:mb-2" />
                <span className="font-serif text-sm font-semibold text-ink-900 tracking-wide">
                  原上海民族乐团
                </span>
                <span className="font-serif text-xs text-ink-600 mt-1">
                  乐队首席
                </span>
              </div>
            </motion.div>

            {/* Poetic description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-lg text-ink-700 italic leading-relaxed tracking-wider max-w-xl mx-auto lg:mx-0"
            >
              “弦弓开阖间，风云卷舒。两弦诉尽千秋意，一弓划破古今愁。”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#bio"
                className="w-full sm:w-auto px-8 py-3.5 bg-ink-900 hover:bg-gold-600 text-silk-50 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 font-serif text-sm tracking-widest shadow-lg rounded-sm"
              >
                <span>探索艺术巅峰</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#artistry"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-silk-100 border border-ink-900/30 text-ink-900 hover:border-ink-900 transition-all duration-300 flex items-center justify-center space-x-2 font-serif text-sm tracking-widest rounded-sm"
              >
                <Play className="w-4 h-4 fill-current text-ink-700" />
                <span>赏析二胡之美</span>
              </a>
            </motion.div>
          </div>

          {/* Photo Column (5 columns on large screens) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[4/5] md:aspect-[3/4]"
            >
              {/* Outer decorative gold offset frame */}
              <div className="absolute inset-4 border border-gold-400 translate-x-3 translate-y-3 z-0 pointer-events-none rounded-sm transition-transform duration-500 hover:translate-x-4 hover:translate-y-4" />

              {/* Main Photo Wrapper */}
              <div className="absolute inset-4 overflow-hidden shadow-2xl bg-silk-200 border-4 border-silk-100 z-10 rounded-sm">
                <img
                  src="https://photos.1804078.xyz/42hu/dwm.webp"
                  alt="邓伟民 - 二胡演奏家"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image dark overlay on bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent pointer-events-none" />
                
                {/* Floating caption overlay in photo */}
                <div className="absolute bottom-4 left-6 z-20 text-silk-50">
                  <p className="font-serif text-lg font-bold tracking-widest">邓伟民</p>
                  <p className="font-mono text-[9px] tracking-wider text-silk-300">Erhu Artist</p>
                </div>
              </div>

              {/* Little vertical stamp accent at bottom right */}
              <div className="absolute bottom-[-10px] right-[-10px] z-30 bg-silk-100 border border-gold-300 shadow-lg p-2 flex flex-col items-center">
                <span className="font-serif text-[9px] text-gold-600 tracking-wider uppercase font-semibold">
                  国乐巨匠
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
