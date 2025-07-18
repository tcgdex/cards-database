import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Rhyhorn",
         ja: "ブロックの韻",
         fr: "Rhyhorn de Brock",
         de: "Brocks Rhyhorn",
         es: "Rhyhorn de Brock",
         it: "Rhyhorn di Brock",
         pt: "Rhyhorn de Brock",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [111],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Drill Tackle",
            ja: "ドリルタックル",
            fr: "Tacle de perceuse",
            de: "Drill Tackle",
            es: "Batalla",
            it: "Drat per il trapano",
            pt: "Tackle",
          },
          effect: {
            en: "Flip 2 coins. If 1 or both of them are tails, this attack does nothing.",
            ja: "2つのコインをフリップします。それらの1つまたは両方が尾の場合、この攻撃は何もしません。",
            fr: "Flip 2 pièces. Si 1 ou les deux sont des queues, cette attaque ne fait rien.",
            de: "2 Münzen umdrehen. Wenn 1 oder beide Schwänze sind, tut dieser Angriff nichts.",
            es: "Flip 2 monedas. Si 1 o ambas son colas, este ataque no hace nada.",
            it: "Flip 2 monete. Se 1 o entrambi sono code, questo attacco non fa nulla.",
            pt: "Flip 2 moedas. Se 1 ou ambos são caudas, esse ataque não fará nada.",
          },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
