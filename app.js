
const svgIcons = {
  mattress: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="28" width="96" height="56" rx="14" fill="none" stroke="currentColor" stroke-width="6"/><line x1="24" y1="52" x2="96" y2="52" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
  pillow: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="28" width="84" height="64" rx="20" fill="none" stroke="currentColor" stroke-width="6"/><path d="M24 50c10 10 20 14 36 14s26-4 36-14" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`,
  duvet: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M18 62c12-20 28-32 44-32s32 12 44 32v18H18V62z" fill="none" stroke="currentColor" stroke-width="6"/><path d="M26 70c12-12 24-12 34-6s20 12 34 6" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
  bedspread: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="28" width="84" height="68" rx="10" fill="none" stroke="currentColor" stroke-width="6"/><path d="M24 42l18 16 20-16 18 16 20-16" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
  blanket: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="26" width="84" height="68" rx="14" fill="none" stroke="currentColor" stroke-width="6"/><path d="M24 66c16 12 32 16 40 16s24-4 40-16" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M26 54l16-10 16 12 16-12 16 10" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
  bedframes: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="32" width="80" height="56" rx="6" fill="none" stroke="currentColor" stroke-width="6"/><line x1="20" y1="88" x2="20" y2="102" stroke="currentColor" stroke-width="6"/><line x1="100" y1="88" x2="100" y2="102" stroke="currentColor" stroke-width="6"/><path d="M20 44h80" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>`
};

