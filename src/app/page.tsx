import { TweetWall } from "@/components/tweet-wall";

const TWEET_LINKS = [
  "https://x.com/RahmatdeepSingh/status/2030348688498086348",
  "https://x.com/YASH2k2450/status/2030297145623101518",
  "https://x.com/RitikLakhwani/status/2030298824124858513",
  "https://x.com/olathepavilion/status/2029985097668051296",
  "https://x.com/RhnSh5465/status/2030007696376877439",
  "https://x.com/qzmalekuz/status/2030198669698552115",
  "https://x.com/YASH2k2450/status/2029807995308364076",
  "https://x.com/HarmisTervadiya/status/2029487980768088080",
  "https://x.com/YASH2k2450/status/2029313865331425700",
  "https://x.com/Akaza_Dou/status/2028466566749376622",
  "https://x.com/Unmesh100/status/2028450912541483402",
  "https://x.com/bluntbrain/status/2028223074689278313",
  "https://x.com/Easwar_H/status/2028224549180113144",
  "https://x.com/Unmesh100/status/2027818147575959910",
  "https://x.com/RhnSh5465/status/2027799558118642040",
  "https://x.com/Shouryajoshi9/status/2027337011926114482",
  "https://x.com/shashankpoola/status/2027135122320048319",
  "https://x.com/KitsuneKode/status/2026682458251694292",
  "https://x.com/gyouko03/status/2026646511153721667",
  "https://x.com/HarmisTervadiya/status/2026342053467271650",
  "https://x.com/NakulRana__/status/2026333264143933531",
  "https://x.com/Shouryajoshi9/status/2026298094670029242",
  "https://x.com/Unmesh100/status/2026269307794321884",
  "https://x.com/Unmesh100/status/2025298631340032242",
  "https://x.com/NakulRana__/status/2025090974293393864",
  "https://x.com/Ratnesh_kumar02/status/2024425449993228320",
  "https://x.com/gyouko03/status/2024466149925429734",
  "https://x.com/NakulRana__/status/2024209111681053162",
  "https://x.com/Dnyanesh05_/status/2024079946327703637",
  "https://x.com/Unmesh100/status/2024096623010447650",
  "https://x.com/yuvanvk/status/2024105373074907227",
  "https://x.com/HarmisTervadiya/status/2024117962354151442",
  "https://x.com/RhnSh5465/status/2023881929146434006",
  "https://x.com/NakulRana__/status/2023948081687847114",
  "https://x.com/HarmisTervadiya/status/2023784665237385329",
  "https://x.com/RyugaG16/status/2023638139374616777",
  "https://x.com/KarishmaBano8/status/2023444604952211887",
  "https://x.com/KarishmaBano8/status/2023446195897807172",
  "https://x.com/srivtx/status/2023513543275106308",
  "https://x.com/HarmisTervadiya/status/2023610508583334339",
  "https://x.com/gyouko03/status/2023441616716091725",
  "https://x.com/Unmesh100/status/2023370668755370367",
  "https://x.com/HarmisTervadiya/status/2023387766936224036",
  "https://x.com/Shouryajoshi9/status/2023388691939684636",
  "https://x.com/Ratnesh_kumar02/status/2023417084466856147",
  "https://x.com/Dnyanesh05_/status/2022659439824900235",
  "https://x.com/HarmisTervadiya/status/2022695324616438185",
  "https://x.com/gyouko03/status/2022540145153708278",
  "https://x.com/Prasanjit_ui/status/2022368434005430434",
  "https://x.com/Ratnesh_kumar02/status/2022369279782666614",
  "https://x.com/KarishmaBano8/status/2022381983368908990",
  "https://x.com/24_sansss/status/2022464183892341162",
  "https://x.com/Unmesh100/status/2022254165100232826",
  "https://x.com/Unmesh100/status/2021551977449341257",
  "https://x.com/Shouryajoshi9/status/2022265581307932890",
  "https://x.com/rishsiddh/status/2021880161814396948",
  "https://x.com/ShivamSinghMer/status/2021885732143739321",
  "https://x.com/gyouko03/status/2021920417209049538",
  "https://x.com/RhnSh5465/status/2022001196945527156",
  "https://x.com/NakulRana__/status/2022029709870350553",
  "https://x.com/Ratnesh_kumar02/status/2021667967134793940",
  "https://x.com/Manik_Khajuria_/status/2021758353589121219",
  "https://x.com/Shouryajoshi9/status/2021807186016636990",
  "https://x.com/NeelContractor1/status/2021847145754800643",
  "https://x.com/Arunbandari2004/status/2021624824074998082",
  "https://x.com/_abhii199/status/2021541380955525407",
  "https://x.com/eniyos/status/2021580544169890042",
  "https://x.com/GirdharGop/status/2021584004839813560",
  "https://x.com/harpalll_dev/status/2021595782873333901",
  "https://x.com/ManikantaA47657/status/2021601041683202140",
  "https://x.com/HarmisTervadiya/status/2021602478781776044",
  "https://x.com/gyouko03/status/2021612608957423785",
  "https://x.com/Shouryajoshi9/status/2021616601456673131",
  "https://x.com/Arunbandari2004/status/2021164090815611218",
  "https://x.com/abhayyy_0103/status/2021286162787336583",
  "https://x.com/NakulRana__/status/2021436019464364282",
  "https://x.com/DPC_1012/status/2021299691481354324",
  "https://x.com/gyouko03/status/2021102380172050919",
  "https://x.com/Unmesh100/status/2020828606101082306",
  "https://x.com/udayempire_/status/2020852562711216128",
  "https://x.com/GirdharGop/status/2020854361950232884",
  "https://x.com/satyawani_aman/status/2020856445256819064",
  "https://x.com/SSinha82139/status/2020856876448018747",
  "https://x.com/shan_dharan/status/2020857185467593161",
  "https://x.com/Ratnesh_kumar02/status/2020858697627394409",
  "https://x.com/HarmisTervadiya/status/2020885960482062836",
  "https://x.com/KarishmaBano8/status/2020905337549988249",
  "https://x.com/ankit_twt/status/2020942949081809236",
  "https://x.com/KarishmaBano8/status/2020906316559155378",
  "https://x.com/HarmisTervadiya/status/2020855545192706459",
  "https://x.com/Somya_Baran/status/2020922864460034114"
];

