import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Caterpie",
         ja: "キャタピー",
         fr: "Chenille",
         de: "Caterpie",
         es: "Orugada",
         it: "Caterpia",
         pt: "Caterpie",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [10],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spin Tackle",
            ja: "スピンタックル",
            fr: "Tacle de rotation",
            de: "Spin -Tackle",
            es: "Giratel",
            it: "Attrezzatura di spin",
            pt: "Tackle de rotação",
          },
          effect: {
            en: "Caterpie does 10 damage to itself.",
            ja: "Caterpieはそれ自体に10ダメージを与えます。",
            fr: "Caterpie lui fait 10 dégâts.",
            de: "Caterpie schädigt sich 10.",
            es: "Caterpie hace 10 daños a sí mismo.",
            it: "Caterpie fa 10 danni a se stesso.",
            pt: "Caterpie causa 10 danos a si mesmo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
