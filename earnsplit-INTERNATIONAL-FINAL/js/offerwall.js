const MOCK_OFFERS = [
  { id:1, network:'BitLabs', country:'NG', flag:'🇳🇬', type:'survey', title:'Survey - Shopping Habits NG', payout:1.20, time:'5 min', users:342 },
  { id:2, network:'Timewall', country:'NG', flag:'🇳🇬', type:'survey', title:'Quick Survey - Mobile Usage', payout:0.45, time:'3 min', users:521 },
  { id:3, network:'Adscend', country:'US', flag:'🇺🇸', type:'offer', title:'Hostinger Hosting - $65 Payout (High Ticket)', payout:65.00, time:'$65', users:89, hot:true },
  { id:4, network:'Inbrain', country:'US', flag:'🇺🇸', type:'survey', title:'Premium Survey - Finance US ($4.50)', payout:4.50, time:'12 min', users:120, hot:true },
  { id:5, network:'AdGate', country:'UK', flag:'🇬🇧', type:'offer', title:'NordVPN Trial - $45', payout:45.00, time:'$45', users:67, hot:true },
  { id:6, network:'BitLabs', country:'IN', flag:'🇮🇳', type:'survey', title:'Survey India - Food Delivery', payout:0.80, time:'6 min', users:430 },
  { id:7, network:'CPX', country:'DE', flag:'🇩🇪', type:'survey', title:'CPX Survey DE - Tech Products', payout:1.10, time:'7 min', users:210 },
  { id:8, network:'Lootably', country:'BR', flag:'🇧🇷', type:'app', title:'Install Game - Coin Master BR', payout:2.50, time:'App', users:312 },
  { id:9, network:'Prime', country:'PH', flag:'🇵🇭', type:'survey', title:'Prime Survey PH', payout:0.60, time:'4 min', users:280 },
  { id:10, network:'Theorem', country:'UK', flag:'🇬🇧', type:'survey', title:'TheoremReach UK - Shopping £3', payout:3.20, time:'10 min', users:95 },
  { id:11, network:'Ayet', country:'ALL', flag:'🌍', type:'app', title:'Install App - TikTok Lite', payout:0.90, time:'App', users:890 },
];
let currentCountry='ALL';
function renderOffers(){
  const c=document.getElementById('offers-container'); if(!c) return;
  let f=MOCK_OFFERS;
  if(currentCountry!=='ALL'){
    if(currentCountry==='SURVEY') f=f.filter(o=>o.type==='survey');
    else if(currentCountry==='APP') f=f.filter(o=>o.type==='app');
    else f=f.filter(o=>o.country===currentCountry || o.country==='ALL');
  }
  c.innerHTML=f.map(o=>{
    const s=calcSplit(o.payout);
    return `<div class="card" style="${o.hot?'border-color:#22FF88':''}">
      <div class="card-top"><span>${o.flag} ${o.network} • ${o.country} • ${o.time} • ${o.users} users</span><span class="badge ${o.hot?'badge-green':''}">${o.hot?'🔥 HOT $'+o.payout:'$'+o.payout}</span></div>
      <h3>${o.title} ${o.hot?'🔥':''}</h3>
      <p>${o.type==='survey'?'Answer survey':'Complete offer'} - ${o.country}. 70/30 split.</p>
      <div class="split"><span>Total: $${o.payout.toFixed(2)}</span><span>You: <b>$${s.user} (70%)</b></span><span>VortexForge: $${s.platform}</span></div>
      <button class="btn btn-green" style="width:100%;margin-top:6px" onclick="startOffer(${o.id})">Start - Earn $${s.user}</button></div>`;
  }).join('');
}
function filterCountry(code){ currentCountry=code; document.querySelectorAll('.filter').forEach(f=>f.classList.remove('active')); const b=document.querySelector(`[data-country="${code}"]`); if(b) b.classList.add('active'); renderOffers(); }
function startOffer(id){
  const o=MOCK_OFFERS.find(x=>x.id===id); if(!o) return;
  const s=calcSplit(o.payout);
  const pending=parseFloat(localStorage.getItem('pending')||'8.20');
  localStorage.setItem('pending', (pending+s.user).toFixed(2));
  const el=document.getElementById('pending'); if(el) el.textContent=(pending+s.user).toFixed(2);
  alert(`✅ Started ${o.network}! Total $${o.payout} You get $${s.user} (70%) pending 7 days VortexForge $${s.platform} (30%)`);
  renderOffers();
}
document.addEventListener('DOMContentLoaded', renderOffers);
