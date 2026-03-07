// main page - twitter wall of love for 100x mobile bootcamp
import { TweetWall } from "@/components/tweet-wall";

const TWEET_LINKS = [
  "https://x.com/YASH2k2450/status/2029807995308364076",
  "https://x.com/HarmisTervadiya/status/2029487980768088080",
  "https://x.com/YASH2k2450/status/2029313865331425700",
  "https://x.com/Akaza_Dou/status/2028466566749376622",
  "https://x.com/Unmesh100/status/2028450912541483402",
  "https://x.com/bluntbrain/status/2028223074689278313",
  "https://x.com/Unmesh100/status/2027818147575959910",
  "https://x.com/RhnSh5465/status/2027799558118642040",
  "https://x.com/Shouryajoshi9/status/2027337011926114482",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#2f3336]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white">
              100x<span className="text-[#1d9bf0]">Mobile</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://ishanlakhwani.notion.site/100xMobile-Bootcamp-30178c0ed26f807fb884eab53cbd8e5c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d9bf0] text-sm hover:underline"
            >
              Bootcamp Notes
            </a>
            <a
              href="https://bluntbrain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71767b] text-sm hover:text-white transition-colors"
            >
              bluntbrain.com
            </a>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="max-w-3xl mx-auto px-4 pt-16 pb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          100x<span className="text-[#1d9bf0]">Mobile</span> Bootcamp
        </h2>
        <p className="text-[#e7e9ea] text-lg leading-relaxed mb-4">
          A one-month intensive bootcamp on mobile app development led by{" "}
          <a
            href="https://bluntbrain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1d9bf0] hover:underline font-medium"
          >
            Ishan Lakhwani
          </a>
          {" "} — a mobile engineer with 6+ years of experience building apps and
          3+ years deep in crypto/web3. His expertise spans React Native,
          native iOS/Android, Solana Mobile, and building production-grade
          decentralized applications.
        </p>
        <p className="text-[#71767b] text-base">
          Here is what the community had to say about the experience.
        </p>
      </section>

      {/* divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-[#2f3336]" />
      </div>

      {/* tweet wall */}
      <section className="pt-8">
        <TweetWall tweets={tweets} />
      </section>

      {/* footer */}
      <footer className="border-t border-[#2f3336] mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-2 text-center">
          <p className="text-[#71767b] text-sm">
            A{" "}
            <a
              href="https://100xdevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e7e9ea] font-medium hover:text-[#1d9bf0] transition-colors"
            >
              100xDevs
            </a>
            {" "}initiative by{" "}
            <span className="text-[#e7e9ea] font-medium">Harkirat Singh</span>
            {" "} / Taught by{" "}
            <a
              href="https://bluntbrain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e7e9ea] font-medium hover:text-[#1d9bf0] transition-colors"
            >
              Ishan Lakhwani
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
