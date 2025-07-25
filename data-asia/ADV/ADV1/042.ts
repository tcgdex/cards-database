import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Vigoroth",
         ja: "vigoroth",
         fr: "Vigoroth",
         de: "Vigoroth",
         es: "Vigoroso",
         it: "Vigoroth",
         pt: "Vigoroth",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [288],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Does 20 damage plus 10 more damage for each damage counter on Vigoroth.",
            ja: "vigorothのダメージカウンターごとに20のダメージと10のダメージがさらに10件のダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Vigoroth.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Vigoroth.",
            es: "Hace 20 daños más 10 más de daño por cada mostrador de daño en vigoroth.",
            it: "Fa 20 danni più 10 danni in più per ciascun contatore di danni su Vigoroth.",
            pt: "Causa 20 danos mais 10 mais danos para cada contador de danos no vigoroth.",
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
          stamp: ["1st edition"],
        },
      ],
};
