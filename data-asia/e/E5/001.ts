import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Weedle - 001/088",
         ja: "雑草-001/088",
         fr: "Weedle - 001/088",
         de: "Unkraut - 001/088",
         es: "Weedle - 001/088",
         it: "Weedle - 001/088",
         pt: "Weedle - 001/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [13],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Fury Attack",
            ja: "怒り攻撃",
            fr: "Attaque de fureur",
            de: "Wutangriff",
            es: "Ataque de furia",
            it: "Attacco di furia",
            pt: "Ataque de fúria",
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

      retreat: 1,

};
