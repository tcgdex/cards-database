import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dratini",
         ja: "ドラチーニ",
         fr: "Dratini",
         de: "Dratini",
         es: "Dratini",
         it: "Dratini",
         pt: "Dratini",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [147],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Shed",
            ja: "小屋",
            fr: "Hangar",
            de: "Baracke",
            es: "Cobertizo",
            it: "Capannone",
            pt: "Cabana",
          },
          effect: {
            en: "Remove 1 damage counter from Dratini.",
            ja: "Dratiniから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de Dratini.",
            de: "Entfernen Sie 1 Schadenschalter von Dratini.",
            es: "Retire 1 contador de daño de Dratini.",
            it: "Rimuovere 1 contatore di danni da Dratini.",
            pt: "Remova 1 contador de danos de Dratini.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Fury Attack",
            ja: "怒り攻撃",
            fr: "Attaque de fureur",
            de: "Wutangriff",
            es: "Ataque de furia",
            it: "Attacco di furia",
            pt: "Ataque de fúria",
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
