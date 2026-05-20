// =============================================
//   SleepWell – Premium Bedding E-Commerce
//   app.js
// =============================================

// =============================================
//   PRODUCT DATA
// =============================================
const products = [
  {
    id: 1,
    name: "Serenity Mattress",
    desc: "Orthopedic memory foam, medium-firm support",
    price: 120000,
    badge: "Bestseller",
    svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="45" width="100" height="50" rx="6" fill="#E8E2D9"/>
      <rect x="10" y="40" width="100" height="12" rx="4" fill="#B5A99A"/>
      <rect x="16" y="52" width="88" height="4" rx="2" fill="#FAF8F5" opacity="0.5"/>
      <rect x="16" y="60" width="88" height="4" rx="2" fill="#FAF8F5" opacity="0.4"/>
      <rect x="16" y="68" width="88" height="4" rx="2" fill="#FAF8F5" opacity="0.3"/>
      <rect x="18" y="90" width="8" height="14" rx="2" fill="#B5A99A"/>
      <rect x="94" y="90" width="8" height="14" rx="2" fill="#B5A99A"/>
    </svg>`
  },
  {
    id: 2,
    name: "Cloud Pillow",
    desc: "Hypoallergenic microfibre, adjustable loft",
    price: 15000,
    badge: "New",
    svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="38" width="90" height="44" rx="16" fill="#FAF8F5" stroke="#B5A99A" stroke-width="2"/>
      <path d="M30 55 Q60 48 90 55" stroke="#B5A99A" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M25 65 Q60 72 95 65" stroke="#B5A99A" stroke-width="1.5" fill="none" opacity="0.4"/>
    </svg>`
  },
  {
    id: 3,
    name: "Warmth Duvet",
    desc: "All-season microfibre, machine washable",
    price: 45000,
    badge: null,
    svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="30" width="100" height="60" rx="8" fill="#E8E2D9"/>
      <rect x="10" y="30" width="100" height="8" rx="4" fill="#B5A99A"/>
      <line x1="10" y1="55" x2="110" y2="55" stroke="#B5A99A" stroke-width="1" opacity="0.4"/>
      <line x1="10" y1="70" x2="110" y2="70" stroke="#B5A99A" stroke-width="1" opacity="0.4"/>
      <line x1="35" y1="38" x2="35" y2="90" stroke="#B5A99A" stroke-width="1" opacity="0.3"/>
      <line x1="60" y1="38" x2="60" y2="90" stroke="#B5A99A" stroke-width="1" opacity="0.3"/>
      <line x1="85" y1="38" x2="85" y2="90" stroke="#B5A99A" stroke-width="1" opacity="0.3"/>
    </svg>`
  },
  {
    id: 4,
    name: "Royale Bedspread",
    desc: "Woven cotton blend, elegant patterned finish",
    price: 32000,
    badge: "Popular",
    svg: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="25" width="100" height="70" rx="4" fill="#FAF8F5" stroke="#B5A99A" stroke-width="1.5"/>
      <rect x="10" y="25" width="100" height="12" rx="4" fill="#E8E2D9"/>
      <rect x="16" y="45" width="20" height="20" rx="2" fill="#E8E2D9" opacity="0.7"/>
      <rect x="50" y="45" width="20" height="20" rx="2" fill="#E8E2D9" opacity="0.7"/>
      <rect x="84" y="45" width="20" height="20" rx="2" fill="#E8E2D9" opacity="0.7"/>
      <rect x="16" y="75" width="20" height="12" rx="2" fill="#E8E2D9" opacity="0.5"/>
      <rect x="50" y="75" width="20" height="12" rx="2" fill="#E8E2D9" opacity="0.5"/>
      <rect x="84" y="75" width="20" height="12" rx="2" fill="#E8E2D9" opacity="0.5"/>
    </svg>`
  }
];

// =============================================
//   CART STATE
// =============================================
let cart = [];

// =============================================
//   UTILITY FUNCTIONS
// =============================================
function formatPrice(amount) {
  return '₦' + amount.toLocaleString();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = '✓ ' + message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// =============================================
//   RENDER PRODUCTS
// =============================================
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-img">
        ${product.badge ? `<span class="badge-new">${product.badge}</span>` : ''}
        ${product.svg}
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// =============================================
//   CART FUNCTIONS
// =============================================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(product.name + ' added to cart');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    updateCartUI();
  }
}

function updateCartUI() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  // Update count badge
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = count;

  // Update total
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = formatPrice(total);

  // Update cart items list
  const container = document.getElementById('cart-items');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty">Your cart is empty.<br>Add some products to get started.</div>';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.svg}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove item">✕</button>
    </div>
  `).join('');
}

// =============================================
//   CART SIDEBAR TOGGLE
// =============================================
function toggleCart() {
  const overlay = document.getElementById('cart-overlay');
  const sidebar = document.getElementById('cart-sidebar');
  if (overlay) overlay.classList.toggle('open');
  if (sidebar) sidebar.classList.toggle('open');
}

// =============================================
//   CHECKOUT
// =============================================
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // TODO: Replace this with your Paystack integration
  // Example Paystack setup:
  //
  // const handler = PaystackPop.setup({
  //   key: 'pk_live_YOUR_PUBLIC_KEY_HERE',
  //   email: 'customer@email.com',
  //   amount: total * 100, // Paystack uses kobo
  //   currency: 'NGN',
  //   callback: function(response) {
  //     showToast('Payment successful! Ref: ' + response.reference);
  //     cart = [];
  //     updateCartUI();
  //     toggleCart();
  //   },
  //   onClose: function() {
  //     showToast('Payment window closed.');
  //   }
  // });
  // handler.openIframe();

  showToast('Total: ' + formatPrice(total) + ' — Add your Paystack key to enable payment!');
}

// =============================================
//   SMOOTH SCROLL FOR NAV LINKS
// =============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// =============================================
//   INITIALISE ON PAGE LOAD
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  renderProducts();
  initSmoothScroll();
});
