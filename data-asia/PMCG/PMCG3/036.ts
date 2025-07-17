import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Sandslash",
         ja: "サンドスラッシュ",
         fr: "Sable",
         de: "Sandslash",
         es: "Sarnslash",
         it: "Sandslash",
         pt: "Sandshlash",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [28],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
          },
          effect: {
            en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },

        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
