import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Mareep",
         ja: "Mareep",
         fr: "Marin",
         de: "Mareep",
         es: "Marino",
         it: "Mareep",
         pt: "Marep",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [179],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
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
            en: "Flip a coin. If tails, Mareep does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、Mareepはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Mareep fait 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Wenn Schwänze, schadet Mareep 10 Schaden für sich.",
            es: "Voltea una moneda. Si Tails, Mareep hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Mareep fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se a cauda, Mareep causar 10 danos a si mesmo.",
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
