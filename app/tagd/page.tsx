import type { Metadata } from "next";
import styles from "./tagd.module.css";
export const metadata: Metadata = {
 title: "Tagd｜古着屋・セレクトショップの在庫管理",
 description: "商品・SKU別在庫、入出庫、取置き、販売確定、操作履歴をひとつに。1店舗限定・2週間無料のモニター店舗を募集しています。",
 alternates: {canonical: "/tagd"},
 openGraph: {title:"Tagd｜在庫の先に、お店の時間を。",description:"古着屋・セレクトショップのための在庫管理。無料モニター1店舗募集。",url:"https://www.basehp.com/tagd",images:[]},
 twitter: {card:"summary",title:"Tagd｜古着屋・セレクトショップの在庫管理",description:"1店舗限定・2週間無料モニター募集。"},
 robots: {index:true,follow:true},
};
const features = [
 ["01", "一着ずつ、把握する。", "商品・SKU別在庫", "商品情報と、サイズ・色ごとのSKUを登録。実在庫・取置き分・販売可能な数量を確認できます。"],
 ["02", "日々の動きを、残す。", "入庫・出庫・在庫調整", "仕入れによる入庫、店頭販売などの出庫、棚卸しの差分調整を記録。数量と理由を残せます。"],
 ["03", "取置きから、販売まで。", "取置き・販売確定", "取置き分を確保し、販売可能数と区別。取置き後の販売確定まで管理できます。"],
 ["04", "あとから、たどれる。", "操作履歴", "いつ、どんな在庫操作をしたか。変更履歴を確認して、日々の在庫の動きを振り返れます。"],
];
export default function TagdPage(){return <div className={styles.page}>
<a className={styles.skip} href="#main">本文へ移動</a>
<header className={styles.header}><a href="#" className={styles.logo} aria-label="Tagd ページ先頭">Tagd<span>.</span></a><nav aria-label="Tagd"><a href="#features">できること</a><a href="#monitor">モニター募集 ↗</a></nav></header>
<main id="main">
<section className={styles.hero}><p className={styles.eyebrow}>INVENTORY, FOR THE INDEPENDENTS.</p><h1>在庫の先に、<br/>お店の時間を。</h1><div className={styles.heroBottom}><p>一着を選ぶ。売場をつくる。お客さまと話す。<br/>その時間を、もっと大切に。<br/><br/>Tagdは、小規模な古着屋・セレクトショップのための<br className={styles.desktop}/>在庫管理ツールです。</p><div><a className={styles.button} href="#monitor">無料モニターについて ↗</a><p className={styles.small}>1店舗限定 ／ 2週間無料</p></div></div></section>
<section className={styles.screen} aria-labelledby="screen-title"><div className={styles.sectionLine}><h2 id="screen-title">THE WORKSPACE</h2><span>SKU・在庫管理画面</span></div><div className={styles.screenCrop}><img src="/tagd/inventory-demo.png" width="724" height="2172" alt="Tagdの検証画面をもとに商品写真・商品名などを加工したデモ画像。商品・SKU別の実在庫・取置中・販売可能数、入出庫操作、取置一覧、変更履歴が並ぶ。"/></div><p className={styles.small}>検証環境の実画面をもとに、商品写真・商品名などを加工したデモ画像です。変更履歴は一部を掲載しています。画面は開発に伴い変更する場合があります。</p></section>
<section id="features" className={styles.section}><p className={styles.eyebrow}>LESS FRICTION. MORE FOCUS.</p><h2>お店の在庫を、<br/>ひとつの流れに。</h2><div className={styles.features}>{features.map(([n,title,label,body])=><article key={n}><span className={styles.number}>{n}</span><p className={styles.small}>{label}</p><h3>{title}</h3><p>{body}</p></article>)}</div><p className={styles.note}>外部ECの在庫や、商品の公開・売り切れ状態は自動更新されません。</p></section>
<section className={styles.about}><p className={styles.eyebrow}>FROM THE SHOP FLOOR.</p><h2>現場で感じた課題を、<br/>現場のための道具に。</h2><p>販売、店舗運営、古着・リユース、EC。<br/>BASEが現場で培った経験をもとに、<br/>日々の在庫管理をシンプルにするために開発しています。</p><a href="/">BASEについて ↗</a></section>
<section id="monitor" className={styles.monitor}><p className={styles.eyebrow}>EARLY ACCESS / 01 STORE ONLY</p><h2>最初の一店舗を、<br/>募集しています。</h2><p>実際のお店で使いながら、Tagdを一緒に育ててください。</p><dl><div><dt>対象</dt><dd>小規模な古着屋・セレクトショップ</dd></div><div><dt>募集</dt><dd>1店舗限定</dd></div><div><dt>期間・料金</dt><dd>2週間・無料</dd></div><div><dt>お願い</dt><dd>利用後のフィードバックへのご協力</dd></div></dl><p>お申し込み・お問い合わせは、InstagramのDMまたはメールで。<br/>「Tagdモニター希望」と店舗名をお送りください。</p><div className={styles.contacts}><a className={styles.instagram} href="https://www.instagram.com/base_imysryt/" target="_blank" rel="noopener noreferrer">InstagramでDMを送る ↗<span>@base_imysryt（新しいタブで開きます）</span></a><a className={styles.email} href="mailto:imayoshi@basehp.com?subject=Tagd%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E5%B8%8C%E6%9C%9B">メールで問い合わせる ↗<span>imayoshi@basehp.com</span></a></div><p className={styles.small}>Instagramのプロフィールを開き、「メッセージ」からDMをお送りください。</p></section>
</main><footer className={styles.footer}><a className={styles.logo} href="#">Tagd.</a><a href="/">Developed by BASE ↗</a></footer></div>}
