import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Rhydon - 055/088",
         ja: "Rhydon -055/088",
         fr: "Rhydon - 055/088",
         de: "Rhydon - 055/088",
         es: "Rhydon - 055/088",
         it: "Rhydon - 055/088",
         pt: "Rhydon - 055/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [112],
      hp: 90,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Stomp",
            ja: "踏みつけ",
            fr: "Piétiner",
            de: "Stomp",
            es: "Pisar muy fuerte",
            it: "Stomp",
            pt: "Stomp",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos.",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Giant Tail",
            ja: "巨大な尾",
            fr: "Queue géante",
            de: "Riesenschwanz",
            es: "Cola gigante",
            it: "Coda gigante",
            pt: "Tail gigante",
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
          damage: 100,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
