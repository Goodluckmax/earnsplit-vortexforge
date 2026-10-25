
const OFFERS = [
  { id:'bl-1', title:'Install Temu & Register - US/UK', payout:2.5, geo:['US','UK','NG'], cat:'App', network:'bitlabs' },
  { id:'bl-2', title:'Play Monopoly Go to Level 15', payout:4.2, geo:['US','CA'], cat:'Game', network:'bitlabs' },
  { id:'tw-1', title:'Survey: Shopping Habits 5 min', payout:1.1, geo:['ALL'], cat:'Survey', network:'timewall' },
  { id:'cpx-1', title:'Cpx Survey: Finance App', payout:2.0, geo:['US','NG'], cat:'Survey', network:'cpx' },
  { id:'imp-1', title:'Hostinger Hosting - $65 Payout', payout:65, geo:['US','NG'], cat:'Affiliate', network:'impact' },
  { id:'imp-2', title:'NordVPN 70% Off - $32', payout:32, geo:['ALL'], cat:'Affiliate', network:'impact' },
  { id:'ads-1', title:'Install CashApp & Add Card - $8', payout:8, geo:['US'], cat:'App', network:'adscend' },
  { id:'mon-1', title:'Watch Rewarded Ad (30s)', payout:0.10, geo:['ALL'], cat:'Ad', network:'monetag' },
];
function renderOffers(filter='ALL'){
  const grid=document.getElementById('offers-grid'); if(!grid) return;
  grid.innerHTML='';
  const filtered = filter==='ALL' ? OFFERS : OFFERS.filter(o=> o.geo.includes(filter) || o.cat===filter || o.network===filter.toLowerCase());
  filtered.forEach((o, idx)=>{
    if((idx+1)%4===0){
      const ad=document.createElement('div'); ad.className='card'; ad.style.borderStyle='dashed'; ad.innerHTML='<p>Sponsored • Adsterra Native - $3-5 CPM</p><div style="height:60px;background:#ffffff0d;border-radius:8px;display:flex;align-items:center;justify-content:center;margin-top:8px">Native Ad Slot</div>'; grid.appendChild(ad);
    }
    const div=document.createElement('div'); div.className='offer';
    div.innerHTML=`<div class="top"><span class="badge">${o.network.toUpperCase()} • ${o.geo.join(',')}</span><span class="badge">${o.cat}</span></div><h3 style="font-size:14px;margin:10px 0">${o.title}</h3><div class="split"><div><small>Total</small><br><b>$${o.payout}</b></div><div style="text-align:right"><small>You 70%</small><br><b>$${(o.payout*0.7).toFixed(2)}</b></div><div style="text-align:right"><small>Vortex 30%</small><br><b>$${(o.payout*0.3).toFixed(2)}</b></div></div><button class="btn" style="width:100%" onclick='handleOffer("${o.id}")'>Start Offer →</button>`;
    grid.appendChild(div);
  });
}
function handleOffer(id){ const o=OFFERS.find(x=>x.id===id); if(o) creditOffer(o); }
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderOffers(btn.dataset.filter);
    });
  });
  const balEl=document.getElementById('balance'); if(balEl) setBalance(getBalance());
  const pendEl=document.getElementById('pending'); if(pendEl) setPending(getPending());
  if(document.getElementById('offers-grid')) renderOffers('ALL');
});
