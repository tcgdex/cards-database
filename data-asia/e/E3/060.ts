import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Pupitar",
         ja: "Pupitar",
         fr: "Norme",
         de: "Pupitar",
         es: "Pupitar",
         it: "PUPITAR",
         pt: "Filhote",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [247],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Thrash",
            ja: "スラッシュ",
            fr: "Débattre",
            de: "Thrash",
            es: "Movimiento de piernas",
            it: "Thrash",
            pt: "Thrash",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Pupitar does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。尾の場合、Pupitarはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires. Si Tails, Pupitar fait 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht Pupitar 10 Schaden für sich.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño. Si Tails, Pupitar hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 altri danni. Se le code, Pupitar fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos. Se a cauda, o pupitar causar 10 danos a si mesmo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
