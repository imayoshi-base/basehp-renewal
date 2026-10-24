const noteUrl = "https://note.com/base_fashion";
const email = "imayoshi@basehp.com";
const contactUrl = `mailto:${email}`;

const services = [
  {
    number: "01",
    title: "DX・業務改善支援",
    subtitle: "現場とシステムの間を、つなぐ。",
    description:
      "転記や手作業、担当者に依存した業務など、現場の困りごとを整理。業務フローの見直しから、ツールの選定・導入、運用の整備まで、必要な範囲を一緒に考えます。AI・AX（AIを活かした業務変革）も、課題に合う場合に活用する手段のひとつです。",
    items: ["業務の棚卸し・課題整理", "商品・在庫情報の整理、転記作業の見直し", "ツール導入・AI活用と運用定着の支援"],
  },
  {
    number: "02",
    title: "EC・店舗運営支援",
    subtitle: "日々の運営を、続けやすい仕組みに。",
    description:
      "販売・店舗運営とECに関わってきた経験をもとに、商品情報や出品作業、販売導線を見直します。店舗とEC、それぞれの現場に合う無理のない運営を考えます。",
    items: ["商品登録・出品フローの整理", "店舗・EC間の情報共有の見直し", "商品構成・売場・販売導線の相談"],
  },
  {
    number: "03",
    title: "Web・コンテンツ支援",
    subtitle: "事業の魅力を、伝わるかたちに。",
    description:
      "Web制作や記事制作の経験をもとに、サイトの構成と導線、商品やブランドの伝え方を整理。運営の目的に合わせて、Webとコンテンツの改善を支援します。",
    items: ["Webサイトの制作・改善", "SEOを意識した構成・記事制作", "ブランド・商品紹介、既存記事の見直し"],
  },
];

const experiences = [
  {
    label: "APPAREL",
    title: "アパレル販売・店舗運営",
    description:
      "adidas、White Mountaineering、LOEWEでの勤務を経験。これまでのアパレル業務を通じて、販売・店舗運営・VMD・MDに関わり、商品の見せ方、伝え方、売り方を現場で学んできました。",
  },
  {
    label: "REUSE / EC",
    title: "古着・リユース企業での業務経験",
    description:
      "古着・リユース事業の現場で、EC運営や日々の業務に関わってきました。商品を扱う現場とオンライン販売の両方を見ながら、運営や作業の進め方を考える経験を重ねています。",
  },
  {
    label: "STORE PLANNING",
    title: "古着屋の新規立ち上げ",
    description:
      "古着屋の立ち上げに関わり、コンセプト整理、商品構成、販売導線、Web・SNS活用などを経験しました。",
  },
  {
    label: "WEB / WRITING",
    title: "Web制作・記事制作",
    description:
      "Wixでのホームページ制作、Next.js / Vercelを使ったサイトリニューアルを経験。構成設計、導線整理、SEO設定に加え、アパレルブランドや地域紹介の記事制作にも取り組んできました。",
  },

];

