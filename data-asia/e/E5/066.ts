import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Teddiursa",
         ja: "Teddiursa",
         fr: "Teddiursa",
         de: "Teddiursa",
         es: "Teddiursa",
         it: "Teddiursa",
         pt: "Teddiursa",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [216],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Surprise Attack",
            ja: "奇襲",
            fr: "Attaque surprise",
            de: "Überraschungsangriff",
            es: "Ataque sorpresa",
            it: "Attacco a sorpresa",
            pt: "Ataque surpresa",
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
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "This attack does 10 damage plus 10 more damage for each damage counter on Teddiursa.",
            ja: "この攻撃は、Teddiursaの各ダメージカウンターに対して10ダメージと10ダメージをさらに10回かけます。",
            fr: "Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur Teddiursa.",
            de: "Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Teddiursa.",
            es: "Este ataque hace 10 daños más 10 más de daño por cada contador de daños en TeddiURS.",
            it: "Questo attacco infligge 10 danni più 10 danni per ogni danno su Teddiursa.",
            pt: "Este ataque causa 10 danos mais 10 mais danos para cada contador de danos em Teddiursa.",
          },
        },
      ],

      retreat: 1,

};
