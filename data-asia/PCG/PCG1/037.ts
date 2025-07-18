import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pikachu",
         ja: "ピカチュウ",
         fr: "Pikachu",
         de: "Pikachu",
         es: "Pikachu",
         it: "Pikachu",
         pt: "Pikachu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [25],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Plasma",
            ja: "プラズマ",
            fr: "Plasma",
            de: "Plasma",
            es: "Plasma",
            it: "Plasma",
            pt: "Plasma",
          },
          effect: {
            en: "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Pikachu.",
            ja: "コインをひっくり返します。頭の場合は、廃棄物のエネルギーカードを廃棄することを検索し、ピカチュウに取り付けます。",
            fr: "Retourner une pièce. Si les têtes, recherchez votre tas de défausse pour une carte d'énergie Lightning et attachez-la à Pikachu.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, suchen Sie Ihren Ablagerungsstapel nach einer Blitzelenergiekarte und befestigen Sie sie an Pikachu.",
            es: "Voltea una moneda. Si se dirige, busque en su pila de descarte para una tarjeta de energía Lightning y adhiérase a Pikachu.",
            it: "Capovolgi una moneta. Se le teste, cerca il tuo mucchio di scarti per una carta di energia Lightning e collegala a Pikachu.",
            pt: "Vire uma moeda. Se as cabeças, procure sua pilha de descarte para obter um cartão de energia Lightning e anexe -o a Pikachu.",
          },
          damage: 10,
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
