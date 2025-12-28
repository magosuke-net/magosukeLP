import React from 'react';

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
          よくある質問・免責事項
        </h2>
        
        <div className="space-y-8">
          {/* Q1 */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-start">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center font-mono text-sm mr-4 flex-shrink-0 mt-1">Q</span>
              <span>実家の電波が入るか心配です</span>
            </h3>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                <span className="font-bold text-orange-600 mr-2">A.</span>
                SIMカードをご契約される前に、ご実家が携帯電話の提供エリア内か（スマホの電波が入るか）を必ずご確認ください。万が一、ご契約後に電波が入らず利用できなかった場合でも、初期導入費用の返金には応じかねますのでご了承ください。
              </p>
            </div>
          </div>

          {/* Q2 */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-start">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center font-mono text-sm mr-4 flex-shrink-0 mt-1">Q</span>
              <span>Amazonアカウントを共有しても大丈夫ですか？</span>
            </h3>
            <div className="pl-11">
              <p className="text-slate-600 leading-relaxed">
                <span className="font-bold text-orange-600 mr-2">A.</span>
                設定作業が終わりましたら、速やかにパスワードを変更（元に戻す）していただきますのでご安心ください。また、ご実家の端末から勝手に商品を購入できないよう、「音声ショッピング機能」はオフに設定いたします。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
