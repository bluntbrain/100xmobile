"use client";

import { useEffect, useState, useCallback } from "react";

interface TweetData {
  id: string;
  url: string;
}

interface TweetWallProps {
  tweets: TweetData[];
}

interface TweetUser {
  name: string;
  screen_name: string;
  profile_image_url_https: string;
  is_blue_verified: boolean;
}

interface TweetMedia {
  media_url_https: string;
  type: string;
}

interface TweetVideo {
  poster: string;
}

interface FetchedTweet {
  text: string;
  user: TweetUser;
  favorite_count: number;
  conversation_count: number;
  retweet_count?: number;
  views?: { count: string };
  mediaDetails?: TweetMedia[];
  video?: TweetVideo;
  photos?: { url: string }[];
}

function cleanText(text: string): string {
  return text.replace(/\s*https:\/\/t\.co\/\w+$/g, "").trim();
}

function formatNumber(num: number | undefined): string {
  if (!num && num !== 0) return "0";
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

function TweetCard({ tweet, url }: { tweet: FetchedTweet; url: string }) {
  const user = tweet.user;
  const mediaUrl =
    tweet.photos?.[0]?.url ??
    tweet.video?.poster ??
    tweet.mediaDetails?.[0]?.media_url_https ??
    null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="tweet-card block mb-3"
    >
      <div className="flex items-center gap-2 mb-2">
        <img
          src={tweet.user.profile_image_url_https}
          alt={user.name}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-bold text-[#e7e9ea] text-xs truncate">
              {user.name}
            </span>
            {user.is_blue_verified && (
              <svg viewBox="0 0 22 22" className="w-3.5 h-3.5 fill-[#1d9bf0] shrink-0">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.143.271.586.702 1.084 1.24 1.438s1.167.551 1.813.568c.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.225 1.261.276 1.893.148.634-.129 1.218-.432 1.69-.878.445-.47.749-1.055.878-1.69.131-.633.079-1.291-.144-1.898.587-.273 1.084-.704 1.438-1.244.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
            )}
          </div>
          <span className="text-[#71767b] text-xs">@{user.screen_name}</span>
        </div>
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#71767b] shrink-0">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      <p className="text-[#e7e9ea] text-[13px] leading-snug mb-2 whitespace-pre-wrap wrap-break-word">
        {cleanText(tweet.text)}
      </p>

      {mediaUrl && (
        <div className="rounded-lg overflow-hidden mb-2 border border-[#2f3336] relative">
          <img
            src={mediaUrl}
            alt="Tweet media"
            width={1200}
            height={600}
            className="w-full h-auto object-cover max-h-[200px]"
            loading="lazy"
          />
          {tweet.video && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 bg-[#1d9bf0] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-4 text-[#71767b] text-[11px] pt-1.5 border-t border-[#2f3336]">
        <div className="flex items-center gap-1 hover:text-[#1d9bf0] transition-colors">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
          </svg>
          <span>{formatNumber(tweet.conversation_count)}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-[#00ba7c] transition-colors">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
          </svg>
          <span>{formatNumber(tweet.retweet_count)}</span>
        </div>
        <div className="flex items-center gap-1 hover:text-[#f91880] transition-colors">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
            <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
          </svg>
          <span>{formatNumber(tweet.favorite_count)}</span>
        </div>
        {tweet.views?.count && (
          <div className="flex items-center gap-1 ml-auto">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M8.75 21V3h2v18h-2zM18.75 21V8.5h2V21h-2zM13.75 21v-9h2v9h-2zM3.75 21v-4h2v4h-2z" />
            </svg>
            <span>{formatNumber(parseInt(tweet.views.count))}</span>
          </div>
        )}
      </div>
    </a>
  );
}

function TweetSkeleton() {
  return (
    <div className="tweet-card mb-3 animate-pulse">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-[#2f3336]" />
        <div className="flex-1">
          <div className="h-3 w-20 bg-[#2f3336] rounded mb-1" />
          <div className="h-2.5 w-14 bg-[#2f3336] rounded" />
        </div>
      </div>
      <div className="space-y-1.5 mb-2">
        <div className="h-2.5 w-full bg-[#2f3336] rounded" />
        <div className="h-2.5 w-4/5 bg-[#2f3336] rounded" />
        <div className="h-2.5 w-3/5 bg-[#2f3336] rounded" />
      </div>
      <div className="flex gap-4 pt-1.5 border-t border-[#2f3336]">
        <div className="h-2.5 w-8 bg-[#2f3336] rounded" />
        <div className="h-2.5 w-8 bg-[#2f3336] rounded" />
        <div className="h-2.5 w-8 bg-[#2f3336] rounded" />
      </div>
    </div>
  );
}

export function TweetWall({ tweets }: TweetWallProps) {
  const [tweetData, setTweetData] = useState<Map<string, FetchedTweet>>(new Map());
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAllTweets = useCallback(async () => {
    const newMap = new Map<string, FetchedTweet>();
    const BATCH_SIZE = 15;
    
    for (let i = 0; i < tweets.length; i += BATCH_SIZE) {
      const batch = tweets.slice(i, i + BATCH_SIZE);
      const results = await Promise.allSettled(
        batch.map(async (t) => {
          const res = await fetch(`/api/tweet/${t.id}`);
          if (!res.ok) return null;
          const data = await res.json();
          return { id: t.id, tweet: data as FetchedTweet };
        })
      );

      let hasUpdates = false;
      for (const result of results) {
        if (result.status === "fulfilled" && result.value?.tweet) {
          newMap.set(result.value.id, result.value.tweet);
          hasUpdates = true;
        }
      }
      
      if (hasUpdates) {
        setTweetData(new Map(newMap));
        setLoading(false);
      }
      
      if (i + BATCH_SIZE < tweets.length) {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    }
  }, [tweets]);

  useEffect(() => {
    fetchAllTweets();
  }, [fetchAllTweets]);

  const filteredTweets = tweets.filter((tweet) => {
    if (!searchTerm.trim()) return true;
    const data = tweetData.get(tweet.id);
    if (!data) return false;
    const searchLower = searchTerm.trim().toLowerCase();
    return (
      data.user.screen_name.toLowerCase().includes(searchLower) ||
      data.user.name.toLowerCase().includes(searchLower)
    );
  });

  const maxCols = 5;
  const columns: TweetData[][] = Array.from({ length: maxCols }, () => []);
  filteredTweets.forEach((tweet, i) => {
    columns[i % maxCols].push(tweet);
  });

  if (loading) {
    return (
      <section className="mx-auto px-2 sm:px-4 pb-8">
        <div className="tweet-grid">
          {Array.from({ length: 10 }).map((_, i) => (
            <TweetSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto px-2 sm:px-4 pb-8 w-full -mt-4 sm:-mt-8">
      <div className="mb-10 flex flex-col items-center w-full px-4">
        <div className="flex items-center gap-3 sm:gap-4 text-[#888] text-[13px] sm:text-sm font-medium mb-6 bg-[#0a0a0a] border border-[#222] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg">
          <div className="flex items-center gap-1.5"><span className="text-white font-bold flex items-center gap-1"><svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>{tweetData.size}</span> Tweets</div>
          <div className="w-1 h-1 rounded-full bg-[#333]"></div>
          <div className="flex items-center gap-1.5"><span className="text-white font-bold flex items-center gap-1"><svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#f91880]"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91z" /></svg>{formatNumber(Array.from(tweetData.values()).reduce((acc, t) => acc + (t.favorite_count || 0), 0))}</span> Likes</div>
        </div>

        <div className="relative w-full max-w-lg group">
          <svg viewBox="0 0 24 24" className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666] group-focus-within:text-white transition-colors fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search tweets by @username…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            aria-label="Search tweets by username"
            className="w-full bg-[#0a0a0a] border border-[#222] hover:border-[#333] rounded-full py-4 pl-14 pr-6 text-[15px] font-medium text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-[border-color,box-shadow,color] shadow-xl placeholder:text-[#555]"
          />
        </div>
      </div>
      
      <div className="grid tweet-grid">
        {filteredTweets.length === 0 && (
          <div className="col-span-full text-center text-[#888] font-medium py-12 text-lg">
            No tweets found matching "{searchTerm}"
          </div>
        )}
        {columns.map((column, colIdx) => {
          const visibility =
            colIdx === 0
              ? ""
              : colIdx === 1
              ? ""
              : colIdx === 2
              ? "hidden md:block"
              : colIdx === 3
              ? "hidden xl:block"
              : "hidden 2xl:block";

          return (
          <div
            key={colIdx}
            className={`marquee-container relative overflow-hidden ${visibility}`}
            style={{ height: "80vh" }}
          >
            <div
              className={colIdx % 2 === 0 ? "marquee-up" : "marquee-down"}
              style={{
                "--duration": `${(35 + colIdx * 8) * Math.max(1, column.length / 2)}s`,
              } as React.CSSProperties}
            >
              {[...column, ...column].map((tweet, idx) => {
                const data = tweetData.get(tweet.id);
                if (!data) return null;
                return (
                  <TweetCard
                    key={`${tweet.id}-${idx}`}
                    tweet={data}
                    url={tweet.url}
                  />
                );
              })}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
