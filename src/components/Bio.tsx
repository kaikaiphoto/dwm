import { motion } from "motion/react";
import { Compass, Sparkles, Award, GraduationCap, CheckCircle } from "lucide-react";

export default function Bio() {
  const mentors = [
    {
      name: "萧白镛 先生",
      role: "中国著名二胡演奏大师、国家一级演员",
      desc: "萧白镛大师是二胡界的一代巨匠，音色醇厚、技艺深邃，以富有人文内涵与哲学意境的演奏风格闻名海内外。邓伟民先生深得其真传，汲取了其对传统韵味与深层情感把握的艺术精髓。",
    },
    {
      name: "曹天立 先生",
      role: "二胡名家、资深音乐教育家",
      desc: "在基础与技巧磨砺的黄金时期，曹老师为其打下了极其坚实的弓法与指法功底，培养了其对民族音乐敏锐的感知力与纯正的审美观。",
    },
    {
      name: "李作明 先生",
      role: "著名二胡教育家、演奏家",
      desc: "李老师引导其在演奏中注入灵魂与张力，注重音乐细节的雕琢和传统曲目神韵的深度发掘，为其日后的独奏和领奏生涯奠定了艺术品位。",
    },
  ];

  return (
    <section id="bio" className="py-24 md:py-32 bg-silk-100 relative overflow-hidden bg-silk-grain">
      {/* Decorative vector background lines */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 Q200,400 600,200 T1300,300" fill="none" stroke="#e0ca9b" strokeWidth="1" />
          <path d="M-100,250 Q250,450 650,150 T1400,250" fill="none" stroke="#e0ca9b" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase">
            Artistic Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900 mt-2 tracking-widest relative">
            艺术经历
            <span className="block w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
          </h2>
          <p className="font-serif text-sm text-ink-600 mt-4 max-w-xl">
            两弦之间，流淌的是悠悠华夏情怀；弓弦之上，激荡的是无上国乐华章。
          </p>
        </div>

        {/* Dual Grid - Left: Bio & Highlights, Right: Mentors (Heritage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Block - Personal Background (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-silk-50 p-8 md:p-10 border border-silk-200/60 rounded-sm shadow-sm relative">
              {/* Decorative accent top-left */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold-400" />

              <h3 className="font-serif text-2xl font-bold text-ink-900 mb-6 tracking-wider flex items-center">
                <Sparkles className="w-5 h-5 text-gold-500 mr-2" />
                名家传奇经历
              </h3>

              <div className="font-serif text-base text-ink-700 space-y-6 leading-relaxed text-justify-chinese">
                <p>
                  <span className="font-bold text-ink-900 text-lg">邓伟民先生</span>，
                  我国杰出的二胡演奏家，
                  <span className="text-gold-600 font-semibold border-b border-gold-400/30">一级演奏员</span>。
                  他以炉火纯青的演奏技艺、深邃宽广的音乐情怀、极富感染力的舞台表现，在当代中国民族器乐领域享有崇高声誉。
                </p>
                <p>
                  他曾多年担任我国顶尖民乐团体——
                  <span className="text-ink-950 font-semibold">上海民族乐团的乐队首席</span>
                  。在乐团期间，他以出色的领奏与协调能力，完美诠释了数十部大型民族管弦乐经典，带领乐团在世界级艺术殿堂精彩亮相，赢得了广泛赞誉。
                </p>
                <p>
                  作为当代国乐的杰出代表，他曾任
                  <span className="text-ink-950 font-semibold">中国民族管弦乐学会常务理事</span>、
                  现任
                  <span className="text-ink-950 font-semibold">上海音乐家协会会员</span>
                  。多年来，他始终活跃在独奏舞台、学术讲坛及专业评审一线，致力于中国民族音乐的发展、传承与中外文化交流。
                </p>
              </div>
            </div>

            {/* Quick credentials cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 bg-silk-50 border border-silk-200/50 rounded-sm">
                <div className="p-2.5 bg-gold-50 text-gold-600 rounded-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-ink-900">上海民族乐团 · 前乐队首席</h4>
                  <p className="font-serif text-xs text-ink-600 mt-1 leading-relaxed">
                    乐队首席是乐团的艺术核心与灵魂，要求具备极高的专业技巧、深厚音乐素养和杰出的协作组织才能。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-silk-50 border border-silk-200/50 rounded-sm">
                <div className="p-2.5 bg-gold-50 text-gold-600 rounded-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-ink-900">中国民族管弦乐学会 · 原常务理事</h4>
                  <p className="font-serif text-xs text-ink-600 mt-1 leading-relaxed">
                    作为国家级音乐协会决策骨干，积极参与中国传统民族管弦乐的学术研究、考级推广与全国性赛事活动评审。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Heritage of Masters (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-l-2 border-gold-400 pl-4 mb-8">
                <h3 className="font-serif text-2xl font-bold text-ink-900 tracking-wider flex items-center">
                  <GraduationCap className="w-6 h-6 text-gold-500 mr-2" />
                  名师传薪 · 艺术师承
                </h3>
                <p className="font-serif text-xs text-ink-600 mt-1 uppercase tracking-widest">
                  Under the Lineage of Distinguished Masters
                </p>
              </div>

              <p className="font-serif text-sm text-ink-700 leading-relaxed mb-8">
                中国传统音乐极其注重“口传心授”的艺术传承。邓伟民先生的二胡艺术，是在博采众长的名师垂范之下，历经数十年刻苦钻研与舞台实践而凝聚成的结晶：
              </p>

              {/* Mentors Staggered Stack */}
              <div className="space-y-6">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-silk-50 p-6 border-l-4 border-gold-400 border-y border-r border-silk-200/50 rounded-r-sm shadow-sm relative group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <h4 className="font-serif text-lg font-bold text-ink-900 group-hover:text-gold-600 transition-colors duration-300">
                        {mentor.name}
                      </h4>
                      <span className="font-serif text-xs text-gold-600 font-semibold bg-gold-50 px-2.5 py-1 rounded-full border border-gold-300/20">
                        {mentor.role}
                      </span>
                    </div>
                    <p className="font-serif text-xs text-ink-700 leading-relaxed text-justify-chinese">
                      {mentor.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Master Quote */}
              <div className="mt-8 p-6 bg-gold-50/40 border border-gold-300/10 rounded-sm relative">
                <p className="font-serif text-sm text-gold-700 italic leading-relaxed">
                  “先后师从曹天立、李作明名家，更得二胡一代宗师萧白镛先生点拨，使邓伟民先生的演奏不仅具备极高的炫技表达，更流淌着深厚的儒雅之风与学术底蕴。”
                </p>
              </div>

            </div>
          </div>

        </div>



      </div>
    </section>
  );
}
