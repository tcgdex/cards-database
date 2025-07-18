import {Card} from "../../../interfaces"
import Set from "../PMCG4"

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
          cost: ["Grass"],
          name: {
            en: "Sleep Powder",
            ja: "スリープパウダー",
            fr: "Poudre de sommeil",
            de: "Schlafpulver",
            es: "Polvo de sueño",
            it: "Polvere di sonno",
            pt: "Sono Powder",
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
        },
        {
          cost: ["Grass"],
          name: {
            en: "Poisonpowder",
            ja: "毒パウダー",
            fr: "Poudre empoisonnée",
            de: "Giftpulver",
            es: "Pozal de veneno",
            it: "Velenco",
            pt: "Poisonpowder",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