const products = [
  { id: 1, category: 'Mattress', name: 'Serenity Mattress', desc: 'Orthopedic memory foam, medium-firm support', price: 120000, badge: 'Bestseller', svg: svgIcons.mattress },
  { id: 2, category: 'Mattress', name: 'Dream Luxe Mattress', desc: 'Gel-infused comfort layer with reinforced edge support', price: 145000, badge: 'New', svg: svgIcons.mattress },
  { id: 3, category: 'Mattress', name: 'Cloud Support Mattress', desc: 'Plush top with pocketed spring core for pressure relief', price: 130000, badge: null, svg: svgIcons.mattress },
  { id: 4, category: 'Mattress', name: 'EcoSpring Mattress', desc: 'Natural latex and organic cotton for cool sleep', price: 155000, badge: null, svg: svgIcons.mattress },
  { id: 5, category: 'Mattress', name: 'Royal Gel Mattress', desc: 'Adaptive cooling gel and lumbar support system', price: 162000, badge: null, svg: svgIcons.mattress },
  { id: 6, category: 'Mattress', name: 'Calm Foam Mattress', desc: 'Responsive memory foam with soft contouring comfort', price: 128000, badge: null, svg: svgIcons.mattress },

  { id: 7, category: 'Pillow', name: 'Cloud Pillow', desc: 'Hypoallergenic microfibre, adjustable loft', price: 15000, badge: 'Popular', svg: svgIcons.pillow },
  { id: 8, category: 'Pillow', name: 'Comfort Support Pillow', desc: 'Contour shape for neck and shoulder alignment', price: 18000, badge: null, svg: svgIcons.pillow },
  { id: 9, category: 'Pillow', name: 'Cooling Gel Pillow', desc: 'Breathable gel layer for temperature control', price: 17500, badge: null, svg: svgIcons.pillow },
  { id: 10, category: 'Pillow', name: 'FeatherLight Pillow', desc: 'Soft fill with gentle support and plush feel', price: 14000, badge: null, svg: svgIcons.pillow },
  { id: 11, category: 'Pillow', name: 'Travel Neck Pillow', desc: 'Compact support for on-the-go comfort', price: 9800, badge: null, svg: svgIcons.pillow },
  { id: 12, category: 'Pillow', name: 'Kids Dream Pillow', desc: 'Hypoallergenic pillow designed for growing children', price: 12500, badge: null, svg: svgIcons.pillow },

  { id: 13, category: 'Duvet', name: 'Warmth Duvet', desc: 'All-season microfibre, machine washable', price: 45000, badge: 'Best Seller', svg: svgIcons.duvet },
  { id: 14, category: 'Duvet', name: 'All-Season Duvet', desc: 'Lightweight comfort for year-round sleep', price: 42000, badge: null, svg: svgIcons.duvet },
  { id: 15, category: 'Duvet', name: 'Luxe Goose Duvet', desc: 'Premium down-feel loft with soft cover', price: 61000, badge: null, svg: svgIcons.duvet },
  { id: 16, category: 'Duvet', name: 'Bamboo Soft Duvet', desc: 'Breathable bamboo fibre for cooler nights', price: 52000, badge: null, svg: svgIcons.duvet },
  { id: 17, category: 'Duvet', name: 'ChillGuard Duvet', desc: 'Temperature-regulating fill with silky finish', price: 49000, badge: null, svg: svgIcons.duvet },
  { id: 18, category: 'Duvet', name: 'Ultra Cozy Duvet', desc: 'Plush duvet with extra softness and warmth', price: 56000, badge: null, svg: svgIcons.duvet },

  { id: 19, category: 'Bedspread', name: 'Royale Bedspread', desc: 'Woven cotton blend, elegant patterned finish', price: 32000, badge: 'New', svg: svgIcons.bedspread },
  { id: 20, category: 'Bedspread', name: 'Linen Wave Bedspread', desc: 'Soft linen texture with subtle decorative stitching', price: 28000, badge: null, svg: svgIcons.bedspread },
  { id: 21, category: 'Bedspread', name: 'Velvet Night Bedspread', desc: 'Rich velvet finish for a luxe bedroom look', price: 34000, badge: null, svg: svgIcons.bedspread },
  { id: 22, category: 'Bedspread', name: 'Floral Whisper Bedspread', desc: 'Elegant floral print with breathable cotton mix', price: 29500, badge: null, svg: svgIcons.bedspread },
  { id: 23, category: 'Bedspread', name: 'Satin Shine Bedspread', desc: 'Smooth satin surface for a polished finish', price: 31000, badge: null, svg: svgIcons.bedspread },
  { id: 24, category: 'Bedspread', name: 'Classic Quilt Bedspread', desc: 'Quilted layers for structure, style, and comfort', price: 30000, badge: null, svg: svgIcons.bedspread },

  { id: 25, category: 'Blanket', name: 'Cotton Throw Blanket', desc: 'Soft cotton weave for everyday warmth', price: 16500, badge: null, svg: svgIcons.blanket },
  { id: 26, category: 'Blanket', name: 'Knit Cocoon Blanket', desc: 'Chunky knit texture with cosy comfort', price: 18500, badge: null, svg: svgIcons.blanket },
  { id: 27, category: 'Blanket', name: 'Wool Blend Blanket', desc: 'Warm wool blend for colder nights', price: 22500, badge: null, svg: svgIcons.blanket },
  { id: 28, category: 'Blanket', name: 'Sofa Snuggle Blanket', desc: 'Compact throw designed for lounge and travel', price: 14500, badge: null, svg: svgIcons.blanket },
  { id: 29, category: 'Blanket', name: 'Airy Breeze Blanket', desc: 'Lightweight layer for mild temperatures', price: 14000, badge: null, svg: svgIcons.blanket },
  { id: 30, category: 'Blanket', name: 'Heirloom Plaid Blanket', desc: 'Classic plaid design with soft finish', price: 19500, badge: null, svg: svgIcons.blanket },

  { id: 31, category: 'Bedframes', name: 'Oak Frame Bed', desc: 'Solid oak frame with a natural finish', price: 185000, badge: null, svg: svgIcons.bedframes },
  { id: 32, category: 'Bedframes', name: 'Upholstered Bedframe', desc: 'Padded headboard for extra comfort', price: 198000, badge: null, svg: svgIcons.bedframes },
  { id: 33, category: 'Bedframes', name: 'Minimalist Platform', desc: 'Low-profile frame with modern styling', price: 172000, badge: null, svg: svgIcons.bedframes },
  { id: 34, category: 'Bedframes', name: 'Metal Loft Bed', desc: 'Durable metal bedframe with space-saving design', price: 163000, badge: null, svg: svgIcons.bedframes },
  { id: 35, category: 'Bedframes', name: 'Storage Bedframe', desc: 'Built-in drawers for extra bedroom storage', price: 205000, badge: null, svg: svgIcons.bedframes },
  { id: 36, category: 'Bedframes', name: 'Canopy Bed Frame', desc: 'Elegant canopy structure with refined details', price: 218000, badge: null, svg: svgIcons.bedframes }
];

// =============================================
//   CART STATE
// =============================================
let cart = [];
let currentCategory = 'All';

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
function renderProducts(category = currentCategory) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const visibleProducts = category === 'All'
    ? products
    : products.filter(product => product.category === category);

  if (visibleProducts.length === 0) {
    grid.innerHTML = '<div class="product-card"><div class="product-info"><div class="product-name">No products found</div><div class="product-desc">Try selecting another category.</div></div></div>';
    return;
  }

  grid.innerHTML = visibleProducts.map(product => `
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

function setActiveFilter(category) {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.classList.toggle('active', button.textContent.trim() === category);
  });
}

function filterCategory(category) {
  currentCategory = category;
  setActiveFilter(category);
  renderProducts(category);
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

  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = count;

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = formatPrice(total);

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
