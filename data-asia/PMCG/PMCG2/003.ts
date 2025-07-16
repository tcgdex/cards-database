import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Paras",
         ja: "パラ",
         fr: "Paras",
         de: "Paras",
         es: "Paras",
         it: "Paras",
         pt: "Parágrafos",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [46],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Spore",
            ja: "胞子",
            fr: "Spore",
            de: "Spore",
            es: "Espora",
            it: "Spora",
            pt: "Esporo",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
