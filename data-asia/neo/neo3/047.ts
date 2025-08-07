import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Aipom",
         ja: "aipom",
         fr: "Aipom",
         de: "Aipom",
         es: "Aipom",
         it: "Aipom",
         pt: "AIPOM",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [190],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Grab",
            ja: "掴む",
            fr: "Saisir",
            de: "Greifen",
            es: "Agarrar",
            it: "Preda",
            pt: "Pegar",
          },
          effect: {
            en: "Choose a Trainer card attached to 1 of your opponent's Pokemon. Your opponent shuffles that card into his or her deck.",
            ja: "対戦相手のポケモンの1つに添付されたトレーナーカードを選択します。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Choisissez une carte d'entraînement attachée à 1 des Pokémon de votre adversaire. Votre adversaire mélange cette carte dans son deck.",
            de: "Wählen Sie eine Trainerkarte, die an 1 des Pokémon Ihres Gegners angeschlossen ist. Dein Gegner mischt diese Karte in sein Deck.",
            es: "Elija una tarjeta de entrenador adjunta a 1 de los Pokémon de tu oponente. Tu oponente baraja esa carta en su mazo.",
            it: "Scegli una carta dell'allenatore collegata a 1 del Pokemon del tuo avversario. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Escolha um cartão de treinador anexado a um dos Pokémon do seu oponente. Seu oponente embaralha essa carta em seu deck.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Punch",
            ja: "テールパンチ",
            fr: "Coup de poing",
            de: "Schwanzschlag",
            es: "Cola",
            it: "Punch di coda",
            pt: "Punchado da cauda",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
