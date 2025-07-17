import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Sandshrew",
         ja: "ブロックのサンドリュー",
         fr: "Sandswrew de Brock",
         de: "Brocks Sandschreiber",
         es: "Sandshrew de Brock",
         it: "Brock's Sandshrew",
         pt: "Brock's Sandshrew",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [27],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Sand Pit",
            ja: "砂ピット",
            fr: "Puits de sable",
            de: "Sandgrube",
            es: "Fosa de arena",
            it: "Fossa di sabbia",
            pt: "Poço de areia",
          },
          effect: {
            en: "The Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon kann sich während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "El Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "O Pokémon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 20,
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
