import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Poochyena",
         ja: "プーチエナ",
         fr: "Poochyena",
         de: "Poochyena",
         es: "Poochyena",
         it: "Poochyena",
         pt: "Poochyena",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [261],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Shadow Bind",
            ja: "シャドウバインド",
            fr: "Liaison de l'ombre",
            de: "Schattenbindung",
            es: "Sombra Bind",
            it: "Bind ombra",
            pt: "Shadow Bind",
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
