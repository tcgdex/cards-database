import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Cleffa",
         ja: "クレファ",
         fr: "Cleffa",
         de: "Cleffa",
         es: "Cleffa",
         it: "Cleffa",
         pt: "Cleffa",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [173],
      hp: 30,
      types: ["Colorless"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Recycle",
            ja: "エネルギーリサイクル",
            fr: "Recyclage d'énergie",
            de: "Energierecycling",
            es: "Reciclaje de energía",
            it: "Riciclare energetico",
            pt: "Reciclagem de energia",
          },
          effect: {
            en: "Shuffle a basic Energy card from your discard pile into your deck.",
            ja: "廃棄の山からデッキに基本的なエネルギーカードをシャッフルします。",
            fr: "Mercer une carte d'énergie de base de votre tas de défausse dans votre deck.",
            de: "Mischen Sie eine grundlegende Energiekarte von Ihrem Ablagerungsstapel in Ihr Deck.",
            es: "Arrastra una carta de energía básica de tu pila de descarte en tu mazo.",
            it: "Shuffle una scheda energetica di base dalla tua pila di scarto nel tuo mazzo.",
            pt: "Afaste um cartão de energia básico da sua pilha de descarte no seu baralho.",
          },
        },
      ],

      retreat: 1,

};
