import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Charizard",
         ja: "カリザード",
         fr: "Charizard",
         de: "Charizard",
         es: "Charizard",
         it: "Charizard",
         pt: "Charizard",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [6],
      hp: 120,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Combustion",
            ja: "燃焼",
            fr: "Combustion",
            de: "Verbrennung",
            es: "Combustión",
            it: "Combustione",
            pt: "Combustão",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Bursting Inferno",
            ja: "破裂してインフェルノ",
            fr: "Éclatant Inferno",
            de: "Inferno platzen",
            es: "Burning Inferno",
            it: "Scoppiare l'inferno",
            pt: "Estourando inferno",
          },
          effect: {
            en: "Each Defending Pokemon is now Burned.",
            ja: "防御するポケモンはそれぞれ燃えています。",
            fr: "Chaque Pokémon défendant est maintenant brûlé.",
            de: "Jedes verteidigende Pokémon ist jetzt verbrannt.",
            es: "Cada Pokémon defensor ahora está quemado.",
            it: "Ogni Pokemon in difesa è ora bruciato.",
            pt: "Cada Pokemon defensor agora está queimado.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
