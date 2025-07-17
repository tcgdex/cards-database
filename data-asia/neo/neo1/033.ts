import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Feraligatr",
         ja: "feraligatr",
         fr: "Ferraligatr",
         de: "Feraligatr",
         es: "Salvaje",
         it: "Feraligatr",
         pt: "Feraligatr",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Berserk",
            ja: "バーセルク",
            fr: "Fou furieux",
            de: "Berserk",
            es: "Enloquecido",
            it: "Berserk",
            pt: "Berserk",
          },
          effect: {
            en: "When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent's deck. If tails, discard the top 5 cards from your deck.",
            ja: "手からferaligatrをプレイしたら、コインをひっくり返します。頭の場合は、相手のデッキからトップ5カードを捨ててください。尾の場合、デッキからトップ5カードを捨ててください。",
            fr: "Lorsque vous jouez à Feraligatr de votre main, retournez une pièce. Si les têtes, jetez les 5 meilleures cartes du jeu de votre adversaire. Si Tails, jetez les 5 meilleures cartes de votre deck.",
            de: "Wenn Sie Feraligatr von Ihrer Hand spielen, drehen Sie eine Münze. Wenn Sie Köpfe haben, entsorgen Sie die Top 5 Karten vom Deck Ihres Gegners. Wenn Schwänze, verwerfen Sie die Top 5 Karten von Ihrem Deck.",
            es: "Cuando juegues a Feraligatr de tu mano, voltea una moneda. Si se dirige, deseche las 5 cartas principales del mazo de tu oponente. Si Tails, deseche las 5 cartas principales de su mazo.",
            it: "Quando giochi a Feraligatr dalla tua mano, capovolgi una moneta. Se le teste, scartare le prime 5 carte dal mazzo del tuo avversario. Se coda, scartare le prime 5 carte dal tuo mazzo.",
            pt: "Quando você toca Feraligatr da sua mão, vire uma moeda. Se a cabeça, descarte as 5 principais cartas do baralho do seu oponente. Se a cauda, descarte as 5 principais cartas do seu baralho.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Water", "Water"],
          name: {
            en: "Chomp",
            ja: "chomp",
            fr: "Chomper",
            de: "Chomp",
            es: "Acompañar",
            it: "Chomp",
            pt: "Chomp",
          },
          effect: {
            en: "Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.",
            ja: "Feraligatrのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、50のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de compteurs de dégâts sur Feraligatr. Cette attaque fait 50 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der Schadenszähler auf Feraligatr entspricht. Dieser Angriff verursacht 50 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de contadores de daño en Feraligatr. Este ataque hace 50 daños más 10 daños más para cada cabezal.",
            it: "Capolare una serie di monete pari al numero di contatori di danno su Faraligatr. Questo attacco infligge 50 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de contadores de danos a Feraligatr. Este ataque causa 50 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
