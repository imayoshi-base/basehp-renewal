const experiences = [
  {
    title: "アパレル販売・店舗運営",
    description:
      "adidas、White Mountaineering、LOEWEなどで販売・店舗運営・VMD・MDに関わってきました。商品をどう見せるか、どう伝えるか、どう売るかを現場で学んできました。",
  },
  {
    title: "HP制作・リニューアル",
    description:
      "Wixでのホームページ制作、Next.js / Vercelを使ったサイトリニューアルを経験。構成設計、導線整理、SEO設定まで行いました。",
  },
  {
    title: "SEOライティング",
    description:
      "アパレルブランド紹介記事や地域紹介記事を中心に、検索意図を意識した記事制作を行ってきました。",
  },
  {
    title: "古着屋の新規立ち上げ",
    description:
      "古着屋の立ち上げに関わり、商品構成、販売導線、Web・SNS活用、コンセプト整理などを経験しました。",
  },
  {
    title: "Tagd",
    description:
      "古着EC出品支援ツールとして、商品登録・在庫管理・CSV出力を想定したWebアプリを開発。現場の出品作業を効率化する仕組みを検証しています。",
  },
];

const noteUrl = "https://note.com/base_fashion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            BASE / RYOTA IMAYOSHI PORTFOLIO
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl">
            アパレルの現場から、
            <br />
            Webと文章へ。
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
            アパレル販売・店舗運営の経験をもとに、
            Web制作、SEOライティング、EC改善、アプリ開発に取り組んできました。
            <br className="hidden sm:block" />
            このサイトは、これまでの経験や制作物、発信をまとめたポートフォリオです。
          </p>

          <p className="mt-4 text-sm text-neutral-500">
            BASE / 今吉 稜太
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            ABOUT
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            現場で見てきたことを、
            <br />
            Webと文章に落とし込む。
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-neutral-300">
            アパレル業界で約10年、販売・店舗運営・VMD・MD・ECに関わってきました。
            商品をどう見せるか、どう伝えるか、どう売るか。
            その現場感をもとに、Web制作、SEOライティング、EC改善、アプリ開発にも取り組んでいます。
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-neutral-950 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            EXPERIENCE
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            これまでやってきたこと
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="rounded-3xl border border-neutral-200 p-7"
              >
                <h3 className="text-2xl font-semibold">
                  {experience.title}
                </h3>
                <p className="mt-5 leading-8 text-neutral-700">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.45em] text-neutral-500 sm:text-sm">
            NOTE
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            発信・コラム
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-neutral-300">
            アパレル、働き方、Web制作、AI活用、地域のことなどをnoteで発信しています。
            文章や考え方はこちらにまとめています。
          </p>

          <a
            href={noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            noteを見る
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-800 px-6 py-10 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-neutral-400 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">BASE</p>
            <p className="mt-2">今吉 稜太</p>
            <p className="mt-1">
              Apparel / Web / Writing / EC / Application Development
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
            <p>
              note：
              <a
                href={noteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline-offset-4 hover:underline"
              >
                note.com/base_fashion
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}