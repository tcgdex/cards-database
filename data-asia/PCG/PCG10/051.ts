import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Anorith",
         ja: "アノリス",
         fr: "Anorith",
         de: "Anorith",
         es: "Anorito",
         it: "Anorito",
         pt: "Anorith",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [347],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Solid Shell",
            ja: "固体シェル",
            fr: "Coque solide",
            de: "Feste Hülle",
            es: "Concha sólida",
            it: "Guscio solido",
            pt: "Concha sólida",
          },
          effect: {
            en: "Any damage done to Anorith by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によってアノリスに与えられた損傷は10倍に減少します（脱力と抵抗を適用した後）。",
            fr: "Tout dommage causé à Anorith par les attaques est réduit de 10 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden, die Anorith durch Angriffe verursacht haben, wird um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño causado a Anorit por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato all'anoritico dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Anorith por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Fury Cutter",
            ja: "フューリーカッター",
            fr: "Coupeur de fureur",
            de: "Wutschneider",
            es: "Cortador de furia",
            it: "Cutter di furia",
            pt: "Cortador de fúria",
          },
          effect: {
            en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 30 more damage. If all of them are heads, this attack does 10 damage plus 50 more damage.",
            ja: "3コインをフリップします。そのうち1人がヘッドである場合、この攻撃は10ダメージに加えて10ダメージを与えます。そのうち2人がヘッドである場合、この攻撃は10ダメージに加えて30ダメージを与えます。それらのすべてがヘッドである場合、この攻撃は10ダメージに加えて50ダメージを与えます。",
            fr: "Flip 3 pièces. Si 1 d'entre eux est la tête, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires. Si 2 d'entre eux sont des têtes, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires. Si tous sont des têtes, cette attaque fait 10 dégâts plus 50 dégâts supplémentaires.",
            de: "3 Münzen umdrehen. Wenn 1 von ihnen Köpfe ist, verursacht dieser Angriff 10 Schaden zuzüglich 10 weiterer Schaden. Wenn 2 von ihnen Köpfe sind, verursacht dieser Angriff 10 Schäden plus 30 weitere Schäden. Wenn alle von ihnen Köpfe sind, verursacht dieser Angriff 10 Schäden plus 50 weitere Schäden.",
            es: "Flip 3 monedas. Si 1 de ellas son cabezas, este ataque hace 10 daños más 10 daños más. Si 2 de ellas son cabezas, este ataque hace 10 daños más 30 más de daño. Si todos son cabezas, este ataque hace 10 daños más 50 más de daño.",
            it: "Flip 3 monete. Se 1 di essi è testa, questo attacco infligge 10 danni più 10 danni. Se 2 di loro sono teste, questo attacco infligge 10 danni più 30 danni. Se tutti sono teste, questo attacco infligge 10 danni più 50 danni.",
            pt: "Flip 3 moedas. Se 1 deles é cabeças, esse ataque causará 10 danos mais 10 danos. Se 2 deles são cabeças, esse ataque causará 10 danos mais mais 30 danos. Se todos eles são cabeças, esse ataque causará 10 danos mais 50 mais danos.",
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
