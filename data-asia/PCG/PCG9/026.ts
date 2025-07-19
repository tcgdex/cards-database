import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Feraligatr (Delta Species)",
         ja: "feraligatr（デルタ種）",
         fr: "Feraligatr (espèces delta)",
         de: "Feraligatr (Delta -Arten)",
         es: "Feraligatr (especie delta)",
         it: "Feraligatr (Delta Species)",
         pt: "Feraligatr (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 120,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Battle Aura",
            ja: "戦いオーラ",
            fr: "Aura de combat",
            de: "Kampf Aura",
            es: "Aura de batalla",
            it: "Battle Aura",
            pt: "Batalha aura",
          },
          effect: {
            en: "Each of your PokÃ©mon that has  on its card does 10 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "カード上にあるPokã©Monはそれぞれ、防御するPokã©Monに10個のダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Chacun de votre poké mon qui a sur sa carte fait 10 dommages supplémentaires au Poké en défense (avant d'appliquer la faiblesse et la résistance).",
            de: "Jedes Ihrer Poké Mon, der auf seiner Karte enthält, schädigt den verteidigenden Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Cada uno de sus Poké Mon que tiene en su tarjeta hace 10 daños más al Poké Mon defensor (antes de aplicar la debilidad y la resistencia).",
            it: "Ognuno dei tuoi poké che ha sulla sua carta fa altri 10 danni al poké mon (prima di applicare la debolezza e la resistenza).",
            pt: "Cada um dos seus Poké, que tem em seu cartão, causa mais 10 danos ao poké -mon (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with 1 of the Defending Pokemon. Your opponent chooses the Defending Pokemon to switch.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire et le changer avec 1 des Pokémon en défense. Votre adversaire choisit le Pokémon en défense pour changer.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners auswählen und es mit 1 des verteidigenden Pokémon schalten. Ihr Gegner wählt das verteidigende Pokemon zum Wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con 1 del Pokémon defensor. Tu oponente elige el Pokémon defensor para cambiar.",
            it: "Prima di fare danni, puoi scegliere 1 del Pokemon in panchina del tuo avversario e cambiarlo con 1 dei Pokemon in difesa. Il tuo avversario sceglie il Pokemon in carica da cambiare.",
            pt: "Antes de causar danos, você pode escolher 1 dos Pokémon com bancada do seu oponente e trocá -lo com 1 dos Pokémon defensores. Seu oponente escolhe o pokemon defensor para mudar.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Sharp Fang",
            ja: "鋭い牙",
            fr: "Croc pointu",
            de: "Scharfer Fang",
            es: "Colmillo afilado",
            it: "Fang affilato",
            pt: "Fang afiado",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
