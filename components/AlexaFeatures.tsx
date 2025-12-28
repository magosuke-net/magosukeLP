import React from 'react';
import { VideoCameraIcon, WrenchScrewdriverIcon } from './icons/Icons';

export const AlexaFeatures: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/80">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            <span className="text-lg md:text-xl block font-medium text-slate-500 mb-2">【かんたんデジタル見守り】</span>
            “会いたい時、いつでも会える”<br className="md:hidden" />『見守りの窓』をお届けします。
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            難しい設定は一切不要！私たちがすべて設定した<strong>「Amazon Echo Show 5」を新品でレンタル</strong>。ご実家のテレビの横に置くだけで、あなたとご両親をつなぐ『見守りの窓』になります。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">

          {/* Feature 1: Video Calls */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center text-blue-600 mb-4">
              <VideoCameraIcon className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">顔が見えるって、やっぱり嬉しい</h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              スマホやPCから、いつでもご実家の親御さんとビデオ通話ができます。「元気？」と声をかければ、自動で応答。お互いの顔を見ながら話せるだけで、安心感はまったく違います。
            </p>
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <p className="text-slate-500 font-medium">[ここにビデオ通話のイメージ画像]</p>
            </div>
          </div>

          {/* Feature 2: Full Support */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center text-emerald-600 mb-4">
              <WrenchScrewdriverIcon className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">機械のことは、ぜんぶおまかせ！</h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              機器の所有権は私たち「まごすけ」にあるため、以下のようなトラブルもすべて責任を持って対応します。親御さんを機械のことで悩ませることは、もうありません。
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="inline-block w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex-shrink-0 text-center leading-5 mr-3">✓</span>
                <span className="text-slate-700 font-medium">使い方が分からない時の訪問サポート</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex-shrink-0 text-center leading-5 mr-3">✓</span>
                <span className="text-slate-700 font-medium">Wi-Fiが繋がらない…などの接続トラブル対応</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex-shrink-0 text-center leading-5 mr-3">✓</span>
                <span className="text-slate-700 font-medium">故障時の修理・交換対応（完全無料）</span>
              </li>
               <li className="flex items-center">
                <span className="inline-block w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex-shrink-0 text-center leading-5 mr-3">✓</span>
                <span className="text-slate-700 font-medium">ソフトウェアのアップデート作業</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};