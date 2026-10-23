// Wird vom automatischen Pokémon-Check aktualisiert. Nur diese Datei ändern, index.html bleibt gleich.
window.DASHBOARD = {
  aktualisiert: "2026-10-23 21:14",
  hinweis: "Preise stammen aus Suchzusammenfassungen. Pokémon Center und Cardmarket sind für Claude gesperrt (403), daher ist nichts davon live geprüft.",
  regeln: [
    "Booster: Alarm bei 5 € oder weniger pro Pack",
    "ETB: Alarm bei unter 100 €",
    "Alle Produkte: Alarm bei starkem Preisfall innerhalb weniger Tage",
    "Neue Produkte und Pokémon-Center-Vorbestellungen: immer"
  ],
  funde: [
    {
      datum: "2026-10-23",
      kategorie: "Angebot",
      titel: "Super-Premium-Kollektion Prismatische Entwicklungen (Amazon.de)",
      preis: "104,99 € (statt 169,99 €)",
      status: "nur per Amazon-Einladung, nicht frei kaufbar",
      alarm: "keiner",
      geprueft: false,
      link: "https://www.mydealz.de/gruppe/pokemon",
      notiz: "Wäre rechnerisch -38 %, aber nur mit Einladung. Daher keine Meldung."
    },
    {
      datum: "2026-10-23",
      kategorie: "Angebot",
      titel: "Boosterbundle Mega-Entwicklung Erhabene Helden (6 Packs, Amazon.de)",
      preis: "unbekannt",
      status: "nur per Amazon-Einladung, nicht frei kaufbar",
      alarm: "keiner",
      geprueft: false,
      link: "https://www.mydealz.de/deals/pokemon-boosterbundle-mega-entwicklung-erhabene-helden-2855699",
      notiz: "Nicht frei online kaufbar, daher keine Meldung."
    },
    {
      datum: "2026-10-23",
      kategorie: "Pokémon Center DE",
      titel: "Delta Reign: Pokémon-Center-ETB (11 Packs + Kyogre-Promo)",
      preis: "61,99 €",
      status: "Release 06.11.2026, laut einer Quelle bereits ausverkauft",
      alarm: "keiner",
      geprueft: false,
      link: "https://polkastarter.com/blog/delta-reign-preorders-sold-out",
      notiz: "Stand 23.10. 21:14: Polkastarter meldet Vorbestell-Ausverkauf am 30.09. (US-Preise, Zweitmarkt ca. 528 $). Für DE nicht bestätigt, Quellen widersprechen sich. UVP-Preis, kein Schnäppchen."
    },
    {
      datum: "2026-10-23",
      kategorie: "Pokémon Center DE",
      titel: "Display im Pokémon Center DE (Zuordnung unklar: Delta Reign oder Dunkelnacht)",
      preis: "165,99 € + 6 € Versand",
      status: "unklar, ob aktuell vorbestellbar",
      alarm: "keiner",
      geprueft: false,
      link: "https://www.mydealz.de/deals/pokemon-center-pokemon-sammelkartenspiel-boosterbundle-mega-entwicklung-dunkelnacht-6-boosterpacks-o-display-16599-vsk-2857190",
      notiz: "Zwei mydealz-Deals nennen 165,99 €: einer für Delta Herrschaft (Vorbestellung), einer für Dunkelnacht. Welcher aktuell kaufbar ist, ist nicht geprüft."
    },
    {
      datum: "2026-10-23",
      kategorie: "Angebot",
      titel: "Einladung Booster Bundle 30 Jahre (Amazon.de)",
      preis: "29,94 €",
      status: "ungeprüft",
      alarm: "keiner",
      geprueft: false,
      link: "https://www.mydealz.de/gruppe/pokemon",
      notiz: "Packzahl unbekannt, daher Preis pro Booster nicht berechenbar."
    },
    {
      datum: "2026-10-23",
      kategorie: "Angebot",
      titel: "Kaufland: Ewige Rivalen Booster",
      preis: "4,99 € pro Booster",
      status: "Datum unklar, vermutlich nicht mehr aktuell",
      alarm: "keiner",
      geprueft: false,
      link: "https://www.mydealz.de/magazin/kaufland-pokemon-karten-ewige-rivalen-karmesin-purpur-extra-filialen-74414",
      notiz: "Würde die 5-€-Regel erfüllen, wenn aktuell. Nicht bestätigt."
    }
  ]
};
