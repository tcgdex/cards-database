import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Koffing",
         ja: "Koffing",
         fr: "Koffing",
         de: "Koffing",
         es: "Koffing",
         it: "Koffing",
         pt: "Koffing",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [109],
      hp: 50,
      types: ["Grass"],
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
          cost: ["Grass", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Koffing does 10 damage to itself.",
            ja: "Koffingはそれ自体に10ダメージを与えます。",
            fr: "Koffing fait 10 dégâts à lui-même.",
            de: "Koffing schädigt sich 10.",
            es: "Koffing hace 10 daños a sí mismo.",
            it: "Koffing fa 10 danni a se stesso.",
            pt: "Koffing causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
