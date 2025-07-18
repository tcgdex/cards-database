import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Chuck's Tauros",
         ja: "チャックのタウロス",
         fr: "Tauros de Chuck",
         de: "Chucks Tauros",
         es: "Tauros de Chuck",
         it: "Chuck's Tauros",
         pt: "Tauros de Chuck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [128],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Chuck's Tauros does 20 damage to itself.",
            ja: "チャックのタウロスはそれ自体に20のダメージを与えます。",
            fr: "Le Tauros de Chuck se fait 20 dégâts.",
            de: "Chucks Tauros schädigt sich 20.",
            es: "Tauros de Chuck hace 20 daños a sí mismo.",
            it: "Il Tauros di Chuck fa 20 danni a se stesso.",
            pt: "Tauros de Chuck causa 20 danos a si mesmo.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

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
