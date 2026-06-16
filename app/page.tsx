  const plans = [
  {
    name: "ライトプラン",
    price: "月額 29,800円",
    items: [
      "月2回オンライン面談（30分）",
      "ホームページ更新・改善相談",
      "Googleビジネスプロフィール相談",
      "AI活用相談",
    ],
  },
  {
    name: "スタンダードプラン",
    price: "月額 49,800円",
    items: [
      "週1回オンライン面談（30分）または月1回訪問",
      "ホームページ更新対応",
      "SEO記事 月1本",
      "Googleビジネスプロフィール運用相談",
      "AI活用相談",
    ],
  },
  {
    name: "パートナープラン",
    price: "月額 99,800円",
    items: [
      "週1回打ち合わせ",
      "ホームページ運営",
      "SEO記事 月2本",
      "EC運営相談",
      "AI導入支援",
      "新規施策提案",
      "月次レポート作成",
    ],
  },
];

const targets = [
  "ホームページを放置している",
  "Googleマップを活用できていない",
  "SNSやAIの使い方がわからない",
  "Web担当者を雇うほどではない",
  "困った時に相談できる人が欲しい",
  "ECや集客を少しずつ整えたい",
];

const strengths = [
  "アパレル業界で約10年の現場経験",
  "店舗運営・販売・MD・ECの視点で提案",
  "SEOライティングまで一貫して対応",
  "Webが苦手な方にもわかりやすく伴走",
];

const flow = ["無料相談", "現状ヒアリング", "改善方針の提案", "制作・運用サポート"];

const faqs = [
  {
    q: "Webに詳しくなくても相談できますか？",
    a: "はい。専門用語を使いすぎず、現状に合わせて必要な内容から整理します。",
  },
  {
    q: "アパレル以外でも依頼できますか？",
    a: "可能です。個人事業主・小規模店舗・地域密着型の事業者を中心に対応しています。",
  },
  {
    q: "まず相談だけでも大丈夫ですか？",
    a: "大丈夫です。現状を聞いたうえで、必要な支援内容や優先順位を一緒に整理します。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            BASE / OUTSOURCED WEB PARTNER
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl">
            小規模事業者向け
            <br />
            外部Web担当。
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
            ホームページ、SEO、Googleマップ、AI活用まで。
            <br className="hidden sm:block" />
            専任担当を雇うほどではないけれど、困った時に相談できるWeb担当としてサポートします。
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            BASE / 今吉 稜太｜小規模事業者向けWeb支援
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:imayoshi@basehp.com"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              無料相談する
            </a>
            <a
              href="#plans"
              className="rounded-full border border-neutral-700 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-neutral-950"
            >
              料金を見る
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Web担当者を雇うほどではない。
            <br />
            でも、相談できる人は欲しい。
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-neutral-300">
            小規模事業者や個人店では、ホームページ・Googleマップ・SNS・AI活用など、
            やるべきことは多いのに、手が回らないケースが少なくありません。
            BASEは、必要なことを一緒に整理し、無理なくWeb活用を進める外部担当として伴走します。
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            FOR YOU
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            こんな方へ
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {targets.map((target) => (
              <div
                key={target}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-lg font-medium"
              >
                {target}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-white px-6 py-24 text-neutral-950 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            PLANS
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            月額プラン
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-3xl border border-neutral-200 p-7"
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  {plan.items.map((item) => (
                    <li key={item}>・{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            SPOT
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            スポット対応
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
              <h3 className="text-xl font-semibold">LP制作</h3>
              <p className="mt-4 text-3xl font-semibold">50,000円〜</p>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
              <h3 className="text-xl font-semibold">HP制作</h3>
              <p className="mt-4 text-3xl font-semibold">100,000円〜</p>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
              <h3 className="text-xl font-semibold">SEOライティング</h3>
              <p className="mt-4 text-3xl font-semibold">要相談</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            PROJECT
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Tagd 開発中
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-neutral-300">
            古着屋・小規模アパレル事業者向けに、商品登録・在庫管理・CSV出力を効率化する
            出品支援ツール「Tagd」を開発中です。
            アパレル現場での経験をもとに、日々の出品作業を少しでも軽くする仕組みを作っています。
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-neutral-400">
            ただホームページを作るだけではなく、小売・ECの現場を理解したうえで、
            事業者の売上や業務改善につながるWeb活用を提案します。
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-neutral-950 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            STRENGTH
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            現場感とWeb施策をつなげる。
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="rounded-2xl border border-neutral-200 p-6 text-lg font-medium"
              >
                {strength}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            FLOW
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            ご相談の流れ
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {flow.map((item, index) => (
              <div key={item} className="rounded-3xl bg-neutral-900 p-6">
                <p className="text-sm text-neutral-500">STEP {index + 1}</p>
                <p className="mt-4 text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            よくある質問
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-neutral-800 p-7"
              >
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-neutral-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-10 text-neutral-950 sm:p-14">
          <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
            まずは、今のWeb活用を
            <br />
            整理しませんか。
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-700">
            ホームページ、SEO、Googleマップ、AI活用。
            どこから改善すべきか分からない状態でも大丈夫です。
            現状を聞いたうえで、優先順位から一緒に整理します。
          </p>

          <a
            href="mailto:imayoshi@basehp.com"
            className="mt-10 inline-block rounded-full bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            無料相談する
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-800 px-6 py-10 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-neutral-400 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">BASE</p>
            <p className="mt-2">代表：今吉 稜太</p>
            <p className="mt-1">
              小規模事業者向け外部Web担当 / HP・SEO・Googleマップ・AI活用支援
            </p>
          </div>

          <div className="space-y-1">
            <p>
              Mail：
              <a
                href="mailto:imayoshi@basehp.com"
                className="text-white underline-offset-4 hover:underline"
              >
                imayoshi@basehp.com
              </a>
            </p>
            <p>Area：全国対応 / オンライン相談可</p>
          </div>
        </div>
      </footer>
    </main>
  );
}