import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Holon's Electrode",
         ja: "ホロンの電極",
         fr: "Électrode de Holon",
         de: "Holons Elektrode",
         es: "Electrodo de Holón",
         it: "Elettrodo di Holon",
         pt: "Eletrodo de Holon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [101],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Dazzle Blast",
            ja: "眩しい爆発",
            fr: "Explosion d'éblouissement",
            de: "Blende Explosion",
            es: "Explosión deslumbrante",
            it: "Esplosione abbagliante",
            pt: "Dazzle Blast",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
          damage: 30,
        },
      ],


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
