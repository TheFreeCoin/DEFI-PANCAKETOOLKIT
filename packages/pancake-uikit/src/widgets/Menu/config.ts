import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.pancakeswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Docs",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Global",
        href: "https://t.me/FREEcoinGlobal",
      },
      {
        label: "Asia",
        href: "https://t.me/FREEcoinAsia",
      },
      {
        label: "France",
        href: "https://t.me/freecoinsfrancophone",
      },
      {
        label: "Korea",
        href: "https://t.me/freecoin_korea",
      },
      {
        label: "Australia",
        href: "https://t.me/joinchat/FZuQ50_zQBI2EwKDyCLAmA",
      },
      {
        label: "Brazil",
        href: "https://t.me/FREEcoinBrazil",
      },
      {
        label: "China",
        href: "https://t.me/joinchat/FZuQ51Nwz52e5_eumlbbZg",
      },
      {
        label: "Germany",
        href: "https://t.me/FREEcoinDeutschland",
      },
      {
        label: "India",
        href: "https://t.me/joinchat/FZuQ51lR4lTgCr2nQZL_Sg",
      },
      {
        label: "Nigeria",
        href: "https://t.me/FREEcoin_Nigeria",
      },
      {
        label: "Russia",
        href: "https://t.me/FREEcoinRUSSIA",
      },      
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/THE_FREE_COIN",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
