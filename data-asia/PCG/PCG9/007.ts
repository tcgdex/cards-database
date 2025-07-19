import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Ekans (Delta Species)",
         ja: "エカン（デルタ種）",
         fr: "Ekans (espèces delta)",
         de: "Ekans (Delta -Arten)",
         es: "Ekans (especie delta)",
         it: "Ekans (Delta Species)",
         pt: "Ekans (espécies Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [23],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Tail Snap",
            ja: "テールスナップ",
            fr: "Snap de la queue",
            de: "Schwanzschnapp",
            es: "Chasquido",
            it: "Scatto di coda",
            pt: "Tail Snap",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
