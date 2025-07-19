import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Lileep",
         ja: "lileep",
         fr: "Lilep",
         de: "Lileep",
         es: "Lileep",
         it: "Lileep",
         pt: "Lileep",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [345],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
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
          damage: 20,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
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
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
