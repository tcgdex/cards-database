import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Geodude (Lv.15)",
         ja: "ブロックのジオドード（LV.15）",
         fr: "Brock's Geodude (LV.15)",
         de: "Brocks Geodude (Lv.15)",
         es: "Geodude de Brock (LV.15)",
         it: "Brock's Geodude (Lv.15)",
         pt: "Geodude de Brock (LV.15)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [74],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Rock Toss",
            ja: "ロックトス",
            fr: "Lancer de roche",
            de: "Felswurf",
            es: "Tirar de roca",
            it: "Lancio di roccia",
            pt: "Lançador de rochas",
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
