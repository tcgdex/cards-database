import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados Star (Delta Species)",
         ja: "ギャラドススター（デルタ種）",
         fr: "Gyarados Star (espèces delta)",
         de: "Gyarados Star (Delta -Arten)",
         es: "Estrella de Gyarados (especie delta)",
         it: "Gyarados Star (Delta Species)",
         pt: "Estrela de Gyarados (espécies Delta)",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [130],
      hp: 80,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Spiral Growth",
            ja: "らせん成長",
            fr: "Croissance spirale",
            de: "Spiralwachstum",
            es: "Crecimiento espiral",
            it: "Crescita a spirale",
            pt: "Crescimento em espiral",
          },
          effect: {
            en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Gyarados {{star|this Pokemon}}.",
            ja: "尾がなくなるまでコインをひっくり返します。ヘッドごとに、廃棄パイルを検索して、基本的なエネルギーカードを調べ、Gyarados {{Star | This Pokemon}}に取り付けます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Pour chaque tête, recherchez votre tas de défausse pour une carte d'énergie de base et attachez-la à Gyarados {{Star | Ce pokemon}}.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Suchen Sie für jeden Köpfe Ihren Ablagerungsstapel nach einer grundlegenden Energiekarte und befestigen Sie sie an Gyarados {{Stern | this Pokemon}}.",
            es: "Voltea una moneda hasta que obtengas colas. Para cada cabezal, busque en su pila de descarte para una tarjeta de energía básica y adhiérase a Gyarados {{Star | This Pokemon}}.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Per ogni testa, cerca la pila di scarto per una scheda di energia di base e attaccalo a Gyarados {{Star | questo Pokemon}}.",
            pt: "Vire uma moeda até obter caudas. Para cada cabeça, procure sua pilha de descarte para obter um cartão de energia básico e anexe -o a gyarados {{star | this Pokemon}}.",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "All-out Blast",
            ja: "全面的な爆発",
            fr: "Blast tout-terrain",
            de: "All-out-Explosion",
            es: "Explosión total",
            it: "Esplosione totale",
            pt: "Explosão total",
          },
          effect: {
            en: "Discard cards from the top of your deck until you have 1 card left. This attack does 50 damage plus 20 more damage for each Energy card you discarded in this way.",
            ja: "1枚のカードが残るまで、デッキの上部からカードを捨てます。この攻撃は、この方法で廃棄したエネルギーカードごとに50のダメージと20のダメージを与えます。",
            fr: "Jetez les cartes du haut de votre deck jusqu'à ce qu'il vous reste 1 carte. Cette attaque fait 50 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie que vous avez jetée de cette manière.",
            de: "Verwerfen Sie Karten von der Spitze Ihres Decks, bis Sie 1 Karte übrig haben. Dieser Angriff verursacht 50 Schäden plus 20 weitere Schäden für jede Energiekarte, die Sie auf diese Weise weggeworfen haben.",
            es: "Deseche las cartas desde la parte superior de su mazo hasta que le quede 1 carta. Este ataque hace 50 daños más 20 más de daño por cada carta de energía que descartó de esta manera.",
            it: "Scartare le carte dalla parte superiore del mazzo fino a quando non ti rimane 1 carta. Questo attacco infligge 50 danni più 20 danni in più per ogni carta energetica che hai scartato in questo modo.",
            pt: "Descarte as cartas do topo do seu baralho até que você tenha 1 carta. Este ataque causa 50 danos mais 20 mais danos para cada cartão de energia que você descartou dessa maneira.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
