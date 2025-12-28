import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Content */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            まごすけの想い
          </h2>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <p>
              ここまでサイトをご覧になっていただきありがとうございます。ぜひ、「まごすけ」を一人の孫のような存在として頼ってください。
              まごすけは、離れて暮らすご本人様にとっての「近所の孫」のような存在になれることを目指しています。
              ご本人様にも、離れて暮らすご家族様にも安心を届けられるよう、精一杯サポートいたします。
            </p>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 border-b-2 border-orange-200 inline-block">１．ご本人様への想い</h3>
              <p>
                私たち「<strong>まごすけ</strong>」が提供するAlexaは、ご本人様が毎日の生活で安心してお使いいただけるよう、操作は「声と物理スイッチ」だけで済むようにいたします。デジタルへの苦手意識をなるべく解消し、無理なく生活の一部として溶け込み、毎日欠かせない馴染んだ存在になれるよういたします。また、会話相手として孤独感から解放され、毎日を穏やかに過ごせる。それが私たちの最大の願いです。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 border-b-2 border-orange-200 inline-block">２．ご家族様への想い</h3>
              <p>
                離れて暮らすことで生まれる「見えない不安」を、皆様から取り除きたい。離れて暮らす際の不安感の解消と、ご実家に帰省されたときの貴重なお時間を有意義に使っていただけるように、デジタルとアナログの両方でサポートしてまいります。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 border-b-2 border-orange-200 inline-block">３．地域に密着します</h3>
              <p>
                まごすけは、宇部市を拠点に活動をしています。ご本人様に最大限安心していただけるよう、「近所に住む孫」のような距離感（宇部市、山陽小野田市、山口市の一部、新山口駅エリア）に限定することで、より深い安心感をご提供します。ただ機器を設置して終わりではなく、毎月お伺いして「お変わりないですか？」とお茶を飲みながらの談笑をする、そんなアナログな温かさとデジタルを組み合わせた、新しい見守りの形をご提案します。
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2 border-l-4 border-orange-500 pl-3">【運営情報】</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-bold w-24 flex-shrink-0">運営:</span>
                <span><strong>まごすけみまもり隊</strong></span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start">
                <span className="font-bold w-24 flex-shrink-0">活動エリア:</span>
                <span>
                  宇部市・山陽小野田市・山口市（新山口エリア）
                  <span className="block sm:inline text-xs text-slate-500 sm:ml-2">※今後拡張予定</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};