function extractTweetId(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

interface TweetData {
  id: string;
  url: string;
}

const tweets: TweetData[] = TWEET_LINKS.map((url) => ({
  id: extractTweetId(url),
  url,
}));

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-3 h-3 inline-block ml-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 1h10v10M15 1L1 15" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "w-4 h-4"} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-8 pointer-events-none">
        <header className="pointer-events-auto bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-16 w-full max-w-4xl shadow-2xl transition-[padding,background-color] duration-300">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              100x<span className="text-[#1d9bf0]">Mobile</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[14px] sm:text-[15px] font-medium text-[#888]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a
              href="https://bluntbrain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Author
            </a>
          </nav>

          <a
            href="https://ishanlakhwani.notion.site/100xMobile-Bootcamp-30178c0ed26f807fb884eab53cbd8e5c"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#222] hover:bg-[#333] text-white text-[14px] sm:text-[15px] font-medium px-5 py-2 rounded-full transition-colors active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white outline-none"
          >
            Bootcamp Notes
          </a>
        </header>
      </div>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-36 sm:pt-48 pb-8 sm:pb-12 text-center flex flex-col items-center">
        <h2 className="text-[48px] sm:text-6xl md:text-[80px] font-bold text-white mb-4 sm:mb-6 tracking-tighter leading-[1.1] sm:leading-none">
          100xMobile Bootcamp
        </h2>
        
        <div className="text-[#a1a1aa] text-[15px] sm:text-base md:text-[17px] max-w-4xl font-medium tracking-tight leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-10 px-2 sm:px-0">
          <div className="hidden sm:block">
            <p>
              A one-month intensive bootcamp on mobile app development, part of the 100xDevs initiative.
            </p>
            <p>
              Students learned React Native from scratch, built production apps, and shipped 
            </p>
            <p>
             submissions for the Solana Monolith Hackathon.
            </p>
          </div>
          
          <p className="sm:hidden">
            A one-month intensive bootcamp on mobile app development, part of the 100xDevs initiative. Students learned React Native from scratch, built production apps, and shipped submissions for the Solana Monolith Hackathon.
          </p>
        </div>
      </section>

      <section>
        <TweetWall tweets={tweets} />
      </section>

      <section id="about" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-32 scroll-mt-24">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            About 100xMobile
          </h2>
          <div className="text-[#a1a1aa] text-[16px] sm:text-lg font-medium max-w-2xl text-center leading-[1.6]">
            <p>Everything you need to know about the most intensive</p>
            <p>mobile dev program.</p>
          </div>
        </div>

        <div className="relative group max-w-3xl w-full mx-auto mb-16 mt-8">
          <div className="absolute inset-0 bg-[#222] rounded-[32px] translate-x-2 translate-y-2 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
          
          <div className="relative bg-[#0a0a0a] border border-[#333] rounded-[32px] p-6 sm:p-10 flex flex-col items-center justify-center text-center transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden z-10">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center w-full">
              <h3 className="text-white text-[15px] sm:text-[17px] font-medium flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <span>Taught by</span>
                <a href="https://x.com/bluntbrain" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d9bf0] transition-colors focus-visible:ring-2 focus-visible:ring-[#1d9bf0] rounded outline-none px-1">
                  Ishan Lakhwani
                </a>
                <a href="https://x.com/bluntbrain" target="_blank" rel="noopener noreferrer" className="text-[#1d9bf0] text-[13px] font-medium hover:text-white transition-colors bg-[#1d9bf0]/10 hover:bg-[#1d9bf0]/20 px-2 py-0.5 rounded-full focus-visible:ring-2 focus-visible:ring-[#1d9bf0] outline-none">
                  @bluntbrain
                </a>
              </h3>
              
              <p className="text-[#888] text-[14px] leading-relaxed max-w-2xl px-4">
                A mobile engineer with 6+ years of experience building apps scaling to 10M+ users, 3+ years in crypto/web3, and multiple ETHGlobal hackathon wins. Currently building at SendAI on Solana.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          <div className="relative group min-h-[440px]">
            <div className="absolute inset-0 bg-[#222] rounded-[32px] translate-x-2 translate-y-2 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
            
            <div className="relative bg-[#0a0a0a] border border-[#333] rounded-[32px] p-8 sm:p-10 flex flex-col items-center h-full transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden cursor-default z-10">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                <span className="text-[#888] text-[14px] font-medium mb-12 group-hover:text-[#aaa] transition-colors duration-300">Duration</span>
                
                <div className="flex items-center justify-center gap-2.5 mb-6">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out">
                    <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] text-[#10b981]" fill="currentColor"><path d="M10 2v8H2v4h8v8h4v-8h8v-4h-8V2h-4z"/></svg>
                  </div>
                  <h3 className="text-[22px] font-bold text-white tracking-tight">One Month</h3>
                </div>
                
                <p className="text-[#888] text-[15px] leading-relaxed text-center mb-12">
                  We started with fundamentals and went all the way down the stack mastering React Native, bridging with native modules, and shipping production-ready mobile apps from scratch.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group min-h-[440px]">
            <div className="absolute inset-0 bg-[#222] rounded-[32px] translate-x-2 translate-y-2 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
            
            <div className="relative bg-[#0a0a0a] border border-[#333] rounded-[32px] p-8 sm:p-10 flex flex-col items-center h-full transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden cursor-default z-10">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                <span className="text-[#888] text-[14px] font-medium mb-12 group-hover:text-[#aaa] transition-colors duration-300">Flagship Event</span>
                
                <div className="flex items-center justify-center gap-2.5 mb-6">
                  <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
                    <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none"><path d="M3 4l6 16h5L8 4H3z" fill="#3b82f6"/><path d="M11 4l6 16h5l-6-16h-5z" fill="#60a5fa"/></svg>
                  </div>
                  <h3 className="text-[22px] font-bold text-white tracking-tight">Monolith</h3>
                </div>
                
                <p className="text-[#888] text-[15px] leading-relaxed text-center mb-12">
                  A grueling weekend of building real-world projects. Teams raced against the clock to architect their backends, tie them to their mobile frontends, and ship under pressure.
                </p>

                <a href="https://solanamobile.radiant.nexus/" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-1.5 text-[14px] font-medium text-white hover:text-[#3b82f6] group-hover:scale-105 transition-transform duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#3b82f6] rounded outline-none p-1 -m-1">
                  Learn more
                  <svg viewBox="0 0 16 16" width="14" height="14" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2h9v9M14 2L2 14"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative group min-h-[440px]">
            <div className="absolute inset-0 bg-[#222] rounded-[32px] translate-x-2 translate-y-2 transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3"></div>
            
            <div className="relative bg-[#0a0a0a] border border-[#333] rounded-[32px] p-8 sm:p-10 flex flex-col items-center h-full transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-translate-x-1 overflow-hidden cursor-default z-10">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              
              <div className="relative z-10 flex flex-col items-center h-full w-full">
                <span className="text-[#888] text-[14px] font-medium mb-12 group-hover:text-[#aaa] transition-colors duration-300">Curriculum</span>
                
                <div className="flex items-center justify-center gap-2.5 mb-6">
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out">
                    <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none"><path d="M4 14V4h6v10H4z" fill="#fbbf24"/><path d="M10 14h10v6H10v-6z" fill="#fbbf24"/><path d="M4 20v-6h6v6H4z" fill="#f59e0b"/></svg>
                  </div>
                  <h3 className="text-[22px] font-bold text-white tracking-tight">Web3 Native</h3>
                </div>
                
                <p className="text-[#888] text-[15px] leading-relaxed text-center mb-12">
                  Bringing 3+ years of rich Web3 experience straight into mobile dev. Learning to sign transactions, manage wallets, and interact with smart contracts natively on phones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#050505] mt-8 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center">
          <div className="mb-6">
            <span className="text-white text-[15px] font-bold tracking-tight">100xMobile</span>
          </div>
          
          <p className="text-[#888] text-[14px] text-center mb-8 max-w-lg leading-relaxed">
            A{" "}
            <a
              href="https://100xdevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1d9bf0] transition-colors"
            >
              100xDevs
            </a>
            {" "}initiative by{" "}
            <a
              href="https://x.com/kirat_tw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1d9bf0] transition-colors focus-visible:ring-2 focus-visible:ring-[#1d9bf0] rounded outline-none p-0.5 -m-0.5"
            >
              Harkirat Singh
            </a>
            {" "}— Taught by{" "}
            <a
              href="https://x.com/bluntbrain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1d9bf0] transition-colors focus-visible:ring-2 focus-visible:ring-[#1d9bf0] rounded outline-none p-0.5 -m-0.5"
            >
              Ishan Lakhwani
            </a>
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/kirat_tw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-[13px] font-medium"
            >
              <XIcon className="w-3.5 h-3.5" />
              @kirat_tw
            </a>
            <a
              href="https://x.com/bluntbrain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#666] hover:text-white transition-colors text-[13px] font-medium"
            >
              <XIcon className="w-3.5 h-3.5" />
              @bluntbrain
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