const container = "mx-auto w-full max-w-6xl";
const section = "scroll-mt-8 px-6 py-20 sm:px-10 sm:py-24 lg:px-20";
const eyebrow = "text-xs tracking-[0.25em] text-neutral-400";
const focus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";
const button = `inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-medium transition motion-reduce:transition-none ${focus}`;

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-neutral-950 text-neutral-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-white focus:p-4 focus:text-neutral-950">
        本文へ移動
      </a>
      <header className="border-b border-neutral-800 px-6 sm:px-10 lg:px-20">
        <div className={`${container} flex flex-wrap items-center justify-between gap-5 py-6`}>
          <a href="#top" aria-label="BASE トップへ" className={`text-xl font-semibold tracking-[0.2em] ${focus}`}>BASE<span className="text-neutral-500">.</span></a>
          <nav aria-label="メインナビゲーション" className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-neutral-300 sm:gap-x-7 sm:text-sm">
            {[ ["サービス", "services"], ["プロフィール", "about"], ["経験", "experience"], ["開発中の取り組み", "projects"], ["お問い合わせ", "contact"] ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`transition hover:text-white ${focus}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-20">
          <div className={container}>
            <p className={eyebrow}>BASE / RYOTA IMAYOSHI</p>
            <h1 id="hero-title" className="mt-8 text-3xl font-semibold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">現場を知り、<br />仕組みをつくり、<br />事業を前に進める。</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300">アパレル・リユース業界のDX・業務改善支援</p>
            <p className="mt-8 text-xl font-medium sm:text-2xl">今吉 稜太 <span className="ml-2 inline-block text-xs font-normal tracking-[0.15em] text-neutral-400">RYOTA IMAYOSHI</span></p>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-neutral-300">
              <span className="block">アパレル・リユース企業に向けて、現場とシステムの間にある課題を整理します。</span>
              <span className="block">販売・店舗運営・ECの経験をもとに、業務の見直しから仕組みづくりまで。</span>
              <span className="block">BASEは、現場で使い続けられる方法を一緒に考えます。</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className={`${button} bg-white text-neutral-950 hover:bg-neutral-200`}>仕事について相談する <span aria-hidden="true" className="ml-5">↗</span></a>
              <a href="#services" className={`${button} border border-neutral-600 hover:bg-neutral-900`}>サービスを見る <span aria-hidden="true" className="ml-5">↓</span></a>
            </div>
            <p className="mt-16 border-t border-neutral-800 pt-6 text-xs leading-6 tracking-widest text-neutral-400">DX & OPERATIONS / EC & STORES / WEB & CONTENT</p>
            <p lang="en" className="mt-3 text-xs leading-6 tracking-wider text-neutral-400">Based in Fukuoka / Available Nationwide</p>
          </div>
        </section>

        <section id="services" aria-labelledby="services-title" className={`${section} bg-neutral-100 text-neutral-950`}>
          <div className={container}>
            <p className="text-xs tracking-[0.25em] text-neutral-600">SERVICES</p>
            <h2 id="services-title" className="mt-5 text-3xl font-semibold leading-snug sm:text-4xl">業務の仕組みを軸に、<br className="sm:hidden" />3つの支援。</h2>
            <p className="mt-6 max-w-3xl text-pretty leading-8 text-neutral-600">主軸はDX・業務改善支援。EC・店舗運営、Web・コンテンツも含めて、いま抱えている課題を伺い、取り組む順番と必要な支援を整理します。</p>
            <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
              {services.map((service) => (
                <article key={service.number} className="border-t border-neutral-400 pt-6">
                  <p className="font-mono text-sm text-neutral-500">{service.number}</p>
                  <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-5 font-medium leading-7">{service.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{service.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-neutral-300 pt-6 text-sm leading-6 text-neutral-700">
                    {service.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">—</span><span>{item}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className={`${section} border-b border-neutral-800`}>
          <div className={`${container} grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16`}>
            <div><p className={eyebrow}>ABOUT</p><p className="mt-6 text-2xl font-semibold">今吉 稜太</p><p className="mt-2 text-xs tracking-[0.15em] text-neutral-400">RYOTA IMAYOSHI / BASE</p></div>
            <div>
              <h2 id="about-title" className="text-3xl font-semibold leading-normal sm:text-4xl">東京で培った経験を、<br />福岡から。</h2>
              <div className="mt-6 space-y-5 leading-8 text-neutral-300">
                <p>私は、東京でのアパレル販売・店舗運営で培った現場の視点を大切にしています。日々の作業がどう進み、どこに負担があるのか。その理解から、業務改善を考えます。</p>
                <p>adidas、White Mountaineering、LOEWEでの勤務を経て、古着・リユースの現場やECにも関わってきました。販売・店舗運営・VMD・MDの経験をもとに、文章やWeb、日々の業務の仕組みへと取り組みを広げています。</p>
                <p>現在は福岡県を活動拠点に、福岡での対面でのご相談・支援と、全国へのオンライン対応を行っています。東京で培った経験を活かし、アパレル・リユース事業の現場に合う業務改善を一緒に考えます。</p>
                <p>BASEは、私・今吉稜太が個人で運営する事業です。DX・業務改善を軸に、EC・店舗運営、Web・コンテンツを支援します。AIやシステムの導入そのものを目的にせず、現場で使えて、続けられる仕組みを考えます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className={section}>
          <div className={container}>
            <p className={eyebrow}>EXPERIENCE</p>
            <h2 id="experience-title" className="mt-5 text-3xl font-semibold sm:text-4xl">支援の土台となる、これまでの経験。</h2>
            <p className="mt-6 max-w-3xl leading-8 text-neutral-300"></p>
            <div className="mt-12">
              {experiences.map((experience) => (
                <article key={experience.title} className="grid gap-4 border-t border-neutral-800 py-8 md:grid-cols-[1fr_2fr] md:gap-16">
                  <p className="text-xs leading-7 tracking-[0.15em] text-neutral-400">{experience.label}</p>
                  <div><h3 className="text-xl font-medium">{experience.title}</h3><p className="mt-4 max-w-2xl text-sm leading-8 text-neutral-300">{experience.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className={`${section} border-t border-neutral-800`}>
          <div className={container}>
            <p className={eyebrow}>PROJECTS</p>
            <h2 id="projects-title" className="mt-5 text-3xl font-semibold sm:text-4xl">現場の課題から、仕組みを試す。</h2>
            <article className="mt-12 grid gap-4 border-t border-neutral-800 py-8 md:grid-cols-[1fr_2fr] md:gap-16">
              <div><p className="text-xs tracking-[0.15em] text-neutral-400">PERSONAL PROJECT</p><p className="mt-4 inline-block rounded-full border border-neutral-600 px-4 py-2 text-sm">無料モニター募集中</p></div>
              <div>
                <h3 className="text-xl font-medium">Tagd — 古着屋・セレクトショップの在庫管理</h3>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-neutral-300">商品・SKU別の在庫管理から、入出庫、取置き、販売確定、操作履歴の確認まで。日々の店舗業務をシンプルにするWebアプリです。</p>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-neutral-400">現在、1店舗限定・2週間無料のモニター店舗を募集しています。実際のお店で使いながら、フィードバックにご協力いただける小規模な古着屋・セレクトショップが対象です。</p>
                <a href="/tagd" className={`mt-6 inline-block text-sm underline underline-offset-4 ${focus}`}>Tagdの詳細・無料モニター募集を見る →</a>
              </div>
            </article>
          </div>
        </section>

        <section id="note" aria-labelledby="note-title" className={`${section} border-y border-neutral-800 bg-neutral-900/60`}>
          <div className={`${container} flex flex-col items-start justify-between gap-8 md:flex-row md:items-end`}>
            <div><p className={eyebrow}>JOURNAL / NOTE</p><h2 id="note-title" className="mt-5 text-3xl font-semibold sm:text-4xl">考えたことを、言葉に。</h2><p className="mt-6 max-w-2xl leading-8 text-neutral-300">アパレル、働き方、Web制作、AI活用、地域のこと。<br className="hidden sm:block" />日々の気づきや考えをnoteで発信しています。</p></div>
            <a href={noteUrl} target="_blank" rel="noopener noreferrer" className={`${button} shrink-0 border border-neutral-600 hover:bg-neutral-800`}>noteを読む<span className="sr-only">（新しいタブで開きます）</span><span aria-hidden="true" className="ml-5">↗</span></a>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className={section}>
          <div className={container}>
            <p className={eyebrow}>CONTACT</p>
            <h2 id="contact-title" className="mt-5 text-balance text-3xl font-semibold leading-snug sm:text-5xl">まずは、<br className="sm:hidden" />ご相談ください。</h2>
            <p className="mt-6 max-w-3xl text-pretty leading-8 text-neutral-300">
              <span className="block">手作業や二重入力、商品・在庫情報の整理、EC・店舗運営の見直しなど。</span>
              <span className="block">福岡での対面でのご相談・支援、全国からのオンライン相談に対応しています。</span>
              <span className="block">現在お困りのこと、使っているツール、ご希望の時期をメールでお送りください。</span>
              <span className="block">課題がまだ整理できていなくても構いません。私が内容を拝見し、対応できる範囲と進め方をご相談します。</span>
            </p>
            <a href={contactUrl} className={`${button} mt-10 bg-white text-neutral-950 hover:bg-neutral-200`}>メールで相談する <span aria-hidden="true" className="ml-5">↗</span></a>
            <p className="mt-5 text-sm text-neutral-400"><a href={contactUrl} className={`break-all underline underline-offset-4 hover:text-white ${focus}`}>{email}</a></p>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 px-6 py-8 sm:px-10 lg:px-20">
        <div className={`${container} flex flex-col gap-6 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between`}>
          <div className="space-y-3 leading-6">
            <p><span className="mr-4 font-semibold tracking-[0.15em] text-white">BASE</span>今吉 稜太 / RYOTA IMAYOSHI</p>
            <p>活動拠点：福岡県｜全国オンライン対応</p>
          </div>
          <a href="#top" className={`self-start hover:text-white ${focus}`}>ページの先頭へ ↑</a>
        </div>
      </footer>
    </div>
  );
}
