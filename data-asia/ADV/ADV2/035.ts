import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Trapinch",
         ja: "トラピンチ",
         fr: "Piétiner",
         de: "Trapinch",
         es: "Trapinch",
         it: "Trapinch",
         pt: "Trapinch",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [328],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
            en: "The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Irongrip",
            ja: "Irongrip",
            fr: "Irongrip",
            de: "IRONGRIP",
            es: "Irongrip",
            it: "Irongrip",
            pt: "Irongrip",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
