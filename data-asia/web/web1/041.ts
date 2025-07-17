import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Venusaur",
         ja: "暗い金星",
         fr: "Vénusaure noir",
         de: "Dunkle Venusaurier",
         es: "Venusaur Oscuro",
         it: "Venusaur scuro",
         pt: "Venusauro escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [3],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Horrid Pollen",
            ja: "恐ろしい花粉",
            fr: "Pollen horrible",
            de: "Schrecklicher Pollen",
            es: "Polen horrible",
            it: "Polne orribile",
            pt: "Pólen horrível",
          },
          effect: {
            en: "The Defending Pokemon is now randomly Asleep and Poisoned, Confused and Poisoned, or Paralyzed and Poisoned.",
            ja: "防御するポケモンは、ランダムに眠り、毒され、混乱し、毒され、麻痺して毒されています。",
            fr: "Le Pokémon en défense est maintenant endormi et empoisonné, confus et empoisonné, ou paralysé et empoisonné.",
            de: "Das verteidigende Pokémon schläft nun zufällig und vergiftet, verwirrt und vergiftet oder gelähmt und vergiftet.",
            es: "El Pokémon defensor ahora está al azar y envenenado, envenenado, confundido y envenenado, paralizado y envenenado.",
            it: "Il Pokemon in carica è ora addormentato in modo casuale, avvelenato, confuso, avvelenato o paralizzato e avvelenato.",
            pt: "O Pokémon atual agora está dormindo aleatoriamente e envenenado, confuso e envenenado, ou paralisado e envenenado.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

};
