import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  .nia-root {
    font-family: 'DM Sans', sans-serif;
    color: #1a1a1a;
    background: #fff;
    font-size: 14px;
  }

  // /* ---- TOP BAR ---- */
  // .topbar {
  //   background: #003087;
  //   color: #fff;
  //   font-size: 11px;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   padding: 5px 40px;
  // }
  // .topbar span { opacity: 0.85; }
  // .topbar-links { display: flex; gap: 20px; }
  // .topbar-links a { color: #fff; text-decoration: none; opacity: 0.85; }
  // .topbar-links a:hover { opacity: 1; }

  // /* ---- NAVBAR ---- */
  // .navbar {
  //   background: #fff;
  //   border-bottom: 1px solid #e8e8e8;
  //   padding: 0 40px;
  //   position: sticky;
  //   top: 0;
  //   z-index: 100;
  //   box-shadow: 0 1px 8px rgba(0,0,0,0.06);
  // }
  // .navbar-inner {
  //   display: flex;
  //   align-items: center;
  //   gap: 20px;
  //   height: 60px;
  // }
  // .nav-logo {
  //   font-family: 'DM Serif Display', serif;
  //   font-size: 26px;
  //   color: #003087;
  //   font-weight: 400;
  //   letter-spacing: 1px;
  //   flex-shrink: 0;
  // }
  // .nav-search {
  //   flex: 1;
  //   max-width: 480px;
  //   display: flex;
  //   border: 1.5px solid #d0d0d0;
  //   border-radius: 8px;
  //   overflow: hidden;
  //   transition: border-color 0.2s;
  // }
  // .nav-search:focus-within { border-color: #003087; }
  // .nav-search input {
  //   flex: 1;
  //   padding: 8px 14px;
  //   border: none;
  //   outline: none;
  //   font-size: 13px;
  //   font-family: 'DM Sans', sans-serif;
  // }
  // .nav-search button {
  //   background: #003087;
  //   color: #fff;
  //   border: none;
  //   padding: 0 16px;
  //   cursor: pointer;
  //   font-size: 15px;
  // }
  // .nav-actions {
  //   display: flex;
  //   align-items: center;
  //   gap: 6px;
  //   margin-left: auto;
  // }
  // .nav-action-btn {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 2px;
  //   padding: 6px 10px;
  //   border: none;
  //   background: transparent;
  //   cursor: pointer;
  //   font-size: 10px;
  //   color: #444;
  //   border-radius: 6px;
  //   transition: background 0.15s;
  //   font-family: 'DM Sans', sans-serif;
  // }
  // .nav-action-btn:hover { background: #f0f4ff; color: #003087; }
  // .nav-action-btn svg { width: 20px; height: 20px; }
  // .nav-plus-btn {
  //   background: #003087;
  //   color: #fff;
  //   border: none;
  //   padding: 7px 16px;
  //   border-radius: 20px;
  //   font-size: 12px;
  //   font-weight: 600;
  //   cursor: pointer;
  //   font-family: 'DM Sans', sans-serif;
  //   transition: background 0.2s;
  // }
  // .nav-plus-btn:hover { background: #002060; }

  /* ---- CATEGORY NAV ---- */
  // .cat-nav {
  //   background: #fff;
  //   border-bottom: 1px solid #efefef;
  //   padding: 0 40px;
  // }
  // .cat-nav-inner {
  //   display: flex;
  //   gap: 0;
  //   overflow-x: auto;
  //   scrollbar-width: none;
  // }
  // .cat-nav-inner::-webkit-scrollbar { display: none; }
  // .cat-nav-item {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 6px;
  //   padding: 10px 18px;
  //   cursor: pointer;
  //   font-size: 11px;
  //   color: #555;
  //   white-space: nowrap;
  //   border-bottom: 2px solid transparent;
  //   transition: all 0.15s;
  //   flex-shrink: 0;
  // }
  // .cat-nav-item:hover, .cat-nav-item.active {
  //   color: #003087;
  //   border-bottom-color: #003087;
  // }
  // .cat-nav-item img {
  //   width: 36px;
  //   height: 36px;
  //   object-fit: contain;
  // }
  // .cat-icon {
  //   width: 36px;
  //   height: 36px;
  //   border-radius: 8px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   font-size: 20px;
  //   background: #f5f7ff;
  // }

  /* ---- HERO ---- */
  .hero {
    background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f0ff 100%);
    padding: 40px 40px 30px;
  }
  .hero-tagline {
    font-size: 22px;
    font-weight: 400;
    color: #1a1a1a;
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .hero-tagline strong {
    font-weight: 700;
    font-family: 'DM Serif Display', serif;
    color: #003087;
  }
  .hero-cta {
    background: #003087;
    color: #fff;
    border: none;
    padding: 9px 20px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: background 0.2s;
  }
  .hero-cta:hover { background: #002060; }

  .hero-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 24px;
  }
  .hero-card {
    background: #fff;
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 2px 16px rgba(0,48,135,0.07);
    display: flex;
    gap: 14px;
    align-items: flex-start;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .hero-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(0,48,135,0.12);
  }
  .hero-card-img {
    width: 80px;
    height: 90px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
    background: #f0f4ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }
  .hero-card-content h3 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
    color: #1a1a1a;
  }
  .hero-card-content p {
    font-size: 12px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 8px;
  }
  .hero-card-content .badge {
    background: #e8f0fe;
    color: #003087;
    font-size: 10px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 10px;
  }

  /* ---- SECTION COMMON ---- */
  .section { padding: 36px 40px; }
  .section-alt { background: #f8f9fc; }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 18px;
  }
  .section-title {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: 'DM Serif Display', serif;
  }
  .section-sub {
    font-size: 12px;
    color: #888;
    margin-top: 2px;
  }
  .see-all {
    font-size: 12px;
    color: #003087;
    font-weight: 600;
    cursor: pointer;
    background: none;
    border: 1.5px solid #003087;
    padding: 5px 14px;
    border-radius: 20px;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.15s;
  }
  .see-all:hover { background: #003087; color: #fff; }

  /* ---- DISCOVER COOLING ---- */
  .cooling-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 12px;
    margin-bottom: 20px;
  }
  .cooling-main {
    grid-row: span 2;
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(135deg, #00b4db, #0083b0);
    min-height: 240px;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    cursor: pointer;
  }
  .cooling-main-label {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    font-family: 'DM Serif Display', serif;
  }
  .cooling-main-emoji {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 64px;
    opacity: 0.3;
  }
  .cooling-promo {
    border-radius: 12px;
    background: linear-gradient(135deg, #fff3cd, #ffeeba);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }
  .cooling-promo h4 { font-size: 13px; font-weight: 700; color: #856404; }
  .cooling-promo p { font-size: 11px; color: #6d5204; margin-top: 4px; }
  .cooling-img {
    border-radius: 12px;
    background: linear-gradient(135deg, #e8f4f8, #d4eef7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    cursor: pointer;
    min-height: 100px;
  }

  /* ---- PRODUCT CARDS ---- */
  .products-scroll {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }
  .product-card {
    background: #fff;
    border: 1px solid #efefef;
    border-radius: 12px;
    padding: 14px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
  }
  .product-card:hover {
    border-color: #003087;
    box-shadow: 0 4px 20px rgba(0,48,135,0.1);
    transform: translateY(-2px);
  }
  .product-img {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    background: #f8f9fc;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  .product-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #003087;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 6px;
  }
  .product-tag.green { background: #1d7d44; }
  .product-tag.orange { background: #e25822; }
  .product-name {
    font-size: 11px;
    color: #555;
    margin-bottom: 6px;
    line-height: 1.4;
    height: 30px;
    overflow: hidden;
  }
  .product-price {
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
  }
  .product-price-old {
    font-size: 11px;
    color: #999;
    text-decoration: line-through;
    margin-left: 5px;
    font-weight: 400;
  }
  .product-actions {
    display: flex;
    gap: 6px;
    margin-top: 8px;
  }
  .add-cart-btn {
    flex: 1;
    background: #003087;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.15s;
  }
  .add-cart-btn:hover { background: #002060; }
  .wish-btn {
    width: 30px;
    background: #f0f0f0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: background 0.15s;
  }
  .wish-btn:hover { background: #ffe0e0; }

  /* ---- HYDRATION / PROMO BANNER SECTION ---- */
  .hydration-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 14px;
    margin-bottom: 20px;
  }
  .hydration-main {
    border-radius: 14px;
    background: linear-gradient(135deg, #d4edda, #a8d5ba);
    min-height: 220px;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .hydration-main-emoji {
    position: absolute;
    top: 16px;
    right: 20px;
    font-size: 72px;
    opacity: 0.25;
  }
  .hydration-main-label {
    font-size: 18px;
    font-weight: 700;
    color: #145a32;
    font-family: 'DM Serif Display', serif;
  }
  .hydration-right {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 14px;
  }
  .hydration-sub {
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
  }
  .hydration-sub.teal { background: linear-gradient(135deg, #e0f7fa, #b2ebf2); }
  .hydration-sub.orange { background: linear-gradient(135deg, #fff8e1, #ffecb3); }
  .hydration-sub-icon { font-size: 36px; }
  .hydration-sub h4 { font-size: 13px; font-weight: 700; }
  .hydration-sub p { font-size: 11px; color: #555; margin-top: 2px; }

  /* ---- FIRST TIME SHOPPING ---- */
  .first-time-banner {
    background: linear-gradient(135deg, #e8f0fe, #f0f4ff);
    border-radius: 14px;
    padding: 20px 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .first-time-banner h3 { font-size: 16px; font-weight: 700; font-family: 'DM Serif Display', serif; }
  .first-time-banner p { font-size: 12px; color: #555; margin-top: 3px; }
  .promo-code {
    background: #003087;
    color: #fff;
    padding: 3px 10px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 13px;
  }

  .first-time-products {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }
  .ft-product {
    background: #fff;
    border: 1px solid #efefef;
    border-radius: 12px;
    padding: 14px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
  }
  .ft-product:hover {
    border-color: #003087;
    box-shadow: 0 4px 20px rgba(0,48,135,0.1);
    transform: translateY(-2px);
  }
  .ft-product-icon {
    width: 80px;
    height: 80px;
    background: #f8f9fc;
    border-radius: 50%;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }
  .ft-product-name { font-size: 12px; font-weight: 600; color: #333; }
  .ft-product-discount {
    font-size: 11px;
    color: #1d7d44;
    font-weight: 700;
    margin-top: 4px;
  }

  /* ---- EXPLORE BY ROOM ---- */
  .rooms-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }
  .room-card {
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
    position: relative;
  }
  .room-card:hover { transform: translateY(-3px); }
  .room-img {
    width: 100%;
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    border-radius: 12px 12px 0 0;
  }
  .room-card:nth-child(1) .room-img { background: linear-gradient(135deg,#e8eaf6,#c5cae9); }
  .room-card:nth-child(2) .room-img { background: linear-gradient(135deg,#e0f2f1,#b2dfdb); }
  .room-card:nth-child(3) .room-img { background: linear-gradient(135deg,#fff3e0,#ffe0b2); }
  .room-card:nth-child(4) .room-img { background: linear-gradient(135deg,#fce4ec,#f8bbd0); }
  .room-card:nth-child(5) .room-img { background: linear-gradient(135deg,#e8f5e9,#c8e6c9); }
  .room-label {
    background: #fff;
    border: 1px solid #efefef;
    border-top: none;
    padding: 10px 12px;
    font-size: 12px;
    font-weight: 600;
    color: #333;
    border-radius: 0 0 12px 12px;
    text-align: center;
  }

  /* ---- BRAND PORTFOLIO ---- */
  .brands-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
  }
  .brand-card {
    border: 1.5px solid #efefef;
    border-radius: 10px;
    padding: 14px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s;
    min-height: 54px;
  }
  .brand-card:hover { border-color: #003087; box-shadow: 0 2px 12px rgba(0,48,135,0.08); }
  .brand-name {
    font-size: 13px;
    font-weight: 700;
    color: #333;
    text-align: center;
    letter-spacing: 0.5px;
  }

  /* ---- PROMO BANNER ---- */
  .promo-full-banner {
    background: #003087;
    color: #fff;
    text-align: center;
    padding: 16px 40px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .promo-full-banner:hover { background: #002060; }
  .promo-full-banner span { color: #ffd700; }

  /* ---- DESIGNED FOR LIVING ---- */
  .living-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .living-main {
    border-radius: 14px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    min-height: 280px;
    display: flex;
    align-items: flex-end;
    padding: 24px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .living-main-emoji {
    position: absolute;
    top: 20px;
    right: 24px;
    font-size: 80px;
    opacity: 0.15;
  }
  .living-main h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: #fff;
    line-height: 1.3;
  }
  .living-main p {
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    margin-top: 6px;
  }
  .living-sub-grid {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
  }
  .living-sub {
    border-radius: 14px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .living-sub:hover { transform: translateY(-2px); }
  .living-sub.blue { background: linear-gradient(135deg, #e3f2fd, #bbdefb); }
  .living-sub.green { background: linear-gradient(135deg, #e8f5e9, #c8e6c9); }
  .living-sub-icon { font-size: 40px; }
  .living-sub h4 { font-size: 14px; font-weight: 700; }
  .living-sub p { font-size: 12px; color: #555; margin-top: 3px; }

  /* ---- NIA CARES ---- */
  .cares-section {
    background: #003087;
    padding: 36px 40px;
    color: #fff;
  }
  .cares-grid {
    display: grid;
    grid-template-columns: 180px 1fr 1fr 1fr 1fr;
    gap: 32px;
    align-items: start;
  }
  .cares-brand {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: #fff;
  }
  .cares-brand p { font-size: 11px; color: rgba(255,255,255,0.6); margin-top: 6px; font-family: 'DM Sans', sans-serif; }
  .cares-col h4 {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    color: rgba(255,255,255,0.5);
  }
  .cares-col ul { list-style: none; }
  .cares-col ul li { margin-bottom: 7px; }
  .cares-col ul li a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 12px; transition: color 0.15s; }
  .cares-col ul li a:hover { color: #fff; }

  /* ---- TRUST BADGES ---- */
  .trust-section {
    background: #f8f9fc;
    padding: 24px 40px;
    border-bottom: 1px solid #efefef;
  }
  .trust-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .trust-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  .trust-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
  .trust-item h4 { font-size: 13px; font-weight: 700; color: #1a1a1a; }
  .trust-item p { font-size: 11px; color: #777; margin-top: 2px; line-height: 1.5; }

  /* ---- FOOTER ---- */
  .footer {
    background: #fff;
    border-top: 1px solid #efefef;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 11px;
    color: #999;
  }
  .footer-social { display: flex; gap: 10px; }
  .social-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #003087;
    color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    transition: background 0.15s;
  }
  .social-btn:hover { background: #002060; }

  /* ---- NEWSLETTER ---- */
  .newsletter-box {
    background: #fff;
    border: 1.5px solid #e8e8e8;
    border-radius: 10px;
    padding: 14px 16px;
  }
  .newsletter-box h4 { font-size: 13px; font-weight: 700; margin-bottom: 8px; }
  .newsletter-input {
    display: flex;
    gap: 6px;
  }
  .newsletter-input input {
    flex: 1;
    padding: 7px 10px;
    border: 1.5px solid #e0e0e0;
    border-radius: 6px;
    font-size: 11px;
    font-family: 'DM Sans', sans-serif;
    outline: none;
  }
  .newsletter-input input:focus { border-color: #003087; }
  .newsletter-input button {
    background: #003087;
    color: #fff;
    border: none;
    padding: 7px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
  }
`;

const coolingProducts = [
  { name: "Free T/V Twin Air Conditioner 3 HP...", price: "AED 2,199.00", old: "AED 2,499", tag: "15% OFF", emoji: "❄️" },
  { name: "Tower Fan with Remote Control 3...", price: "AED 399.00", old: "AED 499", tag: "20% OFF", emoji: "🌀" },
  { name: "Split Air Conditioner 2.5 HP Cool...", price: "AED 1,899.00", old: "AED 2,199", tag: "SALE", emoji: "🌬️" },
  { name: "Portable Air Conditioner 14,000...", price: "AED 1,299.00", old: "AED 1,499", tag: "NEW", emoji: "💨" },
  { name: "Window Air Conditioner 1.5 HP...", price: "AED 799.00", old: "AED 999", tag: "13% OFF", emoji: "🏠" },
];

const hydrationProducts = [
  { name: "Water Purifier RO System", price: "AED 899.00", old: "AED 1,099", tag: "15% OFF", emoji: "💧" },
  { name: "Hot & Cold Water Dispenser", price: "AED 499.00", old: "AED 599", tag: "NEW", emoji: "🚰" },
  { name: "Alkaline Water Filter 8 Stage", price: "AED 699.00", old: "AED 849", tag: "10% OFF", emoji: "🫧" },
  { name: "Smart Water Purifier WiFi", price: "AED 1,199.00", old: "AED 1,499", tag: "20% OFF", emoji: "📱" },
  { name: "Countertop Water Distiller", price: "AED 349.00", old: "AED 449", tag: "SALE", emoji: "🥤" },
];

const firstTimeProducts = [
  { name: "Water Purifier and Cooler", discount: "Up to 10% Off", emoji: "💧" },
  { name: "Air Cooler Unit", discount: "Up to 10% Off", emoji: "❄️" },
  { name: "Refrigerator 500L", discount: "Up to 10% Off", emoji: "🧊" },
  { name: "Washing Machine 8kg", discount: "Up to 10% Off", emoji: "👕" },
  { name: "Ultima Slim Fan", discount: "Up to 10% Off", emoji: "🌀" },
];

const rooms = [
  { name: "Living Room", emoji: "🛋️" },
  { name: "Laundry Room", emoji: "👗" },
  { name: "Kitchen", emoji: "🍳" },
  { name: "Utility Room", emoji: "🔧" },
  { name: "Climate Control", emoji: "🌡️" },
];

const brands = ["DAEWOO", "AEG", "Black+Decker", "Sunova", "Gorenje", "Electrolux", "GREE", "Symphony", "WINIA", "TAPP Water", "Tecnogas", "WINIA"];

const trustItems = [
  { icon: "🚚", title: "Free Delivery", desc: "On orders above AED 100. Delivered to your door within 2–5 business days." },
  { icon: "✅", title: "Price Match Guarantee", desc: "Found it cheaper elsewhere? We'll match the price, guaranteed." },
  { icon: "🛡️", title: "Safety and Quality", desc: "All products are certified, tested and meet international safety standards." },
  { icon: "↩️", title: "Easy Returns", desc: "Not satisfied? Return within 14 days, hassle-free." },
];


type Product = {
  id?: number;
  name: string;
  price: number;
  old: number | string;
  tag: string;
  emoji: string;
};

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const [wished, setWished] = useState(false);
  return (
    <div className="product-card">
      {product.tag && <div className={`product-tag ${product.tag === "NEW" ? "green" : product.tag === "SALE" ? "orange" : ""}`}>{product.tag}</div>}
      <div className="product-img">{product.emoji}</div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">
        {product.price}
        {product.old && <span className="product-price-old">{product.old}</span>}
      </div>
      <div className="product-actions">
        <button className="add-cart-btn">Add to Cart</button>
        <button className="wish-btn" onClick={() => setWished(!wished)}>{wished ? "❤️" : "🤍"}</button>
      </div>
    </div>
  );
}

export default function NiaHomepage() {
  // const [activeCategory, setActiveCategory] = useState(0);
  // const [searchVal, setSearchVal] = useState("");
  // const categories = [
  //   { label: "Heaters", emoji: "🔥" },
  //   { label: "Microwaves", emoji: "📡" },
  //   { label: "Air Conditioners", emoji: "❄️" },
  //   { label: "Steamers", emoji: "♨️" },
  //   { label: "Evellers", emoji: "🌫️" },
  //   { label: "Refrigeration", emoji: "🧊" },
  //   { label: "Washing/Dryers", emoji: "👕" },
  //   { label: "Space Warmers", emoji: "🌡️" },
  //   { label: "Air Conditioners", emoji: "🌬️" },
  // ];

  return (
    <div className="nia-root">
      <style>{styles}</style>

      {/* TOP BAR */}
      {/* <div className="topbar">
        <span>📞 +971-800-NIA (642) &nbsp;|&nbsp; ✉ support@nia.ae</span>
        <div className="topbar-links">
          <a href="#">Order Tracking</a>
          <a href="#">3-Year Warranty</a>
          <a href="#">Finance available on 0% EMI</a>
        </div>
      </div> */}

      {/* NAVBAR */}
      {/* <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-logo">NIA</div>
          <div className="nav-search">
            <input
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              placeholder="Search for appliances, brands..."
            />
            <button>🔍</button>
          </div>
          <div className="nav-actions">
            <button className="nav-action-btn">
              <span style={{ fontSize: 20 }}>👤</span>
              <span>Account</span>
            </button>
            <button className="nav-action-btn">
              <span style={{ fontSize: 20 }}>🤍</span>
              <span>Wishlist</span>
            </button>
            <button className="nav-action-btn">
              <span style={{ fontSize: 20 }}>🛒</span>
              <span>Cart</span>
            </button>
            <button className="nav-plus-btn">✦ NIA Plus</button>
          </div>
        </div>
      </nav> */}

      {/* CATEGORY NAV */}
      {/* <div className="cat-nav">
        <div className="cat-nav-inner">
          {categories.map((c, i) => (
            <div
              key={i}
              className={`cat-nav-item ${activeCategory === i ? "active" : ""}`}
              onClick={() => setActiveCategory(i)}
            >
              <div className="cat-icon">{c.emoji}</div>
              {c.label}
            </div>
          ))}
        </div>
      </div> */}

      {/* HERO */}
      <div className="hero">
        <p className="hero-tagline">
          Your <strong>Trusted Destination</strong> for Home Appliances &amp;<br />Well-Being Solutions
        </p>
        <button className="hero-cta">Offers ▾</button>

        <div className="hero-cards">
          <div className="hero-card">
            <div className="hero-card-img">🌬️</div>
            <div className="hero-card-content">
              <h3>Breathe Easy, Live Better.</h3>
              <p>Discover air purifiers, fans, and solutions for a healthier, fresher home.</p>
              <span className="badge">Shop Now →</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-img">👕</div>
            <div className="hero-card-content">
              <h3>Smart Laundry, Simple Living!</h3>
              <p>Save up to 30% this week only on washers &amp; dryers — limited time.</p>
              <span className="badge">Up to 30% Off</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-img">🍳</div>
            <div className="hero-card-content">
              <h3>Everyday Must-haves, Essentials At Home</h3>
              <p>Get up to 20% off on AED 1,500+ &amp; 5-Star warranty on all items.</p>
              <span className="badge">See All →</span>
            </div>
          </div>
        </div>
      </div>

      {/* DISCOVER COOLING */}
      <div className="section">
        <div className="section-header">
          <div>
            <div className="section-title">Discover Cooling</div>
            <div className="section-sub">Suitable air conditioning solutions for every home</div>
          </div>
          <button className="see-all">See all</button>
        </div>
        <div className="cooling-grid">
          <div className="cooling-main">
            <span className="cooling-main-emoji">❄️</span>
            <div className="cooling-main-label">Stay Cool<br />This Summer</div>
          </div>
          <div className="cooling-promo">
            <h4>Pre-Summer Savings</h4>
            <p>Save 20% on all cooling products. Plus up to 12 Months Warranty included.</p>
          </div>
          <div className="cooling-img">🌀</div>
        </div>
        <div className="products-scroll">
          {coolingProducts.map((p, i) => <ProductCard key={i} product={{ ...p, price: Number(p.price) }} />)}
        </div>
      </div>

      {/* DISCOVER HEALTHY HYDRATION */}
      <div className="section section-alt">
        <div className="section-header">
          <div>
            <div className="section-title">Discover Healthy Hydration</div>
            <div className="section-sub">Tap into pure mineral water made in your kitchen</div>
          </div>
          <button className="see-all">See all</button>
        </div>
        <div className="hydration-grid">
          <div className="hydration-main">
            <span className="hydration-main-emoji">💧</span>
            <div className="hydration-main-label">Pure Water,<br />Pure Life</div>
          </div>
          <div className="hydration-right">
            <div className="hydration-sub teal">
              <div className="hydration-sub-icon">🌿</div>
              <div>
                <h4>Sustainability + Enrichment</h4>
                <p>Up to 20% off on all water purification products + 12 Months Warranty</p>
              </div>
            </div>
            <div className="hydration-sub orange">
              <div className="hydration-sub-icon">☀️</div>
              <div>
                <h4>Summer Hydration Kit</h4>
                <p>Bundle deals on dispensers and filters — starting AED 299</p>
              </div>
            </div>
          </div>
        </div>
        <div className="products-scroll">
          {hydrationProducts.map((p, i) => <ProductCard key={i} product={{ ...p, price: Number(p.price) }} />)}
        </div>
      </div>

      {/* FIRST TIME SHOPPING */}
      <div className="section">
        <div className="first-time-banner">
          <div>
            <h3>Your First Time Shopping Spree</h3>
            <p>Welcome to NIA! Simply use the code <span className="promo-code">NiaFirst10</span> for an exclusive 10% off your first order.</p>
          </div>
          <button className="see-all">See all</button>
        </div>
        <div className="first-time-products">
          {firstTimeProducts.map((p, i) => (
            <div key={i} className="ft-product">
              <div className="ft-product-icon">{p.emoji}</div>
              <div className="ft-product-name">{p.name}</div>
              <div className="ft-product-discount">{p.discount}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPLORE BY ROOM */}
      <div className="section section-alt">
        <div className="section-header">
          <div>
            <div className="section-title">Explore Appliances By Room</div>
            <div className="section-sub">Select the room, discover your fit life.</div>
          </div>
        </div>
        <div className="rooms-grid">
          {rooms.map((r, i) => (
            <div key={i} className="room-card">
              <div className="room-img">{r.emoji}</div>
              <div className="room-label">{r.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BRAND PORTFOLIO */}
      <div className="section">
        <div className="section-header">
          <div>
            <div className="section-title">Our Brand Portfolio</div>
            <div className="section-sub">Explore top-rated appliances from brands you know and new ones to love.</div>
          </div>
        </div>
        <div className="brands-grid">
          {brands.map((b, i) => (
            <div key={i} className="brand-card">
              <div className="brand-name">{b}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROMO FULL BANNER */}
      <div className="promo-full-banner">
        Save an extra <span>20% on select brands</span> — Look out for checkout offers! &nbsp;→
      </div>

      {/* DESIGNED FOR LIVING */}
      <div className="section section-alt">
        <div className="section-header">
          <div>
            <div className="section-title">Designed for Living</div>
            <div className="section-sub">It moves you further. Start your journey. Experience the story.</div>
          </div>
        </div>
        <div className="living-grid">
          <div className="living-main">
            <span className="living-main-emoji">🏠</span>
            <div>
              <h3>Built for the Way You Live</h3>
              <p>Discover our curated collections for modern homes — smart, elegant, efficient.</p>
            </div>
          </div>
          <div className="living-sub-grid">
            <div className="living-sub blue">
              <div className="living-sub-icon">🍽️</div>
              <div>
                <h4>Elevate your kitchen.</h4>
                <p>Smart. Stylish. Seamless. From smart fridges to precision cookers.</p>
              </div>
            </div>
            <div className="living-sub green">
              <div className="living-sub-icon">📦</div>
              <div>
                <h4>Track your order</h4>
                <p>Stay updated every step of the way with real-time tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="trust-section">
        <div className="trust-grid">
          {trustItems.map((t, i) => (
            <div key={i} className="trust-item">
              <div className="trust-icon">{t.icon}</div>
              <div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NIA CARES */}
      <div className="cares-section">
        <div className="cares-grid">
          <div className="cares-brand">
            NIA
            <p>At NIA, we care about your home, your health, and your happiness.</p>
          </div>
          {[
            { title: "Company", links: ["About Us", "Careers", "Press", "Blog", "Sustainability"] },
            { title: "Appliances", links: ["Air Conditioners", "Washers", "Refrigerators", "Kitchen", "Water Purification"] },
            { title: "Useful Links", links: ["Track Order", "Buying Guide", "Warranty", "Promotions", "Shipping Policy"] },
            { title: "Policy", links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Complaints", "Shipping Policy"] },
          ].map((col, i) => (
            <div key={i} className="cares-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l, j) => <li key={j}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div className="newsletter-box" style={{ flex: 1, maxWidth: 280 }}>
            <h4>Join our newsletter</h4>
            <div className="newsletter-input">
              <input placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>Follow us on social media</div>
            <div className="footer-social">
              <button className="social-btn">f</button>
              <button className="social-btn">in</button>
              <button className="social-btn">🐦</button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div>
          📍 Nia Group | P.O. Box 12345, Dubai, UAE &nbsp;&nbsp;
          📞 +971-800-NIA (642) &nbsp;&nbsp;
          ✉ support@nia.ae
        </div>
        <div>© 2025 NIA Group. All rights reserved.</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span>🔒 Secured payments</span>
          <span style={{ marginLeft: 8 }}>💳 Visa &nbsp; Mastercard &nbsp; PayPal</span>
        </div>
      </div>
    </div>
  );
}
