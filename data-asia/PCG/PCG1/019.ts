import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Scyther",
         ja: "スキスター",
         fr: "Scyther",
         de: "Scyther",
         es: "Esciteta",
         it: "Scither",
         pt: "Scyther",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [123],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Leaf Ride",
            ja: "リーフライド",
            fr: "Promenade en feuille",
            de: "Blattfahrt",
            es: "Paseo en la hoja",
            it: "Cavalcatura",
            pt: "Passeio de folha",
          },
          effect: {
            en: "If Scyther has any Energy attached to it, Scyther's Retreat Cost is 0.",
            ja: "Scytherにエネルギーが付着している場合、Scytherのリトリートコストは0です。",
            fr: "Si Scyther a une énergie attachée, le coût de retraite de Scyther est de 0.",
            de: "Wenn Scyther eine Energie damit verbunden hat, beträgt der Rückzugskosten von Scyther 0 0.",
            es: "Si Scyther tiene alguna energía adjunta, el costo de retiro de Scyther es 0.",
            it: "Se Scither ha energia ad esso collegata, il costo di ritiro di Scither è 0.",
            pt: "Se o Scyther tiver alguma energia anexada a ela, o custo do retiro do Scyther é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Fury Cutter",
            ja: "フューリーカッター",
            fr: "Coupeur de fureur",
            de: "Wutschneider",
            es: "Cortador de furia",
            it: "Cutter di furia",
            pt: "Cortador de fúria",
          },
          effect: {
            en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
            ja: "3コインをフリップします。そのうち1人がヘッドである場合、この攻撃は10ダメージに加えて10ダメージを与えます。そのうち2人がヘッドである場合、この攻撃は10ダメージに加えて20ダメージを与えます。それらのすべてがヘッドである場合、この攻撃は10ダメージに加えて40ダメージを与えます。",
            fr: "Flip 3 pièces. Si 1 d'entre eux est la tête, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires. Si 2 d'entre eux sont des têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires. Si tous sont des têtes, cette attaque fait 10 dégâts plus 40 dégâts supplémentaires.",
            de: "3 Münzen umdrehen. Wenn 1 von ihnen Köpfe ist, verursacht dieser Angriff 10 Schaden zuzüglich 10 weiterer Schaden. Wenn 2 von ihnen Köpfe sind, verursacht dieser Angriff 10 Schaden zuzüglich 20 weitere Schäden. Wenn alle von ihnen Köpfe sind, verursacht dieser Angriff 10 Schäden plus 40 weitere Schäden.",
            es: "Flip 3 monedas. Si 1 de ellas son cabezas, este ataque hace 10 daños más 10 daños más. Si 2 de ellas son cabezas, este ataque hace 10 daños más 20 más de daño. Si todos son cabezas, este ataque hace 10 daños más 40 daños más.",
            it: "Flip 3 monete. Se 1 di essi è testa, questo attacco infligge 10 danni più 10 danni. Se 2 di loro sono teste, questo attacco infligge 10 danni più 20 danni. Se tutti sono teste, questo attacco infligge 10 danni più 40 danni.",
            pt: "Flip 3 moedas. Se 1 deles é cabeças, esse ataque causará 10 danos mais 10 danos. Se 2 deles são cabeças, esse ataque causará 10 danos mais 20 mais danos. Se todos eles são cabeças, esse ataque causará 10 danos mais 40 mais danos.",
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
