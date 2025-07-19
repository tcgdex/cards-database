import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Metagross Star",
         ja: "メタグロススター",
         fr: "Metagross Star",
         de: "METAGROSS -STAR",
         es: "Estrella de Metagross",
         it: "Metagross Star",
         pt: "Metagross Star",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [376],
      hp: 90,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
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
            en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Metal Energy cards and attach them to Metagross {{Star|this Pokemon}}.",
            ja: "対戦相手が取った賞金の数を数えます。その多くの金属エネルギーカードまで廃棄の山を検索し、それらをMetagross {{star | this Pokemon}}に取り付けます。",
            fr: "Comptez le nombre de cartes de prix que votre adversaire a prises. Recherchez votre tas de défausse pour autant de cartes d'énergie en métal et attachez-les à Metagross {{Star | ce pokemon}}.",
            de: "Zählen Sie die Anzahl der Preiskarten, die Ihr Gegner gewonnen hat. Suchen Sie Ihren Ablagerungsstapel nach vielen Metall -Energiekarten und befestigen Sie sie an Metagross {{stern | this pokemon}}.",
            es: "Cuente el número de tarjetas de premio que ha tomado su oponente. Busque en su pila de descarte para hasta tantas tarjetas de energía de metal y adjuntelas a Metagross {{estrella | este pokemon}}.",
            it: "Conta il numero di carte premio che il tuo avversario ha preso. Cerca il tuo mucchio di scarti per così tante carte di energia metallica e allegale a Metagross {{Star | questo Pokemon}}.",
            pt: "Conte o número de cartões de prêmios que seu oponente tomou. Pesquise sua pilha de descarte até que muitos cartões de energia metálica e anexe -os a Metagross {{Star | this Pokemon}}.",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"],
          name: {
            en: "Hyper Beam",
            ja: "ハイパービーム",
            fr: "Hyper faisceau",
            de: "Hyperstrahl",
            es: "Hiper viga",
            it: "Hyper Beam",
            pt: "Hyper Beam",
          },
          effect: {
            en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia preso ao Pokémon atual.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
