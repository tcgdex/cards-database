import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Gloom (Delta Species)",
         ja: "暗がり（デルタ種）",
         fr: "Trish (espèce delta)",
         de: "Dunkelheit (Delta -Arten)",
         es: "Penumbra (especie delta)",
         it: "Gloom (specie delta)",
         pt: "Melancolia (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [44],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Drool",
            ja: "よだれ",
            fr: "Baver",
            de: "Sabbern",
            es: "Babear",
            it: "Sbavare",
            pt: "Baba",
          },
          damage: 20,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Acid",
            ja: "酸",
            fr: "Acide",
            de: "Säure",
            es: "Ácido",
            it: "Acido",
            pt: "Ácido",
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
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
