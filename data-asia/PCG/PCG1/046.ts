import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Gastly",
         ja: "ガストリー",
         fr: "Vigoureux",
         de: "Gastly",
         es: "Duende",
         it: "Gastly",
         pt: "Gastly",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [92],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slow Trip Gas",
            ja: "遅いトリップガス",
            fr: "Gas de voyage lent",
            de: "Langsames Ausflugsgas",
            es: "Gas de viaje lento",
            it: "Gas di viaggio lento",
            pt: "Gas de viagem lenta",
          },
          effect: {
            en: "At the end of your opponent's next turn, the Defending Pokemon is now Confused.",
            ja: "対戦相手の次のターンの終わりに、ディフェンディングポケモンは混乱しています。",
            fr: "À la fin du prochain tour de votre adversaire, le Pokémon en défense est maintenant confus.",
            de: "Am Ende der nächsten Runde Ihres Gegners ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Al final del próximo turno de tu oponente, el Pokémon defensor ahora está confundido.",
            it: "Alla fine del prossimo turno del tuo avversario, il Pokemon in carica è ora confuso.",
            pt: "No final do próximo turno do seu oponente, o Pokémon atual está agora confuso.",
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
