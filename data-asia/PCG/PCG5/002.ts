import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Weepinbell",
         ja: "weepinbell",
         fr: "Weepinbell",
         de: "Weepinbell",
         es: "Llanura",
         it: "Weepinbell",
         pt: "Weepinbell",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [70],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Vine Whip",
            ja: "つる鞭",
            fr: "Fouet de vigne",
            de: "Rebepeitsche",
            es: "Vine látigo",
            it: "Whip di vite",
            pt: "Vine Whip",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
