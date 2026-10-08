const noteUrl = "https://note.com/base_fashion";
const email = "imayoshi@basehp.com";
const contactUrl = `mailto:${email}`;

const services = [
  {
    number: "01",
    title: "SEOライティング",
    subtitle: "探している人に、伝わる文章を。",
    description:
      "アパレルブランドや地域紹介の記事制作経験をもとに、検索意図と読者の関心を整理。商品の背景や魅力を、わかりやすい言葉で届けます。",
    items: ["記事の構成・執筆", "ブランド・商品紹介", "既存記事の見直し"],
  },
  {
    number: "02",
    title: "EC運営・業務改善",
    subtitle: "日々の運営を、続けやすい仕組みに。",
    description:
      "販売・店舗運営とECに関わってきた経験から、商品情報の整理や販売導線、日々の作業を見直します。現場の使いやすさを大切に、改善方法を一緒に考えます。",
    items: ["商品情報・販売導線の整理", "出品作業・運用フローの見直し", "Web・ツールを使った業務改善の相談"],
  },
  {
    number: "03",
    title: "アパレル企画・コンサル",
    subtitle: "現場の視点で、次の一歩を考える。",
    description:
      "販売・VMD・MDや古着屋の立ち上げに関わった経験をもとに、コンセプトや商品構成、見せ方を整理。店舗とWebの接点も含めて、ご相談を伺います。",
    items: ["コンセプト・商品構成の相談", "売場づくり・商品の見せ方", "店舗とWeb・SNSの活用相談"],
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
  {
    label: "PERSONAL PROJECT",
    title: "Tagd — 古着EC出品支援ツール",
    description:
      "商品登録・在庫管理・CSV出力を想定したWebアプリを開発。出品作業を効率化する仕組みを検証している個人プロジェクトです。",
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
            {[ ["サービス", "services"], ["プロフィール", "about"], ["経験・制作", "experience"], ["お問い合わせ", "contact"] ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`transition hover:text-white ${focus}`}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-20">
          <div className={container}>
            <p className={eyebrow}>BASE / RYOTA IMAYOSHI</p>
            <h1 id="hero-title" className="mt-8 text-4xl font-semibold leading-[1.3] tracking-tight sm:text-6xl lg:text-7xl">アパレルの現場から、<br />伝える、整える、<br className="sm:hidden" />つくる。</h1>
            <p className="mt-8 text-xl font-medium sm:text-2xl">今吉 稜太 <span className="ml-2 inline-block text-xs font-normal tracking-[0.15em] text-neutral-400">RYOTA IMAYOSHI</span></p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300">アパレル業界で約10年。販売・店舗運営から、Webと文章へ。<br />現場で培った視点をもとに、SEOライティング、EC運営・業務改善、アパレル企画に取り組んでいます。</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className={`${button} bg-white text-neutral-950 hover:bg-neutral-200`}>仕事について相談する <span aria-hidden="true" className="ml-5">↗</span></a>
              <a href="#services" className={`${button} border border-neutral-600 hover:bg-neutral-900`}>サービスを見る <span aria-hidden="true" className="ml-5">↓</span></a>
            </div>
            <p className="mt-16 border-t border-neutral-800 pt-6 text-xs leading-6 tracking-widest text-neutral-400">WRITING / EC OPERATIONS / APPAREL PLANNING</p>
          </div>
        </section>

        <section id="services" aria-labelledby="services-title" className={`${section} bg-neutral-100 text-neutral-950`}>
          <div className={container}>
            <p className="text-xs tracking-[0.25em] text-neutral-600">SERVICES</p>
            <h2 id="services-title" className="mt-5 text-3xl font-semibold leading-snug sm:text-4xl">現場の経験を、<br className="sm:hidden" />3つのかたちで。</h2>
            <p className="mt-6 max-w-2xl leading-8 text-neutral-600">文章、運営、企画。いま抱えている課題を伺い、必要なことを整理するところからご一緒します。</p>
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
              <h2 id="about-title" className="text-3xl font-semibold leading-normal sm:text-4xl">商品と人のあいだに、<br />できることを。</h2>
              <div className="mt-6 space-y-5 leading-8 text-neutral-300">
                <p>商品をどう見せるか、どう伝えるか、どう売るか。アパレルの現場で向き合ってきた問いが、いまの仕事の土台です。</p>
                <p>adidas、White Mountaineering、LOEWEでの勤務を経て、古着・リユースの現場やECにも関わってきました。販売・店舗運営・VMD・MDの経験をもとに、文章やWeb、日々の業務の仕組みへと取り組みを広げています。</p>
                <p>BASEは、私自身の経験と制作、発信をまとめた活動の拠点です。お店やブランドの背景を理解し、その魅力が届く伝え方と、無理なく続けられる運営を考えます。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className={section}>
          <div className={container}>
            <p className={eyebrow}>EXPERIENCE & PROJECTS</p>
            <h2 id="experience-title" className="mt-5 text-3xl font-semibold sm:text-4xl">これまでの経験と、いまの取り組み。</h2>
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

        <section id="note" aria-labelledby="note-title" className={`${section} border-y border-neutral-800 bg-neutral-900/60`}>
          <div className={`${container} flex flex-col items-start justify-between gap-8 md:flex-row md:items-end`}>
            <div><p className={eyebrow}>JOURNAL / NOTE</p><h2 id="note-title" className="mt-5 text-3xl font-semibold sm:text-4xl">考えたことを、言葉に。</h2><p className="mt-6 max-w-2xl leading-8 text-neutral-300">アパレル、働き方、Web制作、AI活用、地域のこと。<br className="hidden sm:block" />日々の気づきや考えをnoteで発信しています。</p></div>
            <a href={noteUrl} target="_blank" rel="noopener noreferrer" className={`${button} shrink-0 border border-neutral-600 hover:bg-neutral-800`}>noteを読む<span className="sr-only">（新しいタブで開きます）</span><span aria-hidden="true" className="ml-5">↗</span></a>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className={section}>
          <div className={container}>
            <p className={eyebrow}>CONTACT</p>
            <h2 id="contact-title" className="mt-5 text-3xl font-semibold leading-snug sm:text-5xl">まずは、ご連絡ください。</h2>
            <p className="mt-6 max-w-2xl leading-8 text-neutral-300">記事制作、EC運営の見直し、店舗やブランドの企画など。<br className="hidden sm:block" />ご相談内容、ご希望の時期、現在お困りのことをメールでお送りください。内容を拝見し、対応できる範囲をご相談します。</p>
            <a href={contactUrl} className={`${button} mt-10 bg-white text-neutral-950 hover:bg-neutral-200`}>メールで相談する <span aria-hidden="true" className="ml-5">↗</span></a>
            <p className="mt-5 text-sm text-neutral-400"><a href={contactUrl} className={`break-all underline underline-offset-4 hover:text-white ${focus}`}>{email}</a></p>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 px-6 py-8 sm:px-10 lg:px-20">
        <div className={`${container} flex flex-col gap-6 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between`}>
          <p><span className="mr-4 font-semibold tracking-[0.15em] text-white">BASE</span>今吉 稜太 / RYOTA IMAYOSHI</p>
          <a href="#top" className={`self-start hover:text-white ${focus}`}>ページの先頭へ ↑</a>
        </div>
      </footer>
    </div>
  );
}
