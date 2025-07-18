import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Corphish",
         ja: "コーフィッシュ",
         fr: "Corphish",
         de: "Korph",
         es: "De carnero",
         it: "Corphish",
         pt: "Corphish",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [341],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Exoskeleton",
            ja: "外骨格",
            fr: "Exosquelette",
            de: "Exoskelett",
            es: "Exoesqueleto",
            it: "Esoscheletro",
            pt: "Exoesqueleto",
          },
          effect: {
            en: "Any damage done to Corphish by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "攻撃によるコーフィッシュに与えられた損害は、衰弱と抵抗を適用した後）10増加します。",
            fr: "Tout dommage causé à Corphish par les attaques est réduit de 10 (après application de faiblesse et de résistance).",
            de: "Alle Schäden, die durch Angriffe an Corphish angerichtet wurden, wird um 10 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño causado a Corfish por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Corphish dagli attacchi è ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado ao Corphish por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Double Chop",
            ja: "ダブルチョップ",
            fr: "Hacher",
            de: "Double Chop",
            es: "Picar doble",
            it: "Double Chop",
            pt: "Costeleta dupla",
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
