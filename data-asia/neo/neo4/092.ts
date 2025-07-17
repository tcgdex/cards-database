import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Chansey",
         ja: "チャンジー",
         fr: "Chansey",
         de: "Chansey",
         es: "Chansey",
         it: "Chansey",
         pt: "Chansey",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [113],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Egg Toss",
            ja: "卵のトス",
            fr: "Lancer des œufs",
            de: "Eiwurf",
            es: "Revolver el huevo",
            it: "Lancio di uova",
            pt: "Lançamento de ovo",
          },
          effect: {
            en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
            ja: "2つのコインをフリップします。どちらかが尾の場合、この攻撃は何もしません。",
            fr: "Flip 2 pièces. Si l'un ou l'autre est la queue, cette attaque ne fait rien.",
            de: "2 Münzen umdrehen. Wenn einer von ihnen Schwänze ist, tut dieser Angriff nichts.",
            es: "Flip 2 monedas. Si cualquiera de ellos es Tails, este ataque no hace nada.",
            it: "Flip 2 monete. Se uno di essi è coda, questo attacco non fa nulla.",
            pt: "Flip 2 moedas. Se qualquer um deles for cauda, esse ataque não faz nada.",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
