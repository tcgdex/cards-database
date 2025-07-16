import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Kangaskhan",
         ja: "カンガスハン",
         fr: "Kangaskhan",
         de: "Kangaskhan",
         es: "Kangaskhan",
         it: "Kangaskhan",
         pt: "Kangaskhan",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [115],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fetch",
            ja: "フェッチ",
            fr: "Aller chercher",
            de: "Bringen",
            es: "Buscar",
            it: "Andare a prendere",
            pt: "Buscar",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
          damage: None,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Comet Punch",
            ja: "彗星パンチ",
            fr: "Punch de comète",
            de: "Komet Punch",
            es: "Cometa",
            it: "Punch di comete",
            pt: "Cometa Punch",
          },
          effect: {
            en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
            ja: "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 4 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 4 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 4 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
          damage: None,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
