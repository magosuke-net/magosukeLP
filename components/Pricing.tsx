import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

export const Pricing: React.FC = () => {
  const initialFeatures = [
    "安全なAmazonアカウント作成代行",
    "『見守りの窓 (Echo Show 5)』の設置・Wi-Fi接続",
    "親御さんへの使い方レクチャー（分かるまで、何度でも！）",
    "出張・事務手数料"
  ];

  const monthlyFeatures = [
    "代理帰省サポート（月1回の対面訪問＆お困りごと解決）",
    "LINEでの「ご実家レポート」（写真付きで安心を可視化）",
    "『見守りの窓』新品レンタル料",
    "機器の生涯メンテナンス保証（故障・トラブルもすべて無償対応）"
  ];

  return (
    <section id="price" className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/80">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            料金について
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed md:text-lg">
            遠方に住むご家族が、毎月宇部市に帰省する際の交通費は、約2〜3万円。<br/>
            「まごすけ」は、<strong className="text-orange-600">“あなたが帰省する1回分の費用”</strong>で、心からの安心をお届けすることをお約束します。
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden">
          {/* Plan 1: Initial Pack */}
          <div className="p-6 md:p-10">
            <div className="md:flex md:items-center">
              <div className="md:w-2/5 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
                <span className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1 rounded-full text-sm">初回のみ</span>
                <h3 className="text-2xl font-bold text-slate-800 mt-3">初期導入パック</h3>
                <p className="text-slate-800 mt-2">
                  <span className="text-4xl font-extrabold">20,000</span>
                  <span className="font-bold text-lg ml-1">円</span>
                  <span className="text-sm font-normal">（税込）</span>
                </p>
              </div>
              <div className="md:w-3/5 md:border-l md:border-slate-200 md:pl-8">
                <p className="font-bold text-slate-700 mb-3">ご実家での複雑な設定や、親御さんへの丁寧なご説明まで、すべて“まるっと”お引き受けします。</p>
                <ul className="space-y-2 text-sm">
                  {initialFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckBadgeIcon className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-100/70 h-px"></div>

          {/* Plan 2: Monthly */}
          <div className="p-6 md:p-10">
            <div className="md:flex md:items-center">
              <div className="md:w-2/5 mb-6 md:mb-0 md:pr-8 text-center md:text-left">
                <span className="inline-block bg-emerald-100 text-emerald-700 font-bold px-4 py-1 rounded-full text-sm">月額</span>
                <h3 className="text-2xl font-bold text-slate-800 mt-3">見守りサービス</h3>
                <p className="text-slate-800 mt-2">
                  <span className="text-4xl font-extrabold">5,000</span>
                  <span className="font-bold text-lg ml-1">円</span>
                  <span className="text-sm font-normal">（税込）</span>
                </p>
              </div>
              <div className="md:w-3/5 md:border-l md:border-slate-200 md:pl-8">
                <p className="font-bold text-slate-700 mb-3">毎月、あなたの代わりに帰省し、いつでも繋がる安心をサポートし続けるための費用です。</p>
                <ul className="space-y-2 text-sm">
                  {monthlyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckBadgeIcon className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};