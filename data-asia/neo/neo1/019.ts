import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Magmar",
         ja: "マグマー",
         fr: "Magmar",
         de: "Magmar",
         es: "Magmar",
         it: "Magmar",
         pt: "Magmar",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [126],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Magma Punch",
            ja: "マグマパンチ",
            fr: "Punch de magma",
            de: "Magma Punch",
            es: "Brillo de magma",
            it: "Magma Punch",
            pt: "Punch de magma",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
