import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Tauros",
         ja: "タウロス",
         fr: "Tauros",
         de: "Tauros",
         es: "Tauros",
         it: "Tauros",
         pt: "Tauros",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [128],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Horn Hazard",
            ja: "ホーンハザード",
            fr: "Danger de corne",
            de: "Horngefahr",
            es: "Peligro de bocina",
            it: "Pericolo di corno",
            pt: "Perigo da buzina",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 30,
        },
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
            en: "Tauros does 20 damage to itself.",
            ja: "タウロスはそれ自体に20のダメージを与えます。",
            fr: "Tauros se fait 20 dégâts.",
            de: "Tauros schädigt sich 20.",
            es: "Tauros hace 20 daños a sí mismo.",
            it: "Tauros fa 20 danni a se stesso.",
            pt: "Tauros causa 20 danos a si mesmo.",
          },
          damage: 30,
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
