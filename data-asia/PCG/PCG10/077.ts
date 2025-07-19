import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Altaria",
         ja: "アルタリア",
         fr: "Altaria",
         de: "Altaria",
         es: "Altaria",
         it: "Altaria",
         pt: "Altaria",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [334],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Synergy Effect",
            ja: "相乗効果",
            fr: "Effet de synergie",
            de: "Synergieeffekt",
            es: "Efecto sinergia",
            it: "Effetto sinergia",
            pt: "Efeito de sinergia",
          },
          effect: {
            en: "If 72 is in play, remove 1 damage counter from Altaria between turns.",
            ja: "72が再生中の場合は、ターンの間にAltariaから1つのダメージカウンターを取り外します。",
            fr: "Si 72 est en jeu, retirez 1 compteur de dégâts d'Altaria entre les virages.",
            de: "Wenn 72 im Spiel ist, entfernen Sie 1 Schadenschalter aus der Altaria zwischen den Kurven.",
            es: "Si 72 está en juego, elimine 1 contador de daño de las altarias entre giros.",
            it: "Se 72 è in gioco, rimuovi 1 contatore di danni dalle altari tra le curve.",
            pt: "Se 72 estiver em jogo, remova 1 contador de danos de Altaria entre as voltas.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
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
          damage: 30,
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Gust",
            ja: "突風",
            fr: "Rafale",
            de: "Böe",
            es: "Ráfaga",
            it: "Raffica",
            pt: "Rajada",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
