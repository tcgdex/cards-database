import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Flaaffy",
         ja: "フラフィー",
         fr: "Flaaffy",
         de: "Flaaffy",
         es: "Flafy",
         it: "Flaaffy",
         pt: "Flaaffy",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [180],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
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
            en: "Flip a coin. If tails, Flaaffy does 20 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、Flaaffyはそれ自体に20のダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Flaaffy se fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, verursacht Flaaffy 20 Schäden an sich.",
            es: "Voltea una moneda. Si Tails, Flaaffy hace 20 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Flaaffy fa 20 danni a se stesso.",
            pt: "Vire uma moeda. Se caudas, Flaaffy causa 20 danos a si mesmo.",
          },
          damage: 50,
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
