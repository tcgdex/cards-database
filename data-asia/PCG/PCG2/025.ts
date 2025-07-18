import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Lotad",
         ja: "lotad",
         fr: "Lotad",
         de: "Lotad",
         es: "Lotad",
         it: "Lotta",
         pt: "Lotad",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [270],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
            en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
            ja: "見ずに相手の手から1枚のカードを1枚選択します。あなたが選んだカードを見てから、相手にそのカードを彼または彼女のデッキにシャッフルさせます。",
            fr: "Choisissez 1 carte dans la main de votre adversaire sans regarder. Regardez la carte que vous avez choisie, puis demandez à votre adversaire de mélanger cette carte dans son deck.",
            de: "Wählen Sie 1 Karte aus der Hand Ihres Gegners, ohne zu schauen. Schauen Sie sich die Karte an, die Sie ausgewählt haben, und lassen Sie Ihren Gegner diese Karte in sein Deck mischen.",
            es: "Elija 1 carta de la mano de tu oponente sin mirar. Mira la carta que eligiste, luego haz que tu oponente mueva esa carta en su mazo.",
            it: "Scegli 1 carta dalla mano del tuo avversario senza guardare. Guarda la carta che hai scelto, quindi il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Escolha 1 cartão da mão do seu oponente sem olhar. Olhe para o cartão que você escolheu e depois peça ao seu oponente embarcar na carta no deck dele ou dela.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
