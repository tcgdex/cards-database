import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Seel",
         ja: "シール",
         fr: "Voile",
         de: "Seel",
         es: "Buhonilla",
         it: "Seel",
         pt: "Seel",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [86],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Seel does 10 damage to itself.",
            ja: "Seelはそれ自体に10ダメージを与えます。",
            fr: "Seel fait 10 dégâts à lui-même.",
            de: "Seel schädigt sich 10.",
            es: "Seel hace 10 daños a sí mismo.",
            it: "Seel fa 10 danni a se stesso.",
            pt: "Seel causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
