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

// external link arrow icon
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

// x/twitter icon
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
      {/* header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#2f3336]">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            100x<span className="text-[#1d9bf0]">Mobile</span>
          </h1>
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="https://ishanlakhwani.notion.site/100xMobile-Bootcamp-30178c0ed26f807fb884eab53cbd8e5c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d9bf0] text-sm hover:underline flex items-center"
            >
              Bootcamp Notes
              <ExternalIcon />
            </a>
            <a
              href="https://bluntbrain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71767b] text-sm hover:text-white transition-colors hidden sm:flex items-center"
            >
              bluntbrain.com
              <ExternalIcon />
            </a>
          </div>
        </div>
      </header>

      {/* compact hero */}
      <section className="max-w-[1800px] mx-auto px-4 sm:px-6 pt-8 pb-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          What People Are <span className="text-[#1d9bf0]">Saying</span>
        </h2>
        <p className="text-[#71767b] text-sm sm:text-base max-w-xl mx-auto">
          A one-month mobile dev bootcamp by{" "}
          <a
            href="https://bluntbrain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e7e9ea] hover:text-[#1d9bf0] transition-colors"
          >
            Ishan Lakhwani
          </a>
          . 6+ years in mobile, 3+ in crypto/web3.
        </p>
      </section>

      {/* tweet wall - full width */}
      <section>
        <TweetWall tweets={tweets} />
      </section>

      {/* footer */}
      <footer className="border-t border-[#2f3336] mt-8">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#71767b] text-sm text-center sm:text-left">
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
            {" "}&middot; Taught by{" "}
            <a
              href="https://bluntbrain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e7e9ea] font-medium hover:text-[#1d9bf0] transition-colors"
            >
              Ishan Lakhwani
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/kirat_tw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#71767b] hover:text-[#e7e9ea] transition-colors text-sm"
            >
              <XIcon className="w-4 h-4" />
              @kirat_tw
            </a>
            <a
              href="https://x.com/bluntbrain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#71767b] hover:text-[#e7e9ea] transition-colors text-sm"
            >
              <XIcon className="w-4 h-4" />
              @bluntbrain
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
