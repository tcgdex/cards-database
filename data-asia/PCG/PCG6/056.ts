import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Groudon Star",
         ja: "グルードンスター",
         fr: "Étoile de Groudon",
         de: "Groudon Star",
         es: "Estrella de Groudon",
         it: "Groudon Star",
         pt: "Estrela de Groudon",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [383],
      hp: 90,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Critical Collection",
            ja: "重要なコレクション",
            fr: "Collection critique",
            de: "Kritische Sammlung",
            es: "Colección crítica",
            it: "Collezione critica",
            pt: "Coleção crítica",
          },
          effect: {
            en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Fighting Energy cards and attach them to Groudon {{Star|this Pokemon}}.",
            ja: "対戦相手が取った賞金の数を数えます。その多くのファイティングエネルギーカードまで廃棄の山を検索し、Groudon {{Star | This Pokemon}}にそれらを取り付けます。",
            fr: "Comptez le nombre de cartes de prix que votre adversaire a prises. Recherchez votre tas de défausse pour autant de cartes d'énergie de combat et attachez-les à Groudon {{Star | ce pokemon}}.",
            de: "Zählen Sie die Anzahl der Preiskarten, die Ihr Gegner gewonnen hat. Suchen Sie Ihren Ablagerungsstapel nach so vielen Kampfenergiekarten und fügen Sie sie an Groudon {{star | dieses Pokemon}} hinzu.",
            es: "Cuente el número de tarjetas de premio que ha tomado su oponente. Busque en su pila de descarte hasta tantas tarjetas de energía de lucha y adjuntelas a Groudon {{Star | This Pokemon}}.",
            it: "Conta il numero di carte premio che il tuo avversario ha preso. Cerca il tuo mucchio di scarti per così tante carte di energia che combattono e allegale a Groudon {{Star | this Pokemon}}.",
            pt: "Conte o número de cartões de prêmios que seu oponente tomou. Pesquise sua pilha de descarte até que muitos cartões de energia de combate e anexe -os a Groudon {{Star | this Pokemon}}.",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Ground Slash",
            ja: "グラウンドスラッシュ",
            fr: "Slash au sol",
            de: "Erdungsschild",
            es: "Barra de tierra",
            it: "Tash di terra",
            pt: "Barra de terra",
          },
          effect: {
            en: "Discard a Fighting Energy card attached to Groudon {{Star|this Pokemon}}.",
            ja: "Groudon {{star | this Pokemon}}に取り付けられたファイティングエネルギーカードを捨てます。",
            fr: "Jeter une carte d'énergie de combat attachée à Groudon {{Star | ce pokemon}}.",
            de: "Verwerfen Sie eine an Groudon {{star | this pokemon}} angehängte Kampfsenergiekarte.",
            es: "Deseche una tarjeta de energía de lucha unida a Groudon {{Star | This Pokemon}}.",
            it: "Scartare una carta energetica di combattimento collegata a Groudon {{star | this Pokemon}}.",
            pt: "Descarte um cartão de energia de combate anexado a Groudon {{Star | this Pokemon}}.",
          },
          damage: 80,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
