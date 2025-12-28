import React from 'react';
import { Button } from './ui/Button';
import { LineIcon } from './icons/Icons';

export const Contact: React.FC = () => {
  const handleLineClick = () => {
    // TODO: Add the correct LINE URL
    window.open('https://line.me/ti/p/YOUR_LINE_ID', '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-slate-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            さあ、はじめの一歩を。
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            <strong>「もっと早く、こうしていれば良かった…」</strong><br />
            後悔する前に、できることがあります。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="font-bold text-lg md:text-xl">
              私たちは、一件一件のご家庭と、心を込めて向き合いたい。<br/>
              その想いから、<span className="text-red-600">毎月の新規お申し込みは【先着1名様限定】</span>とさせていただいております。
            </p>
          </div>
          
          <div className="w-full max-w-xl mx-auto bg-green-50 border-2 border-green-500 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-slate-700 mb-4 font-medium">
              「まずは話だけでも聞いてみたい」<br/>
              「うちの場合は、どういう使い方ができる？」
            </p>
            <p className="text-xl font-bold text-green-800 mb-5">どんな些細なことでも構いません。<br/>あなたの不安な気持ち、まずは私に聞かせてください。</p>
            
            <Button variant="line" size="xl" className="shadow-lg animate-pulse" onClick={handleLineClick}>
              <LineIcon className="w-8 h-8 mr-3" />
              <span className="text-lg">LINEで無料相談してみる（今月の残り：1枠）</span>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-bold text-slate-700">
            「いつか」と思っていた親孝行、今日からはじめませんか？<br/>
            あなたからのご連絡を、心よりお待ちしております。
          </p>
        </div>
      </div>
    </section>
  );
};