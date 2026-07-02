import React from 'react'
import { createRoot } from 'react-dom/client'
import { CalendarDays, Car, CloudSun, ExternalLink, MapPin, Navigation, ShipWheel, ShoppingBag, Sparkles, Utensils, Waves } from 'lucide-react'
import './styles.css'

type Stop = {
  time: string
  title: string
  tag: string
  intro: string
  image: string
  map: string
  tips: string[]
}

type Day = {
  date: string
  title: string
  subtitle: string
  mood: string
  color: string
  hero: string
  stops: Stop[]
}

const map = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
const img = (query: string) => {
  const label = query
    .replace(/okinawa|japan|beach|sunset|shopping|mall|street|city|hotel|morning|night/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 34) || 'Okinawa'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#075985"/><stop offset="0.5" stop-color="#0f766e"/><stop offset="1" stop-color="#f59e0b"/>
      </linearGradient>
      <radialGradient id="sun" cx="82%" cy="18%" r="28%"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#fde68a00"/></radialGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <rect width="1200" height="800" fill="url(#sun)" opacity=".9"/>
    <path d="M0 560 C180 520 310 620 500 570 C700 520 830 590 1200 540 L1200 800 L0 800 Z" fill="#e0f2fe" opacity=".86"/>
    <path d="M0 620 C230 570 400 680 610 620 C830 560 960 660 1200 600 L1200 800 L0 800 Z" fill="#38bdf8" opacity=".34"/>
    <circle cx="1000" cy="145" r="76" fill="#fde68a" opacity=".85"/>
    <text x="120" y="118" fill="white" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans TC',sans-serif" font-size="42" font-weight="800" opacity=".92">沖繩行程</text>
    <text x="120" y="196" fill="white" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans TC',sans-serif" font-size="72" font-weight="900">${label}</text>
    <text x="120" y="720" fill="#083344" font-family="-apple-system,BlinkMacSystemFont,'Noto Sans TC',sans-serif" font-size="32" font-weight="800" opacity=".72">Travel card image</text>
  </svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const days: Day[] = [
  {
    date: '7/8',
    title: '南部海邊＋太鼓舞＋玉泉洞＋Outlet＋夕陽壽司',
    subtitle: '這天已定稿：主打輕鬆玩海、南部文化景點、Outlet、旁邊海灘夕陽，晚上回那霸吃鮨おにかい。',
    mood: '約會感 / 不回飯店 / 南部順路',
    color: 'cyan',
    hero: img('okinawa beach sunset'),
    stops: [
      { time: '08:45', title: 'Tokyu Stay Okinawa Naha 出發', tag: '出發', intro: '從那霸市區往南部出發，這天路線會一路往糸滿與豊崎方向回收，不需要繞回飯店。', image: img('naha okinawa city hotel'), map: map('Tokyu Stay Okinawa Naha'), tips: ['車上先放乾淨衣物、濕紙巾、塑膠袋。', '早餐不要吃太重，白天會有玩海與園區行程。'] },
      { time: '09:30–10:50', title: '新原 Beach 玩海 / 玻璃船', tag: '海邊', intro: '南部經典海灘，適合輕鬆玩水、搭玻璃船或踩水拍照；不是重度水上活動日，重點是保留海感。', image: img('okinawa miibaru beach glass boat'), map: map('新原ビーチ'), tips: ['確認當天玻璃船是否因海況停駛。', '下水後務必沖洗換乾衣，晚上是壽司約會。'] },
      { time: '10:50–11:25', title: '沖洗、換乾衣服', tag: '整理', intro: '不回飯店的關鍵時段，把海水、防曬、沙子處理乾淨，後面才能舒服逛園區與吃晚餐。', image: img('beach changing room towel'), map: map('新原ビーチ シャワー'), tips: ['準備毛巾、乾衣、濕紙巾、除汗濕巾。', '濕衣物用防水袋分開收。'] },
      { time: '11:40–12:20', title: 'おきなわワールド 午餐 / 入園', tag: '園區', intro: '新原到沖繩世界車程短，進園後先簡單吃、買票與抓太鼓舞座位。', image: img('okinawa world gyokusendo'), map: map('おきなわワールド'), tips: ['午餐以簡單為主，避免拖到 12:30 表演。', '先確認表演場地位置。'] },
      { time: '12:30–13:00', title: 'スーパーエイサーショー / 太鼓舞', tag: '表演', intro: '沖繩世界的重點表演，節奏強、很有在地感，適合安排在中午最熱時段。', image: img('okinawa eisa dance'), map: map('スーパーエイサーショー おきなわワールド'), tips: ['提早 10 分鐘入場比較穩。', '若表演時間臨時異動，以園區公告為準。'] },
      { time: '13:05–14:20', title: '玉泉洞＋園區簡逛', tag: '景點', intro: '玉泉洞是南部最代表性的鐘乳石洞，洞內較涼，適合避開午後烈日。', image: img('Gyokusendo cave Okinawa'), map: map('玉泉洞'), tips: ['洞內濕滑，鞋子要好走。', '不要逛太細，14:20 要往 Outlet 移動。'] },
      { time: '14:45–17:30', title: 'Outlet Ashibinaa', tag: '逛街', intro: '下午用 Outlet 當冷氣休息與購物段，離美らSUN Beach 很近，是南部回那霸前的好停點。', image: img('outlet mall shopping japan'), map: map('Okinawa Outlet Mall Ashibinaa'), tips: ['17:30 前離開，夕陽才不趕。', '可先查想逛品牌，避免漫無目的消耗體力。'] },
      { time: '17:40–18:50', title: '豊崎美らSUN Beach 夕陽', tag: '夕陽', intro: 'Outlet 旁邊的便利夕陽點，不是這趟最漂亮沙灘，但非常適合短停散步、拍照、收尾。', image: img('okinawa sunset beach'), map: map('豊崎美らSUNビーチ'), tips: ['定位是「簡單看夕陽」，不要再下水。', '日落前 30–45 分鐘抵達最舒服。'] },
      { time: '18:50–19:20', title: '回那霸市區 / 停車', tag: '移動', intro: '從豊崎回那霸市區，預留停車與散步時間，避免壓線到壽司預約。', image: img('naha street evening'), map: map('Naha Kumoji parking'), tips: ['先找鮨おにかい附近 coin parking。', '若交通塞，寧可提早離開海灘。'] },
      { time: '20:30', title: '鮨おにかい', tag: '晚餐', intro: '生日約會晚餐主角。玩海與園區後，以壽司收尾比連續吃燒肉更平衡，也保留精緻感。', image: img('sushi omakase counter'), map: map('鮨おにかい 那覇'), tips: ['確認訂位時間與座位。', '避免穿著仍潮濕或帶海水味進店。'] },
    ],
  },
  {
    date: '7/9',
    title: '北部＋主浮潛＋燒肉本部',
    subtitle: '整趟最早起、最遠的一天；先避開水族館人潮，再把下午留給瀨底 / 本部周邊正式浮潛。',
    mood: '北部海景 / 主浮潛日 / 晚餐品牌牛',
    color: 'blue',
    hero: img('okinawa aquarium sesoko snorkeling'),
    stops: [
      { time: '06:15', title: 'Tokyu Stay 出發', tag: '早起', intro: '從那霸到本部需要抓約 2 小時，早出發才能在水族館開門時進場。', image: img('okinawa road trip morning'), map: map('Tokyu Stay Okinawa Naha to Okinawa Churaumi Aquarium'), tips: ['前一晚先加油、準備早餐與水。', '這天是體力最大消耗日。'] },
      { time: '08:30–09:50', title: '美麗海水族館主館 / 黑潮之海', tag: '水族館', intro: '早上先看主館與黑潮之海大水槽，避開中午與午後人潮。', image: img('Okinawa Churaumi Aquarium whale shark'), map: map('沖縄美ら海水族館'), tips: ['不要卡在商店，先完成主館重點。', '黑潮之海可以多留幾分鐘。'] },
      { time: '10:10–11:00', title: 'Emerald Beach 短停', tag: '沙灘', intro: '水族館旁的海灘，早上短停看海最舒服；不當主玩水點，避免接近正中午曝曬。', image: img('Emerald Beach Okinawa'), map: map('Emerald Beach Okinawa'), tips: ['拍照、散步即可，不要拖太久。', '11:00 要往海豚劇場移動。'] },
      { time: '11:30–11:50', title: '海豚表演', tag: '表演', intro: '看 11:30 場次，讓早上先有海灘時間，也不用硬趕 10:30。', image: img('okinawa dolphin show'), map: map('Okichan Theater'), tips: ['11:10–11:20 抵達找位。', '場次請以官方當日公告為準。'] },
      { time: '12:00–14:15', title: '午餐 / 咖啡 / 休息', tag: '避暑', intro: '中午最曬時段不下沙灘，安排午餐與咖啡休息，為下午浮潛保留體力。', image: img('okinawa cafe lunch'), map: map('Motobu Okinawa lunch cafe'), tips: ['午餐不要吃太撐，浮潛前留至少 1 小時緩衝。', '可在本部周邊找咖啡店。'] },
      { time: '14:30–16:00', title: '瀨底 / 本部周邊浮潛', tag: '浮潛', intro: '7/9 的主海上活動。瀨底與本部周邊海水清澈，適合當正式浮潛日，也順接晚餐。', image: img('Sesoko Beach snorkeling Okinawa'), map: map('瀬底ビーチ シュノーケリング'), tips: ['預約 90–120 分鐘方案最剛好。', '若海況不好，改沙灘散步或咖啡，不硬下水。'] },
      { time: '16:00–17:00', title: '沖洗、休息', tag: '整理', intro: '浮潛後一定要留完整整理時間，避免濕漉漉直接去燒肉。', image: img('beach shower okinawa'), map: map('瀬底ビーチ シャワー'), tips: ['準備乾衣、毛巾、保濕、防曬補擦。', '若店家有淋浴設備，優先選有設備的方案。'] },
      { time: '17:30 / 18:00', title: '焼肉もとぶ牧場 本部店', tag: '晚餐', intro: '北部日最順的燒肉選擇，主打もとぶ牛，停車與動線都比那霸分店舒服。', image: img('japanese yakiniku wagyu'), map: map('焼肉もとぶ牧場 もとぶ店'), tips: ['建議訂 17:30 或 18:00。', '浮潛日不要訂太早，保留沖洗時間。'] },
      { time: '19:00–21:00', title: '回那霸', tag: '回程', intro: '吃完直接回飯店，不再排高強度活動，避免北部日過累。', image: img('okinawa highway night'), map: map('Motobu to Naha Okinawa'), tips: ['回程約 2 小時上下，視交通而定。', '隔天是輕鬆近郊日，可以晚點起。'] },
    ],
  },
  {
    date: '7/10',
    title: '港川＋PARCO＋輕量海上活動',
    subtitle: '把 7/10 維持成近郊輕鬆日：港川吃午餐、小店與瓷器 bonus，PARCO 久逛，傍晚補一段宜野灣海邊活動。',
    mood: '輕鬆近郊 / 冷氣逛街 / 補海感',
    color: 'teal',
    hero: img('okinawa ginowan tropical beach sunset'),
    stops: [
      { time: '10:30', title: 'Tokyu Stay 出發', tag: '慢起', intro: '前一天北部日會累，這天不用早起，保留精神給港川與 PARCO。', image: img('naha morning street'), map: map('Tokyu Stay Okinawa Naha'), tips: ['先確認行李與隔天還車流程。', '穿好走、可逛街也可海邊散步的鞋。'] },
      { time: '10:50–12:30', title: '港川外人住宅 午餐＋小店', tag: '午餐', intro: '浦添的改造住宅聚落，適合午餐、咖啡、小店與拍照；瓷器不是主目的，但可順看。', image: img('okinawa minatogawa street cafe'), map: map('港川外人住宅'), tips: ['午餐尖峰前到比較好。', '如果太熱，縮短戶外散步時間。'] },
      { time: '12:30–13:00', title: 'PORTRIVER MARKET 瓷器 bonus', tag: '瓷器', intro: '可順看やちむん、琉球玻璃與選物；不是必買，但符合你想找沖繩瓷器的方向。', image: img('okinawa pottery yachimun'), map: map('PORTRIVER MARKET Okinawa'), tips: ['看到喜歡再買，不要為瓷器拖太久。', '易碎品記得請店家包好。'] },
      { time: '13:10–15:30', title: 'PARCO CITY 午餐 / 逛街', tag: '逛街', intro: '下午冷氣主場，適合久逛、甜點、伴手禮與補買；從港川過去很順。', image: img('shopping mall okinawa sea view'), map: map('San-A Urasoe West Coast PARCO CITY'), tips: ['這段可以彈性拉長，但 15:30 左右要準備去海邊。', '也可把正餐移到 PARCO。'] },
      { time: '15:45–17:15', title: '宜野灣 Tropical Beach / 輕量浮潛或海上活動', tag: '輕量海', intro: '7/10 不做重度浮潛，改安排近郊 2 小時內的輕量海上活動或沙灘散步，順路又不累。', image: img('Ginowan Tropical Beach Okinawa'), map: map('宜野湾トロピカルビーチ'), tips: ['如果要真正看魚，優先 7/9；7/10 定位是補海感。', '若海況或時間不佳，改成散步＋夕陽即可。'] },
      { time: '17:15–18:00', title: '沖洗、夕陽、回那霸', tag: '收尾', intro: '傍晚完成海邊收尾，回那霸整理與晚餐，隔天還車前不要太晚。', image: img('okinawa sunset sea'), map: map('Ginowan Tropical Beach to Naha'), tips: ['不要拖到天黑才回程。', '整理濕物與行李，隔天機場會更順。'] },
      { time: '19:00+', title: '那霸晚餐 / 國際通補買', tag: '自由', intro: '最後一晚保留彈性，吃簡單一點、補伴手禮或早點回飯店整理。', image: img('kokusai dori naha night'), map: map('国際通り 那覇'), tips: ['不建議排太正式長餐，隔天要還車去機場。', '可把未買完的伴手禮一次補齊。'] },
    ],
  },
]

const checklist = ['乾淨上衣 / 洋裝或襯衫', '毛巾與防水袋', '濕紙巾 / 除汗濕巾', '防曬與曬後保濕', '暈船藥（若浮潛搭船）', '手機防水袋', '好走防滑鞋', '預約確認截圖']

function App() {
  const [active, setActive] = React.useState(0)
  const day = days[active]

  return (
    <main>
      <section className="hero" style={{ backgroundImage: `linear-gradient(110deg, rgba(5,22,34,.96), rgba(8,88,107,.82)), url(${day.hero})` }}>
        <nav className="topbar">
          <div className="brand"><Waves size={22}/> Okinawa Trip</div>
          <a href="#maplinks" className="mini-link">地圖總覽</a>
        </nav>
        <div className="hero-content">
          <p className="eyebrow"><CalendarDays size={18}/> 2026 / 7 / 8 – 7 / 10</p>
          <h1>沖繩三日行程 Web App</h1>
          <p className="lead">已整合每日時間表、介紹、圖片、Google Maps、浮潛安排、雨天與高溫備案。</p>
          <div className="hero-actions">
            <a className="primary" href={`#day-${day.date.replace('/', '')}`}>看目前日期</a>
            <a className="secondary" href="#snorkel">浮潛重點</a>
          </div>
        </div>
      </section>

      <section className="tabs" aria-label="選擇日期">
        {days.map((d, i) => <button key={d.date} onClick={() => setActive(i)} className={i === active ? 'active' : ''}><strong>{d.date}</strong><span>{d.mood}</span></button>)}
      </section>

      <section id={`day-${day.date.replace('/', '')}`} className="day-header">
        <span className={`pill ${day.color}`}>{day.date}</span>
        <h2>{day.title}</h2>
        <p>{day.subtitle}</p>
      </section>

      <section className="timeline">
        {day.stops.map((stop, idx) => <article className="stop" key={stop.title}>
          <div className="time"><span>{stop.time}</span></div>
          <div className="card">
            <img src={stop.image} alt={stop.title} loading="lazy" />
            <div className="card-body">
              <div className="tagline"><span>{stop.tag}</span><small>Stop {idx + 1}</small></div>
              <h3>{stop.title}</h3>
              <p>{stop.intro}</p>
              <ul>{stop.tips.map(t => <li key={t}>{t}</li>)}</ul>
              <a className="map" href={stop.map} target="_blank" rel="noreferrer"><MapPin size={16}/> Google Map <ExternalLink size={14}/></a>
            </div>
          </div>
        </article>)}
      </section>

      <section className="insights" id="snorkel">
        <div className="insight-card featured"><ShipWheel/><h2>浮潛安排結論</h2><p><strong>7/9 排正式浮潛</strong>，放在瀨底 / 本部周邊；<strong>7/10 只排輕量海上活動</strong>，維持港川＋PARCO 的輕鬆節奏。</p></div>
        <div className="insight-card"><CloudSun/><h3>高溫 / 雨天備案</h3><p>7/8 午後用玉泉洞與 Outlet 避熱；7/9 中午用午餐咖啡避開沙灘；7/10 若下雨，拉長 PARCO，Tropical Beach 改成海景散步。</p></div>
        <div className="insight-card"><Utensils/><h3>餐廳節奏</h3><p>7/8 精緻壽司、7/9 本部燒肉，避免連續兩晚都是同風格肉餐；7/10 晚餐保留彈性。</p></div>
        <div className="insight-card"><ShoppingBag/><h3>購物與瓷器</h3><p>やちむん瓷器放在 7/10 港川作為 bonus；若沒有看到喜歡，不特地繞壺屋，避免犧牲海灘時間。</p></div>
      </section>

      <section className="summary">
        <div>
          <h2>行程決策摘要</h2>
          <p>這份安排把三天分成三種海：7/8 約會海邊與夕陽、7/9 北部正式浮潛、7/10 近郊輕量補海感。動線避免跳島，也避免每天都變成高強度玩水。</p>
        </div>
        <div className="checklist">
          <h3><Sparkles size={18}/> 打包清單</h3>
          <div>{checklist.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section id="maplinks" className="maplinks">
        <h2><Navigation size={22}/> Google Maps 快速連結</h2>
        <div className="map-grid">{days.flatMap(d => d.stops).map(s => <a key={`${s.time}-${s.title}`} href={s.map} target="_blank" rel="noreferrer">{s.title}</a>)}</div>
      </section>

      <footer>Built for Mm Lin · Okinawa 2026 · Images are externally hosted placeholders/search images.</footer>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
