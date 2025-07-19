import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Ralts",
         ja: "ラルト",
         fr: "Rals",
         de: "Ralts",
         es: "Ralts",
         it: "Ralti",
         pt: "Ralts",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [280],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slap",
            ja: "平手打ち",
            fr: "Gifler",
            de: "Schlagen",
            es: "Bofetada",
            it: "Schiaffo",
            pt: "Tapa",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Teleportation Burst",
            ja: "テレポーテーションバースト",
            fr: "Éclatement de téléportation",
            de: "Teleportation platzt",
            es: "Estallido de teletransportación",
            it: "Scoppio di teletrasporto",
            pt: "Explosão de teletransporte",
          },
          effect: {
            en: "Switch Ralts with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンの1つでラルトを切り替えます。",
            fr: "Communiquez des Ralts avec 1 de votre Pokémon banc.",
            de: "Wechseln Sie die RALTS mit 1 Ihres Bankpokémons.",
            es: "Cambie los RALT con 1 de su Pokémon de banca.",
            it: "Cambia i raggi con 1 del tuo Pokemon in panchina.",
            pt: "Mudar os ralts com 1 do seu Pokémon em banco.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
