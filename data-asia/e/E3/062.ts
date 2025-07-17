import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Dodrio",
         ja: "ドドリオ",
         fr: "Conjurer",
         de: "Dodrio",
         es: "Ddrio",
         it: "Dodrio",
         pt: "Dodrio",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [85],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tri Attack",
            ja: "トライ攻撃",
            fr: "Trimestre",
            de: "Tri -Angriff",
            es: "Tri de ataque",
            it: "Tri Attack",
            pt: "Tri ataque",
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
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Peck Attack",
            ja: "ペック攻撃",
            fr: "Attaque à picotements",
            de: "Peck -Angriff",
            es: "Ataque de bisagra",
            it: "Attacco di peck",
            pt: "Ataque de Peck",
          },
          effect: {
            en: "Flip 2 coins. If 1 of them is heads, this attack does 20 damage. If both are heads, this attack does 50 damage. If both are tails, the Defending Pokemon is now Confused.",
            ja: "2つのコインをフリップします。それらの1つがヘッドである場合、この攻撃は20のダメージを与えます。両方がヘッドである場合、この攻撃は50のダメージを与えます。両方が尾である場合、防御するポケモンは今混乱しています。",
            fr: "Flip 2 pièces. Si l'un d'entre eux est la tête, cette attaque fait 20 dégâts. Si les deux sont des têtes, cette attaque fait 50 dégâts. Si les deux sont des queues, le Pokémon en défense est maintenant confus.",
            de: "2 Münzen umdrehen. Wenn 1 von ihnen Köpfe sind, verursacht dieser Angriff 20 Schaden. Wenn beide Köpfe sind, verursacht dieser Angriff 50 Schaden. Wenn beide Schwänze sind, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Flip 2 monedas. Si 1 de ellas son cabezas, este ataque hace 20 daños. Si ambos son cabezas, este ataque hace 50 daños. Si ambas son colas, el Pokémon defensor ahora está confundido.",
            it: "Flip 2 monete. Se 1 di loro è testa, questo attacco fa 20 danni. Se entrambi sono teste, questo attacco infligge 50 danni. Se entrambi sono code, il Pokemon in difesa è ora confuso.",
            pt: "Flip 2 moedas. Se 1 deles é cabeças, esse ataque causará 20 danos. Se ambos são cabeças, esse ataque causa 50 danos. Se ambos são caudas, o pokemon atual agora está confuso.",
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
