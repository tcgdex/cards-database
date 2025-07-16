import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pikachu",
         ja: "ピカチュウ",
         fr: "Pikachu",
         de: "Pikachu",
         es: "Pikachu",
         it: "Pikachu",
         pt: "Pikachu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [25],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Gnaw",
            ja: "gnaw",
            fr: "Ronger",
            de: "Nagen",
            es: "Roer",
            it: "Rosicchiare",
            pt: "Roer",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Thunder Jolt",
            ja: "サンダージョルト",
            fr: "Secousse du tonnerre",
            de: "Donnerstumpf",
            es: "Trueno",
            it: "Thunder Jolt",
            pt: "Trovão",
          },
          effect: {
            en: "Flip a coin. If tails, this Pokemon also does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、このポケモンはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, ce Pokémon fait également 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht dieses Pokémon auch 10 Schäden an sich.",
            es: "Voltea una moneda. Si Tails, este Pokémon también hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, questo Pokemon infligge anche 10 danni a se stesso.",
            pt: "Vire uma moeda. Se caudas, este Pokémon também causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
