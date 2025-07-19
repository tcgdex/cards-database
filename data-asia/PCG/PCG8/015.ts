import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Numel",
         ja: "numel",
         fr: "Numel",
         de: "Numel",
         es: "Numelismo",
         it: "Numel",
         pt: "Numel",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [322],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Numel does 10 damage to itself.",
            ja: "Numelはそれ自体に10ダメージを与えます。",
            fr: "Numel fait 10 dégâts à lui-même.",
            de: "Numel schädigt sich 10.",
            es: "Numel hace 10 daños a sí mismo.",
            it: "Numel fa 10 danni a se stesso.",
            pt: "Numel causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
