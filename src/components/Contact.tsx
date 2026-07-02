import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, CalendarRange } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "演出演出/独奏邀请",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "演出演出/独奏邀请",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-silk-50 relative overflow-hidden bg-silk-grain">
      
      {/* Decorative backdrop elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-gold-300/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-serif text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase">
            Booking & Cooperation
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-900 mt-2 tracking-widest">
            艺术合作 · 邀约联络
            <span className="block w-12 h-[2px] bg-gold-400 mx-auto mt-4" />
          </h2>
          <p className="font-serif text-sm text-ink-600 mt-4 max-w-xl">
            承接国内外大型音乐会独奏、艺术讲坛、学术大师班及专业比赛评审等艺术活动。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Contact Info & Credentials (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="border-l-2 border-gold-400 pl-4">
              <h3 className="font-serif text-2xl font-bold text-ink-900 tracking-wider">
                联络艺术工作室
              </h3>
              <p className="font-serif text-xs text-ink-600 mt-1 uppercase tracking-widest">
                Contact the Artist Studio
              </p>
            </div>

            <p className="font-serif text-sm text-ink-700 leading-relaxed text-justify-chinese">
              邓伟民先生常年致力于弘扬优秀民族器乐文化，重视跨界交流、国乐普及和专业教育。凡演出事务、学术研究、高校艺术讲堂，以及相关文化合作，均欢迎通过本通道或官方邮箱取得联系。
            </p>

            <div className="space-y-4">
              {/* Contact Item: Email */}
              <div className="flex items-start space-x-4 p-5 bg-silk-100/50 border border-silk-200/40 rounded-sm hover:border-gold-300/30 transition-colors duration-300">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-sm shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-ink-600 tracking-widest uppercase">
                    官方工作邮箱
                  </h4>
                  <a
                    href="mailto:13901804078kj@gmail.com"
                    className="font-mono text-base font-bold text-ink-900 hover:text-gold-500 transition-colors mt-1 block"
                  >
                    13901804078kj@gmail.com
                  </a>
                  <p className="font-serif text-[10px] text-ink-600 mt-0.5">
                    工作往来、邀约合作、资料调阅专属信箱
                  </p>
                </div>
              </div>

              {/* Contact Item: Academic Base */}
              <div className="flex items-start space-x-4 p-5 bg-silk-100/50 border border-silk-200/40 rounded-sm hover:border-gold-300/30 transition-colors duration-300">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-sm shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-ink-600 tracking-widest uppercase">
                    学术活动驻地
                  </h4>
                  <p className="font-serif text-base font-bold text-ink-900 mt-1">
                    中国 · 上海
                  </p>
                  <p className="font-serif text-[10px] text-ink-600 mt-0.5">
                    依托上海民族乐团及上海音乐家协会开展全国及海外事务
                  </p>
                </div>
              </div>

              {/* Contact Item: Licensing */}
              <div className="flex items-start space-x-4 p-5 bg-silk-100/50 border border-silk-200/40 rounded-sm hover:border-gold-300/30 transition-colors duration-300">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-sm shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-ink-600 tracking-widest uppercase">
                    官方身份授权
                  </h4>
                  <p className="font-serif text-xs text-ink-800 leading-relaxed mt-1">
                    中国民族管弦乐学会（常务理事单位）
                    <br />
                    一级演奏员艺术成果保护备案
                  </p>
                </div>
              </div>
            </div>

            {/* Note decoration */}
            <div className="bg-gold-50/50 p-6 border border-gold-300/10 rounded-sm text-center">
              <p className="font-serif text-[11px] text-gold-700 italic">
                “凡学术讲座、高校艺术大师班均提供全套二胡教学谱及萧白镛派二胡弓法讲义。”
              </p>
            </div>
          </div>

          {/* Right Panel: Functional Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-silk-100 p-8 md:p-10 border border-silk-200 shadow-xl rounded-sm relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="border-b border-silk-200 pb-4">
                      <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                        <CalendarRange className="w-5 h-5 text-gold-500" />
                        <span>填写在线合作意向</span>
                      </h3>
                      <p className="font-serif text-[11px] text-ink-600 mt-0.5">
                        意向信息将直接投递至邓伟民先生工作助手邮箱，通常在1-2个工作日内回复。
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block font-serif text-xs font-bold text-ink-800 tracking-widest uppercase">
                          您的姓名 / 单位名称 <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="例如：北京国家大剧院事务部"
                          className="w-full px-4 py-3 bg-silk-50 border border-silk-200 rounded-sm text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-serif"
                        />
                      </div>

                      {/* Phone field */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block font-serif text-xs font-bold text-ink-800 tracking-widest uppercase">
                          联络电话 <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="您的手机号码或办公固话"
                          className="w-full px-4 py-3 bg-silk-50 border border-silk-200 rounded-sm text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-serif text-xs font-bold text-ink-800 tracking-widest uppercase">
                        您的电子邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="例如：contact@theater.org"
                        className="w-full px-4 py-3 bg-silk-50 border border-silk-200 rounded-sm text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-mono"
                      />
                    </div>

                    {/* Category field */}
                    <div className="space-y-2">
                      <label htmlFor="type" className="block font-serif text-xs font-bold text-ink-800 tracking-widest uppercase">
                        合作意向类别 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 bg-silk-50 border border-silk-200 rounded-sm text-sm text-ink-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-serif"
                      >
                        <option value="演出演出/独奏邀请">演出演出/独奏邀请 (Concert/Solo Performance)</option>
                        <option value="学术讲座/艺术大师班">学术讲座/艺术大师班 (Lecture/Masterclass)</option>
                        <option value="专业比赛/考级评审">专业比赛/考级评审 (Competition Jury/Evaluation)</option>
                        <option value="媒体专访/艺术顾问">媒体专访/艺术顾问 (Interview/Advisor)</option>
                        <option value="其他合作">其他合作 (Others)</option>
                      </select>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block font-serif text-xs font-bold text-ink-800 tracking-widest uppercase">
                        留言具体事宜 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="请详细描述您的邀请计划，包括预计时间、演出场地、组织方背景，以及对演奏曲目的初步意向，谢谢。"
                        className="w-full px-4 py-3 bg-silk-50 border border-silk-200 rounded-sm text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all font-serif leading-relaxed"
                      />
                    </div>

                    {/* Action button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-ink-900 hover:bg-gold-500 text-silk-50 hover:text-white rounded-sm font-serif text-sm tracking-widest shadow-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-silk-200 border-t-gold-500 rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>投递艺术合作意向</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-4 flex flex-col items-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center border border-gold-300">
                      <CheckCircle2 className="w-10 h-10 text-gold-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-black text-ink-900 tracking-wider">
                        投递成功 · 感谢致信
                      </h3>
                      <p className="font-serif text-xs text-ink-600 max-w-md mx-auto leading-relaxed">
                        您的合作意向已被成功登记。我们已经将备份副本发送至
                        <span className="font-mono text-gold-600 font-semibold mx-1">{formData.email}</span>
                        ，邓伟民先生的助理工委会将尽快与您取得联络。
                      </p>
                    </div>

                    <div className="bg-silk-50 p-6 border border-silk-200 rounded-sm max-w-md text-left text-xs font-serif text-ink-700 leading-relaxed space-y-2">
                      <p className="font-bold border-b border-silk-200 pb-1 mb-2 text-ink-900">登记摘要：</p>
                      <p><strong>邀请方姓名/单位：</strong> {formData.name}</p>
                      <p><strong>意向类别：</strong> {formData.type}</p>
                      <p><strong>联络电话：</strong> <span className="font-mono">{formData.phone}</span></p>
                    </div>

                    <button
                      id="contact-reset-btn"
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-gold-400 text-gold-600 hover:bg-gold-500 hover:text-white transition-all text-xs tracking-widest font-serif rounded-sm"
                    >
                      重新致信联络
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
