import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Onix",
         ja: "onix",
         fr: "Onix",
         de: "Onix",
         es: "Onix",
         it: "Onix",
         pt: "Onix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [95],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Crush",
            ja: "打ち砕く",
            fr: "Écraser",
            de: "Zerquetschen",
            es: "Aplastar",
            it: "Schiacciare",
            pt: "Crush",
          },
          effect: {
            en: "Flip a number of coins equal to the amount of Energy attached to Onix. This attack does 20 damage times the number of heads.",
            ja: "Onixに取り付けられたエネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales à la quantité d'énergie attachée à Onix. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der an ONIX angebrachten Energiemenge entspricht. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual a la cantidad de energía unida a Onix. Este ataque hace 20 veces el número de cabezas.",
            it: "Capolare una serie di monete pari alla quantità di energia collegata a Onix. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma série de moedas iguais à quantidade de energia anexada ao Onix. Este ataque causa 20 danos vezes o número de cabeças.",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
