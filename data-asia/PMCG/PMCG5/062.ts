import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Lt. Surge's Eevee",
         ja: "Surge's Eevee中t",
         fr: "Eevee du lieutenant",
         de: "Lt. Surge's Eevee",
         es: "Eevee del teniente Surge",
         it: "Tenente Eevee di Surge",
         pt: "Eevee do tenente Surge",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [133],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Surprise",
            ja: "驚き",
            fr: "Surprendre",
            de: "Überraschung",
            es: "Sorpresa",
            it: "Sorpresa",
            pt: "Surpresa",
          },
          effect: {
            en: "Look at a random card from your opponent's hand. Your opponent shuffles that card into his or her deck.",
            ja: "相手の手からランダムなカードを見てください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Regardez une carte aléatoire de la main de votre adversaire. Votre adversaire mélange cette carte dans son deck.",
            de: "Schauen Sie sich eine zufällige Karte von der Hand Ihres Gegners an. Dein Gegner mischt diese Karte in sein Deck.",
            es: "Mira una carta aleatoria de la mano de tu oponente. Tu oponente baraja esa carta en su mazo.",
            it: "Guarda una carta casuale dalla mano del tuo avversario. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Veja um cartão aleatório da mão do seu oponente. Seu oponente embaralha essa carta em seu deck.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
