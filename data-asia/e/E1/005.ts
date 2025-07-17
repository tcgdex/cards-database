import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Oddish",
         ja: "奇妙な",
         fr: "Bizarre",
         de: "Seltsam",
         es: "Extraño",
         it: "Strano",
         pt: "Ímpar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Sleep Seed",
            ja: "睡眠の種",
            fr: "Graine de sommeil",
            de: "Schlafsamen",
            es: "Semilla del sueño",
            it: "Seme di sonno",
            pt: "Semente de sono",
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
