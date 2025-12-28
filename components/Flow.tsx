import React from 'react';
import { ShieldCheckIcon, UserGroupIcon, DevicePhoneMobileIcon } from './icons/Icons';

export const Flow: React.FC = () => {
  return (
    <section id="flow" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 rounded-full p-4 mb-4">
            <ShieldCheckIcon className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            大切なご家族だから。<br/>世界で一番、安全な方法でお繋ぎします。
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            「でも、ネットに繋ぐのはセキュリティが心配…」そのお気持ち、よく分かります。<br/>
            ご安心ください。「まごすけ」では、<strong className="text-green-700">あなたと親御さん以外は誰も覗き見できない、最も安全な方法</strong>で設定を行います。
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-6 flex-shrink-0">
              <div className="flex-shrink-0 w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-md">
                <p className="text-3xl font-bold text-slate-400">1</p>
              </div>
              <div className="w-0.5 h-full bg-slate-300 my-2"></div>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 flex-grow mt-4">
              <h3 className="text-xl font-bold text-slate-800 mb-3">【お客様】特別なSIMカードをご用意ください</h3>
              <p className="text-slate-700 text-sm md:text-base">
                Amazonのアカウントを安全に作るため、電話番号だけが記録された「SMS付きデータSIM」をご契約いただき、ご実家へ郵送してください。（※どの会社のSIMが良いか、契約方法は丁寧にご案内しますのでご安心を）
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-6 flex-shrink-0">
              <div className="flex-shrink-0 w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-md">
                <p className="text-3xl font-bold text-slate-400">2</p>
              </div>
              <div className="w-0.5 h-full bg-slate-300 my-2"></div>
            </div>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-6 flex-grow mt-4">
              <h3 className="text-xl font-bold text-slate-800 mb-3">【まごすけ】私がご実家で、すべて設定します</h3>
              <p className="text-slate-700 text-sm md:text-base">
                届いたSIMカードと、私たちの設定用スマホを使って、ご実家でアカウント作成から機器の接続まで、すべての作業を代行します。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start">
            <div className="flex flex-col items-center mr-6 flex-shrink-0">
                <div className="flex-shrink-0 w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center shadow-md">
                  <p className="text-3xl font-bold text-slate-400">3</p>
                </div>
            </div>
            <div className="bg-white border-2 border-green-300 rounded-xl p-6 flex-grow mt-4 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-green-700">【お客様＋まごすけ】“その場で”パスワードを最終設定</h3>
              <p className="text-slate-700 mb-4 text-sm md:text-base">
                設定の最終段階で、私からあなたへビデオ通話をおかけします。画面に表示される認証番号を教えていただき、認証が完了したら、<strong className="text-green-700">その場ですぐに、あなた自身でパスワードを変更・設定していただきます。</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center bg-green-50 border-2 border-green-500/30 p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-green-800">【重要なお約束】</h3>
          <p className="mt-3 text-base md:text-lg font-medium text-slate-800">
            私たちは、あなたのアカウントのパスワードを<strong className="text-red-600 underline decoration-2">一切お預かりしません。</strong><br/>
            設定完了後、私たちがそのアカウントにアクセスすることは物理的に不可能です。<br/>
            <span className="font-bold">あなたと親御さんだけの、安全な『見守りの窓』が完成します。</span>
          </p>
        </div>
      </div>
    </section>
  );
};