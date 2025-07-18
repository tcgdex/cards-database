import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Pryce's Articuno",
         ja: "プライスのarticuno",
         fr: "Articuno de Pryce",
         de: "Pryces Articuno",
         es: "Articuno de Pryce",
         it: "Articuno di Pryce",
         pt: "Articuno de Pryce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [144],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Icy Wind",
            ja: "氷の風",
            fr: "Vent glacial",
            de: "Eisiger Wind",
            es: "Viento helado",
            it: "Vento ghiacciato",
            pt: "Vento gelado",
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
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
