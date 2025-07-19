import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Duskull",
         ja: "duskull",
         fr: "Saillie",
         de: "Dämmerung",
         es: "Engaño",
         it: "Duskull",
         pt: "Duskull",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [355],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Collect",
            ja: "集める",
            fr: "Collecter",
            de: "Sammeln",
            es: "Recolectar",
            it: "Raccogliere",
            pt: "Coletar",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Super Psy Bolt",
            ja: "スーパーPSYボルト",
            fr: "Boulon super psy",
            de: "Super Psy Bolt",
            es: "Super Psy Bolt",
            it: "Super Psy Bolt",
            pt: "Super Psy Bolt",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
