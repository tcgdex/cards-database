import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Seadra (Delta Species)",
         ja: "シードラ（デルタ種）",
         fr: "Seadra (espèces delta)",
         de: "Seadra (Delta -Arten)",
         es: "Seadra (especie delta)",
         it: "Seadra (Delta Species)",
         pt: "Seadra (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [117],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Searing Flame",
            ja: "炎を焼きます",
            fr: "Flamme brûlante",
            de: "Brennende Flamme",
            es: "Llama abrasadora",
            it: "Fiamma bruciante",
            pt: "Chama queimando",
          },
          effect: {
            en: "The Defending Pokemon is now Burned.",
            ja: "防御ポケモンは現在燃やされています。",
            fr: "Le Pokémon en défense est maintenant brûlé.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt.",
            es: "El Pokémon defensor ahora está quemado.",
            it: "Il Pokemon in carica viene ora bruciato.",
            pt: "O Pokémon atual agora está queimado.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Combustion",
            ja: "燃焼",
            fr: "Combustion",
            de: "Verbrennung",
            es: "Combustión",
            it: "Combustione",
            pt: "Combustão",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
