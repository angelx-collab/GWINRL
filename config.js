// === GWINRL – config + i18n (FR/NL/EN) ===
window.GWINRL_CONFIG = {
  codes: ["AMI10","FRIEND10","GW10"],
  stripe: {
    // ← COLLE ICI TES LIENS Stripe Payment Link (normal)
    normal:  { starter:"", pro:"", vip:"", elite:"" },
    // ← (optionnel) Liens alternatifs si tu veux des liens parrainage séparés
    referral:{ starter:"", pro:"", vip:"", elite:"" }
  },
  crypto: {
    normal:{ starter:"", pro:"", vip:"", elite:"" },
    referral:{ starter:"", pro:"", vip:"", elite:"" }
  },
  // Compteurs / FOMO
  fomo: { countdownISO:"2025-12-31T23:00:00Z", soldStart:21, soldTarget:150, eliteSeatsLeft:8, eliteTotalSeats:8 },
  support:{ email:"hello@gwinrl.com", whatsapp:"" }
};

// Textes multilingues
window.GWINRL_I18N = {
  fr: {
    badges:["Places limitées","Stripe sécurisé","Garantie 14j (sauf accès immédiat)"],
    title:"GWINRL — 72h pour reprendre la main",
    lead:"On applique ensemble. Zéro blabla — des actions concrètes pour souffler financièrement.",
    bullets:[
      "Réductions polies de factures (télécom/Internet/assurances).",
      "Switchs malins (énergie/banque) + bonus d’entrée si pertinent.",
      "Cash immédiat : revente express (modèles d’annonces + grille de prix).",
      "« Claim Accelerator » : UE261, garantie, frais bancaires (modèles inclus)."
    ],
    eliteLabel:"ELITE",
    waiver:"Je veux l’accès immédiat et je renonce au droit de rétractation de 14 jours.",
    pay:"Payer (Stripe)", crypto:"USDT/USDC",
    enrolledLabel:"{n} inscrits", eliteSeatsLabel:"ELITE : {n} places", closes:"clôture"
  },
  en: {
    badges:["Limited seats","Secure Stripe","14-day guarantee (except instant access)"],
    title:"GWINRL — 72h to take back control",
    lead:"We execute together. No fluff — concrete actions for breathing room.",
    bullets:[
      "Polite bill reductions (telecom/Internet/insurance).",
      "Smart switches (energy/bank) + sign-up bonuses when relevant.",
      "Instant cash: quick resale (ad templates + price grid).",
      "“Claim Accelerator”: EU261, warranty, bank fees (templates included)."
    ],
    eliteLabel:"ELITE",
    waiver:"I want immediate access and waive the 14-day right of withdrawal.",
    pay:"Pay (Stripe)", crypto:"USDT/USDC",
    enrolledLabel:"{n} enrolled", eliteSeatsLabel:"ELITE: {n} seats", closes:"closing"
  },
  nl: {
    badges:["Beperkte plaatsen","Veilige Stripe","14-dagen garantie (behalve directe toegang)"],
    title:"GWINRL — 72u om opnieuw grip te krijgen",
    lead:"We doen het samen. Geen blabla — concrete acties voor ademruimte.",
    bullets:[
      "Vriendelijke vermindering van facturen (telecom/internet/verzekeringen).",
      "Slim overstappen (energie/bank) + welkomstbonus indien relevant.",
      "Direct cash: snelle doorverkoop (advertentiesjablonen + prijslijst).",
      "“Claim Accelerator”: EU261, garantie, bankkosten (sjablonen inbegrepen)."
    ],
    eliteLabel:"ELITE",
    waiver:"Ik wil onmiddellijke toegang en doe afstand van het herroepingsrecht van 14 dagen.",
    pay:"Betalen (Stripe)", crypto:"USDT/USDC",
    enrolledLabel:"{n} ingeschreven", eliteSeatsLabel:"ELITE: {n} plaatsen", closes:"sluiting"
  }
};

// — i18n + activation bouton Stripe —
(function () {
  const S = window.GWINRL_CONFIG, T = window.GWINRL_I18N;
  const state = { lang: "fr" };

  function applyI18n() {
    const L = T[state.lang];
    ["b1","b2","b3"].forEach((id,i)=>{ const el=document.getElementById(id); if(el) el.textContent=L.badges[i]; });
    const set = (id,txt)=>{const el=document.getElementById(id); if(el) el.textContent=txt;};
    set("title", L.title);
    set("lead", L.lead);
    const ul=document.getElementById("bullets"); if (ul) { ul.innerHTML=""; L.bullets.forEach(x=>{const li=document.createElement("li"); li.textContent=x; ul.appendChild(li);}); }
    set("eliteLabel", L.eliteLabel);
    set("waiverLabel", L.waiver);
    document.querySelectorAll('[data-i18n="pay"]').forEach(b=>b.textContent=L.pay);
    document.querySelectorAll('[data-i18n="crypto"]').forEach(b=>b.textContent=L.crypto);
  }

  document.addEventListener("click",(e)=>{
    const b=e.target.closest(".langs button"); if(!b) return;
    document.querySelectorAll(".langs button").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); state.lang=b.dataset.lang; applyI18n();
  });
  document.addEventListener("DOMContentLoaded", applyI18n);

  // Activer le bouton Stripe seulement si conditions OK + lien présent
  const pay   = ()=>document.getElementById("pay");
  const elite = ()=>document.getElementById("chk-elite");
  const waiver= ()=>document.getElementById("chk-waiver");
  const hasStripeURL = ()=> (S?.stripe?.normal?.elite||"").startsWith("https://");

  function refreshPay(){
    const needWaiver = !!waiver();
    const ok = (elite() && elite().checked) && (!needWaiver || waiver().checked);
    if (pay()) {
      pay().disabled = !ok || !hasStripeURL();
      if (!hasStripeURL()) pay().title = "Ajoute tes URLs Stripe dans config.js";
    }
    // chiffres
    const e1=document.getElementById("enrolled"); if(e1) e1.textContent = (T[state.lang].enrolledLabel||"{n}").replace("{n}", S.fomo.soldStart);
    const e2=document.getElementById("eliteSeats"); if(e2) e2.textContent = (T[state.lang].eliteSeatsLabel||"{n}").replace("{n}", S.fomo.eliteSeatsLeft);
  }
  document.addEventListener("change",(e)=>{
    if (["chk-elite","chk-waiver"].includes(e.target.id)) refreshPay();
  });
  document.addEventListener("DOMContentLoaded", refreshPay);
})();