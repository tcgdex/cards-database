import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Remoraid",
         ja: "REMORAID",
         fr: "Remoraid",
         de: "Remoraid",
         es: "Remorada",
         it: "Rimorso",
         pt: "Remoraid",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [223],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Fury Strikes",
            ja: "フューリーストライク",
            fr: "Fury frappe",
            de: "Wutschläge",
            es: "Huelgas de furia",
            it: "Colpi di furia",
            pt: "Fury atinge",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
