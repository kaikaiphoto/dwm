import { Music, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer-container"
      className="bg-ink-950 text-silk-100 border-t border-silk-200/5 py-12 md:py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="50%" r="200" fill="none" stroke="#cca75c" strokeWidth="0.5" />
          <circle cx="90%" cy="50%" r="300" fill="none" stroke="#cca75c" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative z-10">
        
        {/* Left column: Brand and licensing */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-gold-400/50 flex items-center justify-center bg-ink-900">
              <Music className="w-4 h-4 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold tracking-widest text-silk-50">
                邓伟民二胡艺术
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-silk-400 mt-0.5">
                © {new Date().getFullYear()} Deng Weimin. All Rights Reserved.
              </span>
            </div>
          </div>
          <p className="font-serif text-[10px] text-silk-400 max-w-sm leading-relaxed">
            一级演奏员 · 中国民族管弦乐学会原常务理事
            <br />
            官方备案艺术官方主页 · 上海民族乐团前乐队首席
          </p>
        </div>

        {/* Center column: Artistic Red Seal Stamp */}
        <div className="flex flex-col items-center justify-center space-y-2 select-none pointer-events-none">
          <div className="w-12 h-12 bg-red-800 text-white border-2 border-red-900 rounded-sm font-serif font-black flex items-center justify-center text-center p-1 text-[11px] leading-tight shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-300">
            大音
            <br />
            希声
          </div>
          <span className="font-serif text-[9px] tracking-widest text-gold-500 uppercase font-medium">
            以琴传神
          </span>
        </div>

        {/* Right column: Action buttons and scroll up */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center space-x-6 text-xs font-serif text-silk-300 tracking-widest">
            <a href="#home" className="hover:text-gold-400 transition-colors">首 页</a>
            <span>·</span>
            <a href="#bio" className="hover:text-gold-400 transition-colors">艺术生平</a>
            <span>·</span>
            <a href="#artistry" className="hover:text-gold-400 transition-colors">代表曲目</a>
            <span>·</span>
            <a href="#contact" className="hover:text-gold-400 transition-colors">邀约合作</a>
          </div>
          
          <button
            id="scroll-to-top-btn"
            onClick={handleScrollTop}
            className="px-4 py-2 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-ink-950 transition-all duration-300 text-[10px] tracking-widest font-serif rounded-sm flex items-center space-x-1"
          >
            <ArrowUp className="w-3 h-3" />
            <span>返回顶部</span>
          </button>
        </div>

      </div>

      {/* Extreme bottom line info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-silk-200/5 text-center">
        <p className="font-serif text-[9px] text-silk-400/50 leading-relaxed">
          声明：本网站之录音版权与文字图像归属于邓伟民先生工作室及合作唱片公司所有。任何个人或单位未经书面授权不得擅自商用，违者必究。
        </p>
      </div>

    </footer>
  );
}
