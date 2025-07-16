import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Jynx",
         ja: "ジンクス",
         fr: "Jynx",
         de: "Jynx",
         es: "Jindo",
         it: "Jynx",
         pt: "Jynx",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [124],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
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
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
          damage: None,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Meditate",
            ja: "瞑想します",
            fr: "Méditer",
            de: "Meditieren",
            es: "Meditar",
            it: "Meditare",
            pt: "Meditar",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokemon.",
            ja: "ディフェンディングポケモンの各ダメージカウンターで20のダメージと10ダメージがさらに10件のダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur le Pokémon en défense.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf dem verteidigenden Pokémon.",
            es: "Hace 20 daños más 10 más de daño por cada contador de daños en el Pokémon defensor.",
            it: "Fa 20 danni più 10 danni in più per ciascun contatore del danno sul Pokemon in difesa.",
            pt: "Causa 20 danos mais 10 mais danos para cada contador de danos no Pokémon atual.",
          },
          damage: None,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
