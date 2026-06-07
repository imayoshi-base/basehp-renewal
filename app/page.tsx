  const services = [
  {
    title: "HP制作",
    text: "見た目だけではなく、誰に何を伝え、どこから相談につなげるかまで整理したWebサイトを制作します。",
  },
  {
    title: "SEOライティング",
    text: "検索される記事構成から執筆まで対応。ブランドやサービスの魅力を、伝わる言葉に整理します。",
  },
  {
    title: "EC運営サポート",
    text: "商品ページ、導線、説明文、販売導線を見直し、ECでの売上改善につながる運営を支援します。",
  },
  {
    title: "AI活用支援",
    text: "商品説明文、記事作成、業務効率化など、小規模事業者でも使いやすいAI活用を提案します。",
  },
];

const strengths = [
  "アパレル販売の現場経験がある",
  "EC運営と売上改善の実務経験がある",
  "SEOライティングまで一貫して対応できる",
  "Webが苦手な人にもわかりやすく伴走できる",
];

const flow = [
  "無料相談",
  "現状ヒアリング",
  "改善方針の提案",
  "制作・運用サポート",
];

const faqs = [
  {
    q: "Webに詳しくなくても相談できますか？",
    a: "はい。専門用語を使いすぎず、現状に合わせて必要な内容から整理します。",
  },
  {
    q: "アパレル以外でも依頼できますか？",
    a: "可能です。ただし、特にアパレル・古着・小規模店舗の支援を得意としています。",
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
  BASE / FASHION WEB SUPPORT
</p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl">
            いい商品が、
            <br />
            ちゃんと売れるWeb導線へ。
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
            HP制作、SEOライティング、EC運営サポート、AI活用支援までを一貫して支援。
            <br className="hidden sm:block" />
                "HP制作、SEOライティング、EC運営サポート、AI活用支援まで一貫して支援。アパレル販売とEC運営の現場を知るBASEが、小規模ブランドや古着屋のWeb改善に伴走します。",

          </p>

          <p className="mt-4 text-sm text-neutral-500">
            BASE / 今吉 稜太｜アパレル業界向けWeb支援
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:r0629i@ezweb.ne.jp"
              className="rounded-full bg-white px-8 py-4 text-center text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              無料相談する
            </a>
            <a
              href="#services"
              className="rounded-full border border-neutral-700 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-neutral-950"
            >
              サービスを見る
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            いい商品があるのに、Webで伝わっていない。
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-neutral-300">
            小規模ブランドや個人店では、商品力はあるのに、サイトの導線・文章・ECページの見せ方で損をしているケースが少なくありません。
            必要なのは、派手なデザインではなく「誰に、何を、どう伝えるか」の設計です。
          </p>
        </div>
      </section>

      <section id="services" className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            SERVICES
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            提供サービス
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7 transition hover:border-neutral-600"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-neutral-300">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
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
            RESULTS
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            実績・対応領域
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-5xl font-semibold">10年+</p>
              <p className="mt-5 text-neutral-300">
                アパレル販売・店舗運営経験
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-5xl font-semibold">EC</p>
              <p className="mt-5 text-neutral-300">
                商品ページ改善・運営サポート
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7">
              <p className="text-5xl font-semibold">SEO</p>
              <p className="mt-5 text-neutral-300">
                記事構成・執筆・導線設計
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60 px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            FLOW
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            ご相談の流れ
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {flow.map((item, index) => (
              <div key={item} className="rounded-3xl bg-neutral-950 p-6">
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
            まずは、今のWeb導線を
            <br />
            整理しませんか。
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-neutral-700">
            HP、EC、SEO、AI活用。どこから改善すべきか分からない状態でも大丈夫です。
            現状を聞いたうえで、優先順位から一緒に整理します。
          </p>

          <a
            href="mailto:r0629i@ezweb.ne.jp"
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
              アパレル業界向けHP制作・SEOライティング・EC運営サポート・AI活用支援
            </p>
          </div>

          <div className="space-y-1">
            <p>
              Mail：
              <a
                href="mailto:r0629i@ezweb.ne.jp"
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