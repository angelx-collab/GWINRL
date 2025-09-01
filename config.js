// === GWINRL — config + i18n (FR/NL/EN)
window.GWINRL_CONFIG = {
  // codes referral reconnus (si "code=AMI10" etc. est dans l'URL)
  codes: ["AMI10","FRIEND10","GW10"],

  // === 8 LIENS STRIPE ===
  // normal = prix public ; referral = prix remisé (ou lien avec coupon appliqué)
  stripe: {
    normal:   {
      starter: https://buy.stripe.com/28EeVc6nTcdp5PcdWO3Nm02, 
      pro:     https://buy.stripe.com/aFaaEW3bHelx6Tgf0S3Nm03,
      vip:     https://buy.stripe.com/aFadR84fLelx4L87yq3Nm04,
      elite:   https://buy.stripe.com/aFa8wO27D3GT0uS2e63Nm05
    },
    referral: {
      starter: https://buy.stripe.com/7sY3cu4fL4KXdhE5qi3Nm06,
      pro:     https://buy.stripe.com/28E28q5jPfpB7Xk4me3Nm07,
      vip:     https://buy.stripe.com/5kQ4gy7rX3GTa5s4me3Nm08,
      elite:   https://buy.stripe.com/6oU6oG27Db9l7Xk1a23Nm09
    }
  },

  // (facultatif) liens crypto si tu en as, sinon laisse "#"
  crypto: {
    normal:   { starter:"#", pro:"#", vip:"#", elite:"#"},
    referral: { starter:"#", pro:"#", vip:"#", elite:"#"}
  },

  // FOMO & support (tu peux garder comme ça)
  fomo: { countdownISO: "2025-12-31T23:00:00Z" },
  support: { email: "hello@gwinrl.com" }
};

// === Textes multilingues (tu peux laisser tel quel si ça te va)
window.GWINRL_I18N = {
  fr: {
    badges: ["Places limitées","Stripe sécurisé","Garantie 14j (sauf accès immédiat)"],
    title: "GWINRL — 72h pour reprendre la main",
    lead: "On applique ensemble. Zéro blabla, des actions concrètes pour souffler financièrement.",
    bullets: [
      "Réductions polies de factures (télécom/Internet/assurances).",
      "Switchs malins (énergie/banque) + bonus d’entrée si pertinent.",
      "Cash immédiat : revente express (modèles d’annonces + grille de prix).",
      "« Claim Accelerator » : UE261, garantie, frais bancaires (modèles inclus)."
    ],
    eliteLabel: "ELITE",
    waiver: "Je veux l’accès immédiat et je renonce au droit de rétractation de 14 jours."
  },

  en: {
    badges: ["Limited seats","Stripe secure","14-day guarantee (except immediate access)"],
    title: "GWINRL — 72h to take back control",
    lead: "We execute together. No fluff — concrete actions for breathing room.",
    bullets: [
      "Polite bill reductions (tel/Internet/insurance).",
      "Smart switches (energy/bank) + signup bonuses when relevant.",
      "Instant cash: quick resale (ad templates + price grid).",
      "“Claim Accelerator”: EU261, warranty, bank fees (templates included)."
    ],
    eliteLabel: "ELITE",
    waiver: "I want immediate access and I waive the 14-day right of withdrawal."
  },

  nl: {
    badges: ["Beperkte plaatsen","Veilig Stripe","14-dagen garantie (behalve directe toegang)"],
    title: "GWINRL — 72u om opnieuw grip te krijgen",
    lead: "We doen het samen. Geen blabla — concrete acties voor ademruimte.",
    bullets: [
      "Vriendelijke verlaging van facturen (telecom/internet/verzekering).",
      "Slimme overstappen (energie/bank) + welkomstbonus indien relevant.",
      "Direct cash: snelle doorverkoop (advertentiesjablonen + prijstabel).",
      "“Claim Accelerator”: EU261, garantie, bankkosten (sjablonen inbegrepen)."
    ],
    eliteLabel: "ELITE",
    waiver: "Ik wil onmiddellijke toegang en doe afstand van het herroepingsrecht (14 dagen)."
  }
};