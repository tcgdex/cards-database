import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp",
         ja: "Magikarp",
         fr: "Magikarp",
         de: "Magikarp",
         es: "Magikarp",
         it: "Magikarp",
         pt: "Magikarp",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Trickle",
            ja: "トリクル",
            fr: "Couler",
            de: "Rinnsal",
            es: "Chorrito",
            it: "Gocciolamento",
            pt: "Escorregadio",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Dragon Rage",
            ja: "ドラゴンレイジ",
            fr: "Rage de dragon",
            de: "Dragon Wut",
            es: "Rabia de dragón",
            it: "Rage del drago",
            pt: "RAGA DA DRAGON",
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
          damage: 50,
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
