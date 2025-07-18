import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Bellossom",
         ja: "エリカのベロッソム",
         fr: "Bellossom d'Erika",
         de: "Erikas Bellossom",
         es: "Erika's Blossom",
         it: "Il bellossom di Erika",
         pt: "Bellossom de Erika",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [182],
      hp: 70,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Flower Cutter",
            ja: "フラワーカッター",
            fr: "Coupe-fleurs",
            de: "Blumenschneider",
            es: "Cortador de flores",
            it: "Cutter di fiori",
            pt: "Cortador de flores",
          },
          effect: {
            en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 3 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

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
