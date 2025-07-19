import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Charizard Star (Delta Species)",
         ja: "カリザードスター（デルタ種）",
         fr: "Star de Charizard (espèces delta)",
         de: "Charizard Star (Delta -Arten)",
         es: "Estrella de Charizard (especie delta)",
         it: "Charizard Star (Delta Species)",
         pt: "Charizard Star (espécie Delta)",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [6],
      hp: 90,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Rotating Claws",
            ja: "回転爪",
            fr: "Griffes rotatives",
            de: "Krallen rotierende",
            es: "Garras giratorias",
            it: "Artigli rotanti",
            pt: "Garras rotativas",
          },
          effect: {
            en: "You may discard an Energy card attached to Charizard {{Star|this Pokemon}}. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Charizard {{Star|this Pokemon}}.",
            ja: "Charizard {{Star | This Pokemon}}に取り付けられたエネルギーカードを捨てることができます。そうした場合は、廃棄パイルを検索して、エネルギーカード（破棄したものを除く）を検索し、Charizard {{Star | This Pokemon}}に添付します。",
            fr: "Vous pouvez jeter une carte d'énergie attachée à Charizard {{Star | ce pokemon}}. Si vous le faites, recherchez votre tas de défausse pour une carte d'énergie (à l'exclusion de celle que vous avez jetée) et attachez-la à Charizard {{Star | ce pokemon}}.",
            de: "Sie können eine Energiekarte verwerfen, die an Charizard {{stern | dieses Pokemon}} verbunden ist. Wenn Sie dies tun, suchen Sie Ihren Ablagerungsstapel nach einer Energiekarte (ohne die, die Sie weggeworfen haben) und fügen Sie ihn an Charizard {{stern | this Pokemon}} hinzu.",
            es: "Puede descartar una tarjeta de energía adjunta a Charizard {{Star | This Pokemon}}. Si lo hace, busque en su pila de descarte para una tarjeta de energía (excluyendo la que descartó) y adhiérase a Charizard {{Star | This Pokemon}}.",
            it: "Puoi scartare una carta energetica allegata a Charizard {{Star | questo Pokemon}}. Se lo fai, cerca la tua pila di scarto per una carta energetica (esclusa quella che hai scartato) e attaccarlo a Charizard {{Star | this Pokemon}}.",
            pt: "Você pode descartar um cartão de energia anexado a Charizard {{Star | this Pokemon}}. Se o fizer, pesquise sua pilha de descarte para obter um cartão de energia (excluindo o que você descartou) e anexe -o a Charizard {{Star | this Pokemon}}.",
          },
          damage: 20,
        },
        {
          cost: ["Darkness", "Darkness", "Darkness", "Darkness", "Colorless"],
          name: {
            en: "Dark Swirl",
            ja: "暗い渦巻き",
            fr: "Swirl sombre",
            de: "Dunkler Wirbel",
            es: "Remolino oscuro",
            it: "Turbinio scuro",
            pt: "Redemoinho escuro",
          },
          effect: {
            en: "Discard all Energy cards attached to Charizard {{Star|this Pokemon}} and discard the top 3 cards from your opponent's deck.",
            ja: "Charizard {{Star | This Pokemon}}に取り付けられたすべてのエネルギーカードを捨て、対戦相手のデッキからトップ3のカードを破棄します。",
            fr: "Jetez toutes les cartes d'énergie attachées à Charizard {{Star | ce pokemon}} et jetez les 3 meilleures cartes du jeu de votre adversaire.",
            de: "Verwerfen Sie alle Energiekarten, die an Charizard {{star | dieses Pokemon}} verbunden sind, und verwerfen Sie die Top 3 -Karten des Decks Ihres Gegners.",
            es: "Descarte todas las cartas de energía adjuntas a Charizard {{Star | This Pokemon}} y deseche las 3 cartas principales del mazo de tu oponente.",
            it: "Scartare tutte le carte energetiche collegate a Charizard {{Star | questo Pokemon}} e scartare le prime 3 carte dal mazzo del tuo avversario.",
            pt: "Descarte todos os cartões de energia anexados a Charizard {{Star | this Pokemon}} e descarte as três principais cartas do baralho do seu oponente.",
          },
          damage: 150,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
