import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Snorunt",
         ja: "いびき",
         fr: "Snorunt",
         de: "SCHRORUNT",
         es: "Ronquido",
         it: "Snorunt",
         pt: "Snorunt",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [361],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Powder Snow",
            ja: "パウダースノー",
            fr: "Neige de poudre",
            de: "Pulverschnee",
            es: "Nieve en polvo",
            it: "Neve in polvere",
            pt: "Neve em pó",
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
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
