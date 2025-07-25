import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Pineco - 012/088",
         ja: "Pineco -012/088",
         fr: "Pineco - 012/088",
         de: "Pineco - 012/088",
         es: "Pineco - 012/088",
         it: "Pineco - 012/088",
         pt: "Pineco - 012/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [204],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
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
            en: "Pineco does 10 damage to itself.",
            ja: "Pinecoはそれ自体に10ダメージを与えます。",
            fr: "Pineco fait 10 dégâts à lui-même.",
            de: "Pineco schädigt sich 10.",
            es: "Pineco hace 10 daños a sí mismo.",
            it: "Pineco fa 10 danni a se stesso.",
            pt: "Pineco causa 10 danos a si mesmo.",
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
