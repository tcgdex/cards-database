import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Zubat",
         ja: "Zubat",
         fr: "Zubat",
         de: "Zubat",
         es: "Zubat",
         it: "Zubat",
         pt: "Zubat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Quick Turn",
            ja: "クイックターン",
            fr: "Virage rapide",
            de: "Schnelle Kurve",
            es: "Giro rápido",
            it: "Turni rapidi",
            pt: "Virada rápida",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Grass"],
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
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
