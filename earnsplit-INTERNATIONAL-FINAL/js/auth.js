
// Simple Auth with localStorage (replace with Supabase Auth CDN in production)
function getUser() {
  return JSON.parse(localStorage.getItem('vortex_user') || 'null');
}
function requireAuth() {
  const user = getUser();
  if (!user && !location.pathname.includes('login.html') && !location.pathname.includes('signup.html') && location.pathname.endsWith('.html') && !location.pathname.endsWith('index.html')) {
    // Allow dashboard for demo, but show login prompt
    console.log('Demo mode - no auth required');
  }
  return user;
}
function signupUser(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  const user = { id: 'user_' + Date.now(), name, email, country, balance: 24.50, pending: 8.20, referralCode: 'VORTEX' + Math.random().toString(36).substr(2,5).toUpperCase(), createdAt: new Date().toISOString() };
  localStorage.setItem('vortex_user', JSON.stringify(user));
  localStorage.setItem('user_id', user.id);
  alert('Welcome to VortexForge Studios! Account created.');
  location.href = 'dashboard.html';
}
function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  // Demo login
  let user = getUser();
  if (!user) {
    user = { id: 'user_' + Date.now(), name: email.split('@')[0], email, country: 'NG', balance: 24.50, pending: 8.20, referralCode: 'VORTEXDEMO' };
    localStorage.setItem('vortex_user', JSON.stringify(user));
  }
  localStorage.setItem('user_id', user.id);
  location.href = 'dashboard.html';
}
function logout() {
  localStorage.removeItem('vortex_user');
  location.href = 'index.html';
}
function updateProfileDisplay() {
  const user = getUser();
  if (user) {
    const els = document.querySelectorAll('[data-user-name]');
    els.forEach(el => el.textContent = user.name);
    const els2 = document.querySelectorAll('[data-user-email]');
    els2.forEach(el => el.textContent = user.email);
    const els3 = document.querySelectorAll('[data-referral-code]');
    els3.forEach(el => el.textContent = user.referralCode);
  }
}
document.addEventListener('DOMContentLoaded', updateProfileDisplay);
