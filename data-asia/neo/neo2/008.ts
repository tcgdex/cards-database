import {Card} from "../../../interfaces"
import Set from "../neo2"

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

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [123],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Grass"],
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
            en: "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 is heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads.",
            ja: "4コインをひっくり返します。この攻撃は、正確に1がヘッドの場合は10ダメージに加えて10ダメージを加え、正確に2がヘッドである場合は20ダメージ、または正確に3がヘッドである場合は40ダメージ、4つすべてがヘッドである場合は80ダメージを与えます。",
            fr: "Flip 4 pièces. Cette attaque fait 10 dégâts plus 10 dégâts de plus si exactement 1 est la tête, ou 20 dommages supplémentaires si exactement 2 sont des têtes, ou 40 dégâts de plus si exactement 3 sont des têtes, ou 80 dégâts de plus si les 4 sont les têtes.",
            de: "Flip 4 Münzen. Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden, wenn genau 1 Köpfe sind, oder 20 weitere Schäden, wenn genau 2 Köpfe sind, oder 40 mehr Schaden, wenn genau 3 Köpfe sind, oder 80 mehr Schaden, wenn alle 4 Köpfe sind.",
            es: "Flip 4 monedas. Este ataque hace 10 daños más 10 daños más si exactamente 1 es cabezas, o 20 daños más si exactamente 2 son cabezas, o 40 daños más si exactamente 3 son cabezas, o 80 daños más si las 4 son cabezas.",
            it: "Flip 4 monete. Questo attacco infligge 10 danni più 10 danni in più se esattamente 1 è testa o altri 20 danni se esattamente 2 sono teste o 40 altri danni se esattamente 3 sono teste o 80 altri danni se tutti e 4 sono teste.",
            pt: "Flip 4 moedas. Esse ataque causa 10 danos mais 10 danos se exatamente 1 for cabeças, ou 20 mais danos se exatamente 2 forem cabeças ou 40 mais danos se exatamente 3 forem cabeças, ou 80 mais danos se todos os 4 forem cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
