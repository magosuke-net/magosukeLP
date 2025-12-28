import React from 'react';
import { DeviceIcon, HandshakeIcon, HeartIcon } from './icons/Icons';

const features = [
  {
    icon: <HeartIcon className="w-10 h-10 text-orange-600" />,
    title: "元気なお顔、見せますね",
    description: (
      <>
        たわいもない世間話の中から、顔色や声の調子、歩き方など、お変わりないかを自分の目で確かめます。「変わりないよ」の言葉だけじゃない、本当の元気をお届けします。
      </>
    ),
    color: "bg-orange-100"
  },
  {
    icon: <HandshakeIcon className="w-10 h-10 text-emerald-600" />,
    title: "「ちょっと困った」を、さっと解決",
    description: (
      <>
        「電球が切れちゃって」「ゴミ出しの日、忘れそう」…。そんな15分以内でできる“ちょっとしたお困りごと”は、訪問時に無料でサッと解決！「これくらい頼むのは悪いかな」なんて、絶対に思わないでくださいね。
      </>
    ),
    color: "bg-emerald-100"
  },
  {
    icon: <DeviceIcon className="w-10 h-10 text-blue-600" />,
    title: "写真付きの「ご実家レポート」",
    description: (
      <>
        訪問後には、親御さんのご様子や、お部屋の状況などをまとめた「ご実家レポート」を写真付きでLINEにお届け。文字だけでは伝わらない“空気感”まで、しっかりお伝えします。
      </>
    ),
    color: "bg-blue-100"
  }
];

export const ServiceFeatures: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            <span className="text-lg md:text-xl block font-medium text-slate-500 mb-2">【ぬくもりのアナログ見守り】</span>
            あなたの代わりに、<br className="md:hidden" />毎月かならず顔を見に行きます。
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            「まごすけ」が毎月1回、必ずご実家を訪問。玄関先だけでなくお部屋までお邪魔して、<strong>30分間、しっかり顔を見てお話しします。</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50/50 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-100 flex flex-col">
              <div className="p-8">
                <div className={`inline-block ${feature.color} p-4 rounded-full mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};