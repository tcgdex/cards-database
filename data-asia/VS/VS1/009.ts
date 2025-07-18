import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bugsy's Beedrill",
         ja: "BugsyのBeedrill",
         fr: "Bugsy's Beedrill",
         de: "Bugsy's Beedrill",
         es: "Bugsy's Beedrill",
         it: "Bugsy's Beedrill",
         pt: "Bugsy's Beedrill",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [15],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
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
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Twineedle",
            ja: "Twineedle",
            fr: "Fidèle",
            de: "Schnurren",
            es: "Twineedle",
            it: "Spago",
            pt: "BURADO",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
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
