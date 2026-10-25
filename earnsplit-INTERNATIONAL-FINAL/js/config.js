const CONFIG = {
  APP_NAME: "EarnSplit",
  COMPANY: "VortexForge Studios",
  SUPPORT_EMAIL: "vortexforgestudiosllc@gmail.com",
  WHATSAPP: "+2347057796517",
  WHATSAPP_LINK: "https://wa.me/2347057796517",
  SPLIT: { USER: 0.70, PLATFORM: 0.30, REF_BONUS_FROM_PLATFORM: 0.10 },
  PENDING_DAYS: 7,
  ONESIGNAL_APP_ID: "PASTE_YOUR_ONESIGNAL_APP_ID_HERE",
  NETWORKS: {
    BITLABS: { id:"bitlabs", name:"BitLabs", type:"surveys", countries:"Global 100+ NG US UK DE IN BR PH", payout:"$0.20-$5", signup:"https://bitlabs.ai/publishers" },
    TIMEWALL: { id:"timewall", name:"Timewall", type:"surveys+offers", countries:"Global Best NG IN BR ID", payout:"$0.10-$3", signup:"https://timewall.io" },
    PRIME: { id:"prime", name:"Prime", type:"surveys", countries:"Global 80+", payout:"$0.2-$4", signup:"https://prime-apps.com" },
    INBRAIN: { id:"inbrain", name:"Inbrain", type:"premium", countries:"US UK DE CA AU $2-$5 each", payout:"$1-$5", signup:"https://inbrain.ai" },
    CPX: { id:"cpx", name:"CPX Research", type:"surveys", countries:"Global 120+", payout:"$0.2-$3", signup:"https://cpx-research.com" },
    THEOREM: { id:"theorem", name:"TheoremReach", type:"surveys", countries:"US UK DE CA", payout:"$0.5-$4.5", signup:"https://theoremreach.com" },
    ADSCEND: { id:"adscend", name:"Adscend Media", type:"offerwall", countries:"US UK CA AU $65 Hostinger", payout:"$0.5-$65", signup:"https://adscendmedia.com" },
    ADGATE: { id:"adgate", name:"AdGate Media", type:"offerwall", countries:"US UK CA DE", payout:"$0.5-$50", signup:"https://adgatemedia.com" },
    LOOTABLY: { id:"lootably", name:"Lootably", type:"games+apps", countries:"Global", payout:"$0.3-$20", signup:"https://lootably.com" },
    AYET: { id:"ayet", name:"Ayet Studios", type:"apps+games", countries:"Global", payout:"$0.2-$5", signup:"https://ayetstudios.com" },
    MONETAG: { id:"monetag", name:"Monetag", type:"push+display", countries:"ALL $1-$8 CPM", signup:"https://monetag.com" },
    IMPACT: { id:"impact", name:"Impact.com Hostinger", type:"affiliate", countries:"Global $65", payout:"$10-$65" }
  },
  COUNTRIES: [
    {code:"ALL", flag:"🌍", label:"All Countries"},
    {code:"NG", flag:"🇳🇬", label:"Nigeria"},
    {code:"US", flag:"🇺🇸", label:"USA $2-$65"},
    {code:"UK", flag:"🇬🇧", label:"UK"},
    {code:"DE", flag:"🇩🇪", label:"Germany"},
    {code:"IN", flag:"🇮🇳", label:"India"},
    {code:"BR", flag:"🇧🇷", label:"Brazil"},
    {code:"PH", flag:"🇵🇭", label:"Philippines"},
    {code:"SURVEY", flag:"📝", label:"Surveys Only"},
    {code:"APP", flag:"📱", label:"Apps"}
  ]
};
function calcSplit(total){ const user=+(total*CONFIG.SPLIT.USER).toFixed(2); const platform=+(total*CONFIG.SPLIT.PLATFORM).toFixed(2); const refBonus=+(platform*CONFIG.SPLIT.REF_BONUS_FROM_PLATFORM).toFixed(2); return {total,user,platform,refBonus,pendingDays:CONFIG.PENDING_DAYS}; }
