import React from 'react';

export const Hero: React.FC = () => {
  // Fixed Warm Background Style
  const bgStyle = {
    className: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50',
    accent: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700'
  };

  return (
    <section className={`relative w-full overflow-hidden min-h-[600px] flex flex-col justify-center ${bgStyle.className}`}>
      
      {/* Abstract Shapes for Modern Feel */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white/40 blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/60 blur-3xl opacity-60 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center text-center text-slate-800">
        
        {/* Badge */}
        <div className={`inline-block border border-white/50 px-4 py-2 rounded-full text-sm font-bold mb-8 tracking-wide shadow-sm backdrop-blur-sm ${bgStyle.badge}`}>
          山口県 宇部市・山陽小野田市 限定サービス
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-slate-900 drop-shadow-sm">
          忙しいあなたに代わって、<br />
          私が、<span className={`${bgStyle.accent} inline-block`}>実家へ帰省します。</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-3xl mx-auto text-base md:text-lg font-medium mb-12 text-slate-700 leading-relaxed">
          「近所の孫」こと「まごすけ」が、毎月の対面訪問と、かんたんデジタル見守りで、<br />
          離れていても“すぐそばにいる安心”をお届けします。
        </p>

        {/* Call to Emotion */}
        <div className="bg-white/60 backdrop-blur-md border border-white rounded-3xl p-8 md:p-10 mt-2 max-w-3xl mx-auto shadow-xl ring-1 ring-slate-100/50">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-6">
            こんな想いを、胸にしまい込んでいませんか？
          </h2>
          <ul className="text-left space-y-3 text-slate-700 font-medium">
            <li>「最近、親の元気がない気がする…」</li>
            <li>「電話では『大丈夫』としか言わないけど、本当はどうなんだろう？」</li>
            <li>「頻繁に帰省できず、申し訳ない気持ちでいっぱいだ…」</li>
          </ul>
          <p className="mt-6 font-bold text-base md:text-lg text-slate-800">
            電話だけでは分からない、ご実家の“本当の様子”。<br/>
            <span className="text-orange-600">あなたの代わりに、この目でしっかり確かめてきます。</span>
          </p>
        </div>
      </div>
    </section>
  );
};