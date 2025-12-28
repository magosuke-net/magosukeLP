import React from 'react';
import { CheckIcon } from './icons/Icons';

export const PainPoints: React.FC = () => {
  const worries = [
    "実家になかなか帰れず、ご本人様の様子がわからない",
    "電話をしても「元気だよ」としか言われず、本当のところが不安",
    "ご本人様がデジタル機器に疎く、スマホやタブレットを使いこなせない",
    "近所に頼れる親戚がおらず、何かあった時にすぐ動けない",
    "詐欺や訪問販売のトラブルに巻き込まれていないか心配"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">
          こんな<span className="text-orange-600">お悩み</span>ありませんか？
        </h2>
        
        {/* Softened Design: Gradient background, larger border radius, subtle border */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-3xl p-6 md:p-10 shadow-sm border border-orange-100/50">
          <ul className="space-y-5">
            {worries.map((worry, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* Icon update: White background circle for a cleaner look */}
                <div className="flex-shrink-0 bg-white rounded-full p-2 mt-0.5 shadow-sm text-orange-500">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <span className="text-lg md:text-xl text-slate-700 font-medium leading-snug">
                  {worry}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-slate-600">
            その不安、デジタルとアナログのハイブリッド<br />
            <span className="font-bold text-slate-800">「まごすけ」</span>にお任せください。
          </p>
        </div>
      </div>
    </section>
  );
};