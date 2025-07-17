import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Sneasel ex",
         ja: "Sneasel Ex",
         fr: "Sneasel ex",
         de: "Sneasel Ex",
         es: "Sneasel ex",
         it: "Sneasel ex",
         pt: "Sneasel Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [215],
      hp: 80,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
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
          cost: ["Darkness", "Darkness", "Colorless"],
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
            en: "Flip a coin for each of your Pokemon in play (including Sneasel ex). This attack does 20 damage times the number of heads.",
            ja: "プレイ中のポケモンごとにコインをひっくり返します（Sneasel Exを含む）。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez une pièce pour chacun de vos Pokémon en jeu (y compris Sneasel Ex). Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze für jedes Ihrer Pokémon im Spiel (einschließlich Sneasel EX). Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una moneda para cada uno de sus Pokémon en juego (incluido SNEASEL EX). Este ataque hace 20 veces el número de cabezas.",
            it: "Capovolgi una moneta per ciascuno dei tuoi Pokemon in gioco (incluso Sneasel Ex). Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma moeda para cada um dos seus Pokémon em jogo (incluindo Sneasel Ex). Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
