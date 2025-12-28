import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 text-sm">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h4 className="font-bold text-slate-200 text-lg mb-2">まごすけ</h4>
          <p className="text-xs text-slate-500">
            宇部市・山陽小野田市限定 高齢者見守りサービス
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700/80">
          <h3 className="font-bold text-slate-200 text-center text-base mb-6">特定商取引法に基づく表記</h3>
          <dl className="space-y-4 text-xs md:text-sm">
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">販売業者</dt>
              <dd className="w-full md:w-3/4">まごすけ（代表者氏名：＿＿＿＿＿＿＿＿＿＿）</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">所在地</dt>
              <dd className="w-full md:w-3/4">〒＿＿＿-＿＿＿＿　＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">電話番号</dt>
              <dd className="w-full md:w-3/4">＿＿＿＿-＿＿＿＿-＿＿＿＿</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">メールアドレス</dt>
              <dd className="w-full md:w-3/4">＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">サービスの対価</dt>
              <dd className="w-full md:w-3/4">料金プランに記載</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">支払い方法</dt>
              <dd className="w-full md:w-3/4">銀行振込 または クレジットカード決済</dd>
            </div>
             <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">支払い時期</dt>
              <dd className="w-full md:w-3/4">初期費用は設置完了後、月額費用は毎月＿＿日</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">端末の所有権</dt>
              <dd className="w-full md:w-3/4">本サービスで提供する「Echo Show 5」およびその付属品は「まごすけ」が所有権を有する<strong>貸与品（レンタル品）</strong>です。サービス解約時にはご返却いただきます。</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">キャンセル規定</dt>
              <dd className="w-full md:w-3/4">サービスの性質上、<strong>設置作業完了後の初期導入パック料金の返金は致しかねます</strong>ので、予めご了承ください。月額サービスは、解約希望月の前月＿＿日までにご連絡いただくことで、いつでも解約可能です。</dd>
            </div>
            <div className="flex flex-col md:flex-row">
              <dt className="font-semibold text-slate-300 w-full md:w-1/4 mb-1 md:mb-0">免責事項</dt>
              <dd className="w-full md:w-3/4">本サービスは、ご契約者様とご家族の精神的な安心をサポートするものであり、<strong>ご家族の生命、身体、財産の安全を完全に保証するものではございません。</strong>緊急時には、警察・消防へのご連絡をお願いいたします。</dd>
            </div>
          </dl>
        </div>

        <div className="text-center mt-10">
          <div className="w-12 h-0.5 bg-slate-700/50 mx-auto mb-4"></div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Magosuke. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};