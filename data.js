// Wird vom automatischen Pokémon-Check aktualisiert. Nur diese Datei ändern, index.html bleibt gleich.
window.DASHBOARD = {
  aktualisiert: "2026-10-23 20:16",
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
      status: "vorbestellbar, Release 06.11.2026",
      alarm: "neu",
      geprueft: false,
      link: "https://www.pokebeach.com/forums/threads/%E2%80%9CDelta-Reign%E2%80%9D-preorders-now-live-on-pokemon-center.157070/",
      notiz: "Unter 100 €, aber UVP-Preis. Kein Schnäppchen im engeren Sinn, nur Vorbestellung."
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
      notiz: "Korrektur 23.10. 20:16: Der mydealz-Titel nennt Dunkelnacht (erschienen 17.07.), nicht Delta Reign. Die frühere Zuordnung zu Delta Reign ist nicht belegt."
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
