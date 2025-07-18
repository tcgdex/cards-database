import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Clair's Politoed",
         ja: "クレアの政治",
         fr: "Clair's Politoed",
         de: "Clair ist politisch",
         es: "Clair's Politoed",
         it: "Clair è stato politico",
         pt: "Clair está polindo",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [186],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Frog Hop",
            ja: "カエルホップ",
            fr: "Grenouille",
            de: "Frosch Hop",
            es: "Salto de rana",
            it: "Rana hop",
            pt: "Sapo hop",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
