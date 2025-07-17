import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Swinub",
         ja: "swinub",
         fr: "Swinub",
         de: "Swinub",
         es: "Swinub",
         it: "Swinub",
         pt: "Swinub",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [220],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
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
            en: "Swinub does 10 damage to itself.",
            ja: "Swinubはそれ自体に10ダメージを与えます。",
            fr: "Swinub fait 10 dégâts à lui-même.",
            de: "Swinub schädigt sich 10.",
            es: "Swinub hace 10 daños a sí mismo.",
            it: "Swinub fa 10 danni a se stesso.",
            pt: "Swinub causa 10 danos a si mesmo.",
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
