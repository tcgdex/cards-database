import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Duskull",
         ja: "duskull",
         fr: "Saillie",
         de: "Dämmerung",
         es: "Engaño",
         it: "Duskull",
         pt: "Duskull",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [355],
      hp: 40,
      types: ["Psychic"],
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
            en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
            ja: "見ずに相手の手から1枚のカードを1枚選択します。あなたが選んだカードを見てから、相手にそのカードを彼または彼女のデッキにシャッフルさせます。",
            fr: "Choisissez 1 carte dans la main de votre adversaire sans regarder. Regardez la carte que vous avez choisie, puis demandez à votre adversaire de mélanger cette carte dans son deck.",
            de: "Wählen Sie 1 Karte aus der Hand Ihres Gegners, ohne zu schauen. Schauen Sie sich die Karte an, die Sie ausgewählt haben, und lassen Sie Ihren Gegner diese Karte in sein Deck mischen.",
            es: "Elija 1 carta de la mano de tu oponente sin mirar. Mira la carta que eligiste, luego haz que tu oponente mueva esa carta en su mazo.",
            it: "Scegli 1 carta dalla mano del tuo avversario senza guardare. Guarda la carta che hai scelto, quindi il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Escolha 1 cartão da mão do seu oponente sem olhar. Olhe para o cartão que você escolheu e depois peça ao seu oponente embarcar na carta no deck dele ou dela.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
