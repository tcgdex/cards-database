import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Sneasel",
         ja: "スニーエル",
         fr: "Snasse",
         de: "Schnäppchen",
         es: "Sisas",
         it: "Sneasel",
         pt: "Sneasel",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [215],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fury Swipes",
            ja: "フューリースワイプ",
            fr: "Fureur glissa",
            de: "Wut wischt",
            es: "Furia golpea",
            it: "Fury Swipes",
            pt: "Fury Swipes",
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
          cost: ["Darkness", "Darkness"],
          name: {
            en: "Beat Up",
            ja: "beatります",
            fr: "Tabasser",
            de: "Verprügeln",
            es: "Batir",
            it: "Picchiato",
            pt: "Bate",
          },
          effect: {
            en: "Flip a coin for each of your Pokemon in play (including this one). This attack does 20 damage times the number of heads.",
            ja: "プレイ中のポケモンごとにコインをひっくり返します（これを含む）。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez une pièce pour chacun de vos Pokémon en jeu (y compris celui-ci). Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze für jedes Ihrer Pokémon im Spiel (einschließlich dieses). Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una moneda para cada uno de sus Pokémon en juego (incluido este). Este ataque hace 20 veces el número de cabezas.",
            it: "Capovolgi una moneta per ciascuno dei tuoi Pokemon in gioco (incluso questo). Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma moeda para cada um dos seus Pokémon em jogo (incluindo este). Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
