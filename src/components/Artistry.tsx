import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, SkipBack, Disc, Volume2, Info, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Track {
  title: string;
  composer: string;
  style: string;
  duration: string;
  desc: string;
  feeling: string;
}

export default function Artistry() {
  const tracks: Track[] = [
    {
      title: "二泉映月",
      composer: "华彦钧 (阿炳)",
      style: "深沉、悲怆、超脱",
      duration: "06:15",
      desc: "中国二胡艺术最具代表性的传世孤品。此曲旋律如泣如诉，深沉凄婉，同时饱含不向命运低头的抗争精神与高尚超脱的精神境界。邓伟民先生深得其师萧白镛先生对此曲的传神解读，弓法细腻凝重，情深至极。",
      feeling: "“月影横斜，泉声如咽。两根琴弦诉尽人世悲欢，将命运的叹息化作永恒的艺术史诗。”",
    },
    {
      title: "赛马",
      composer: "黄海怀",
      style: "热烈、奔放、欢快",
      duration: "02:24",
      desc: "一首描绘内蒙古大草原上那达慕盛会赛马场面、欢腾热烈的大型器乐曲。全曲曲调高昂欢快，运用了极具挑战性的快速连拨、颤音以及模仿马啼、马嘶等高超的独创演奏技巧，展现二胡灵动、极富力量的一面。",
      feeling: "“铁蹄奔腾，红旗猎猎。万马奔腾于辽阔草原，弓弦与拨指间回荡着生命的澎湃激情。”",
    },
    {
      title: "三门峡畅想曲",
      composer: "刘文金",
      style: "宏伟、激昂、抒情",
      duration: "08:45",
      desc: "创作于二十世纪六十年代的经典现代二胡大作，描绘了黄河三门峡水利枢纽建设的宏伟蓝图。此曲气势磅礴，乐段对比极其鲜明，融传统戏剧音调与现代技法于一炉，既有大河奔流的豪迈，亦有如歌的抒情。",
      feeling: "“黄河滚滚，巨浪排空。曲中尽显华夏儿女改天换地的英雄气概，琴弓饱含深情宏大的史诗质感。”",
    },
    {
      title: "江河水",
      composer: "东北民间乐曲 (黄海怀移植)",
      style: "凄怆、激愤、呜咽",
      duration: "06:50",
      desc: "一首原为双管独奏的东北民间器乐曲，后移植为二胡独奏。乐曲以最深沉强烈的震音与揉弦，发出如泣如诉的悲鸣，宣泄了旧社会普通百姓承受的深重灾难与不公，具有极强的戏剧冲突和情感震荡力。",
      feeling: "“江河呜咽，天地悲风。琴音中强烈的压抑与悲怆瞬间直抵人心，是人间苦难最真挚的声乐写照。”",
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30); // Simulated percentage
  const [simulatedTime, setSimulatedTime] = useState("01:52");
  
  const currentTrack = tracks[currentTrackIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulated player tick logic
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Loop or stop
            setIsPlaying(false);
            return 0;
          }
          const nextProgress = prev + 0.5;
          // Calculate minutes and seconds
          const totalSeconds = parseDurationToSeconds(currentTrack.duration);
          const currentSeconds = Math.floor((nextProgress / 100) * totalSeconds);
          const minutes = Math.floor(currentSeconds / 60);
          const seconds = currentSeconds % 60;
          setSimulatedTime(
            `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          );
          return nextProgress;
        });
      }, 500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentTrackIndex]);

  const parseDurationToSeconds = (dur: string) => {
    const parts = dur.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
    setSimulatedTime("00:00");
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
    setSimulatedTime("00:00");
    setIsPlaying(true);
  };

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
    setProgress(0);
    setSimulatedTime("00:00");
    setIsPlaying(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (clickX / width) * 100;
    setProgress(percentage);

    const totalSeconds = parseDurationToSeconds(currentTrack.duration);
    const currentSeconds = Math.floor((percentage / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    setSimulatedTime(
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );
  };

  return (
    <section id="artistry" className="py-24 md:py-32 bg-silk-50 relative overflow-hidden bg-silk-grain">
      
      {/* Decorative large circle behind player */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold-300/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase">
            Erhu Masterpieces & Aesthetics
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900 mt-2 tracking-widest">
            二胡之美 · 代表曲目
            <span className="block w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
          </h2>
          <p className="font-serif text-sm text-ink-600 mt-4 max-w-xl">
            二胡虽仅两弦，却能拟人声，拟万物，其演奏张力可宏大如历史悲歌，亦可灵动如草原野马。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Repertoire List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-l-2 border-gold-400 pl-4 mb-6">
                <h3 className="font-serif text-xl font-bold text-ink-900 tracking-wider">
                  经典代表剧目赏析
                </h3>
                <p className="font-serif text-[10px] text-ink-600 uppercase tracking-widest mt-0.5">
                  Curated Repertoire & Explanations
                </p>
              </div>

              <div className="space-y-3">
                {tracks.map((track, index) => (
                  <button
                    key={index}
                    onClick={() => handleTrackSelect(index)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 flex items-center justify-between group ${
                      currentTrackIndex === index
                        ? "bg-ink-900 border-ink-900 text-silk-50 shadow-md translate-x-1"
                        : "bg-silk-100/60 border-silk-200/50 hover:bg-silk-100 hover:border-gold-300 text-ink-800"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`font-mono text-xs font-bold ${
                          currentTrackIndex === index ? "text-gold-400" : "text-ink-500"
                        }`}
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold tracking-wider group-hover:text-gold-500 transition-colors">
                          《{track.title}》
                        </h4>
                        <span
                          className={`font-serif text-[10px] block mt-0.5 ${
                            currentTrackIndex === index ? "text-silk-300" : "text-ink-600"
                          }`}
                        >
                          作曲：{track.composer} · 风格：{track.style}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px]">{track.duration}</span>
                      {currentTrackIndex === index && isPlaying ? (
                        <div className="flex items-end space-x-[2px] h-3">
                          <span className="w-[2px] h-3 bg-gold-400 animate-pulse" />
                          <span className="w-[2px] h-2 bg-gold-400 animate-pulse delay-75" />
                          <span className="w-[2px] h-3.5 bg-gold-400 animate-pulse delay-150" />
                        </div>
                      ) : (
                        <Play className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-silk-100/50 p-6 border border-silk-200/40 rounded-sm">
              <h4 className="font-serif text-xs font-bold text-gold-600 tracking-wider flex items-center mb-2">
                <Info className="w-3.5 h-3.5 mr-1" />
                演奏审美特色
              </h4>
              <p className="font-serif text-[11px] text-ink-700 leading-relaxed text-justify-chinese">
                邓伟民先生的演奏不仅专注于音准与指力等物理维度的极致雕琢，更着力于乐曲气韵的流变。他的顿弓清脆，颤音饱满，特别是对揉弦幅度的精细调控，深得传统丝竹乐中“运腔”的神韵，使人听之忘忧、感怀至深。
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Multimedia Player Panel (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-silk-100 text-ink-900 border border-silk-200 rounded-sm shadow-xl p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Subtle back decorative traditional pattern logo */}
              <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.03] select-none pointer-events-none">
                <Disc className="w-80 h-80 animate-spin" style={{ animationDuration: "25s" }} />
              </div>

              {/* Top Banner inside player */}
              <div className="flex justify-between items-center pb-6 border-b border-silk-200 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
                  <span className="font-serif text-xs text-gold-400 tracking-widest font-semibold uppercase">
                    艺术声学现场录音
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-gold-300">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-serif text-xs">独奏大师水准</span>
                </div>
              </div>

              {/* Core interactive record interface */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-4">
                
                {/* Simulated Spinning Vinyl Record */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-44 h-44 rounded-full bg-silk-50 border-4 border-silk-200 flex items-center justify-center shadow-2xl">
                    
                    {/* Vinyl Grooves Accent */}
                    <div className="absolute inset-2 rounded-full border border-silk-200/40" />
                    <div className="absolute inset-6 rounded-full border border-silk-200/40" />
                    <div className="absolute inset-10 rounded-full border border-silk-200/40" />
                    <div className="absolute inset-14 rounded-full border border-silk-200/40 animate-spin-slow pointer-events-none" />

                    {/* Spinning Cover disc image label with Deng Weimin portrait inside center */}
                    <motion.div
                      animate={{ rotate: isPlaying ? 360 : 0 }}
                      transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "linear",
                      }}
                      className="w-24 h-24 rounded-full bg-silk-200 border-2 border-gold-400 overflow-hidden flex items-center justify-center relative shadow-inner"
                    >
                      <img
                        src="https://photos.1804078.xyz/42hu/dwm.webp?v=2"
                        alt="二胡黑胶盘面"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-silk-50/15" />
                      <div className="absolute w-4 h-4 bg-silk-50 rounded-full border border-gold-400" />
                    </motion.div>

                    {/* Arm needle element */}
                    <div
                      className={`absolute top-0 right-4 w-12 h-16 origin-top-right transition-transform duration-500 pointer-events-none z-20 ${
                        isPlaying ? "rotate-12" : "rotate-0"
                      }`}
                    >
                      <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                        <path d="M35,5 L15,15 L18,45 L15,48" stroke="#cca75c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="35" cy="5" r="4" fill="#a38143" />
                        <rect x="13" y="45" width="6" height="5" fill="#cca75c" rx="1" />
                      </svg>
                    </div>

                  </div>
                </div>

                {/* Liner Notes & Poetry (7 Columns) */}
                <div className="md:col-span-7 space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <span className="font-serif text-[10px] text-gold-400 tracking-widest font-bold uppercase">
                      ACTIVE SELECTION
                    </span>
                    <h3 className="font-serif text-2xl font-black tracking-widest text-ink-900">
                      《{currentTrack.title}》
                    </h3>
                    <p className="font-serif text-xs text-ink-700">
                      谱写：{currentTrack.composer} · 琴弓独奏：邓伟民
                    </p>
                  </div>

                  {/* Poetic quote */}
                  <div className="bg-silk-50 p-4 border border-silk-200 rounded-sm relative italic text-center text-gold-300 text-xs font-serif leading-relaxed">
                    {currentTrack.feeling}
                  </div>
                </div>

              </div>

              {/* Long Description of Repertoire */}
              <div className="mt-6 border-t border-silk-200 pt-6">
                <p className="font-serif text-xs text-ink-700 leading-relaxed text-justify-chinese">
                  {currentTrack.desc}
                </p>
              </div>

              {/* Interactive Wave Equalizer Visualization */}
              <div className="h-12 flex items-center justify-between gap-1.5 px-4 bg-silk-50 rounded-sm border border-silk-200 mt-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />
                
                {isPlaying ? (
                  Array.from({ length: 42 }).map((_, i) => {
                    const duration = 0.5 + Math.random() * 0.8;
                    const delay = Math.random() * 0.5;
                    return (
                      <motion.span
                        key={i}
                        animate={{ height: ["4px", `${Math.floor(8 + Math.random() * 24)}px`, "4px"] }}
                        transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
                        className="w-1.5 bg-gold-400 rounded-full"
                      />
                    );
                  })
                ) : (
                  <div className="w-full flex justify-center">
                    <span className="font-serif text-[11px] text-ink-600 tracking-widest flex items-center">
                      <Volume2 className="w-3.5 h-3.5 mr-1.5 animate-pulse text-gold-400" />
                      音轨已暂停 · 点击下方播放欣赏大师指下清音
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Controls Panel */}
              <div className="mt-8 space-y-4">
                
                {/* Progress bar */}
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-[10px] text-ink-600 w-10 text-right">{simulatedTime}</span>
                  <div
                    onClick={handleProgressClick}
                    className="flex-1 h-[3.5px] bg-silk-200 rounded-full cursor-pointer relative group"
                  >
                    <div
                      className="absolute top-0 left-0 h-full bg-gold-400 rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{ left: `calc(${progress}% - 4px)` }}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-ink-600 w-10">{currentTrack.duration}</span>
                </div>

                {/* Play Buttons */}
                <div className="flex justify-center items-center space-x-8">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 text-ink-700 hover:text-gold-400 hover:bg-silk-200 rounded-full transition-all"
                    aria-label="Previous track"
                  >
                    <SkipBack className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handlePlayPause}
                    className="p-5 bg-gold-500 hover:bg-gold-400 text-silk-50 hover:scale-105 rounded-full shadow-lg transition-all"
                    aria-label={isPlaying ? "Pause track" : "Play track"}
                  >
                    {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-[1px]" />}
                  </button>

                  <button
                    onClick={handleNext}
                    className="p-2.5 text-ink-700 hover:text-gold-400 hover:bg-silk-200 rounded-full transition-all"
                    aria-label="Next track"
                  >
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
