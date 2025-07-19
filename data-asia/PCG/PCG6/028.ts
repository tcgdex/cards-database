import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Kyogre Star",
         ja: "Kyogre Star",
         fr: "Kyogre Star",
         de: "Kyogre Star",
         es: "Estrella de Kyogre",
         it: "Kyogre Star",
         pt: "Estrela de Kyogre",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [382],
      hp: 90,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
            en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Water Energy cards and attach them to Kyogre {{Star|this Pokemon}}.",
            ja: "対戦相手が取った賞金の数を数えます。その多くの水エネルギーカードまで廃棄の山を検索し、それらをkyogre {{star | this pokemon}}に取り付けます。",
            fr: "Comptez le nombre de cartes de prix que votre adversaire a prises. Recherchez votre tas de défausse pour autant de cartes d'énergie de l'eau et attachez-les à Kyogre {{Star | Ce pokemon}}.",
            de: "Zählen Sie die Anzahl der Preiskarten, die Ihr Gegner gewonnen hat. Suchen Sie Ihren Ablagerungsstapel nach so vielen Wasserergiekarten und befestigen Sie sie an Kyogre {{star | this pokemon}}.",
            es: "Cuente el número de tarjetas de premio que ha tomado su oponente. Busque en su pila de descarte hasta tantas tarjetas de energía de agua y adjuntelas a Kyogre {{Star | This Pokemon}}.",
            it: "Conta il numero di carte premio che il tuo avversario ha preso. Cerca il tuo mucchio di scarti per così tante carte sull'energia idrica e allegale a Kyogre {{Star | questo Pokemon}}.",
            pt: "Conte o número de cartões de prêmios que seu oponente tomou. Pesquise sua pilha de descarte até que muitos cartões de energia da água e anexe -os a Kyogre {{Star | this Pokemon}}.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Sheer Cold",
            ja: "寒い",
            fr: "Pur froid",
            de: "Bloß kalt",
            es: "Puro frío",
            it: "Puro freddo",
            pt: "Puro frio",
          },
          effect: {
            en: "Flip a coin. If heads, each Defending Pokemon can't attack during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防御する各ポケモンは、相手の次のターン中に攻撃することはできません。",
            fr: "Retourner une pièce. Si les têtes, chaque Pokémon en défense ne peut pas attaquer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Köpfe, kann jedes verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht angreifen.",
            es: "Voltea una moneda. Si se dirige, cada Pokémon defensor no puede atacar durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se la testa, ogni Pokemon in difesa non può attaccare durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, cada Pokemon defensor não pode atacar durante o próximo turno do seu oponente.",
          },
          damage: 60,
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
