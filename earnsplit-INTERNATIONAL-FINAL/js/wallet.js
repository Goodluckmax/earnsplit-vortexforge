
const USER_SHARE = 0.7; const ADMIN_SHARE = 0.3;
function getBalance(){ return parseFloat(localStorage.getItem('balance')||'24.50'); }
function getPending(){ return parseFloat(localStorage.getItem('pending')||'8.20'); }
function setBalance(v){ localStorage.setItem('balance', v.toFixed(2)); const el=document.getElementById('balance'); if(el) el.textContent='$'+v.toFixed(2); const el2=document.getElementById('balance2'); if(el2) el2.textContent='$'+v.toFixed(2); }
function setPending(v){ localStorage.setItem('pending', v.toFixed(2)); const el=document.getElementById('pending'); if(el) el.textContent=v.toFixed(2); }
function creditOffer(offer){
  const total=offer.payout; const userShare=+(total*USER_SHARE).toFixed(2); const adminShare=+(total*ADMIN_SHARE).toFixed(2);
  const txId=offer.network+'_'+offer.id+'_'+Date.now();
  if(localStorage.getItem('tx_'+txId)) return;
  localStorage.setItem('tx_'+txId, '1');
  setPending(getPending()+userShare);
  addActivity(offer.title, total, userShare, adminShare);
  setTimeout(()=>{ setPending(getPending()-userShare); setBalance(getBalance()+userShare); }, 3000);
  alert(`Success! You earned $${userShare} (70%) will be approved in 7 days (3 sec demo). VortexForge keeps $${adminShare} (30%) which goes to our Wise account via ${offer.network} dashboard payout.`);
}
function addActivity(title, total, user, admin){
  const list=document.getElementById('activity-list'); if(!list) return;
  const div=document.createElement('div'); div.className='act-item'; div.style.cssText='display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #222;font-size:13px;';
  div.innerHTML=`<span>${title}</span><span>Total $${total} = <b style="color:#00FF88">You $${user}</b> / Vortex $${admin}</span>`;
  list.prepend(div);
}
function watchAd(){ alert('Monetag Rewarded Ad Demo: Add Zone ID in js/config.js. CPM $15. Split 70/30.'); creditOffer({id:'ad_'+Date.now(), title:'Rewarded Ad Watched', payout:0.10, network:'monetag'}); }
function openWithdraw(){ alert('Withdraw:\nMin $10 via PayPal/Wise/USDT (Intl)\nMin ₦5000 via Paystack (NG)\n\nYour 30% as company is NOT withdrawn here. Your 30% is paid by BitLabs/Timewall/Monetag dashboards to your Wise/Geegpay USD account weekly. This withdraw is to pay USERS their 70%.'); }
