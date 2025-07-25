import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Electrike",
         ja: "電気",
         fr: "Électrike",
         de: "Elektrike",
         es: "Electrídico",
         it: "Elettrike",
         pt: "Eletrike",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [309],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Charge",
            ja: "充電",
            fr: "Charge",
            de: "Aufladung",
            es: "Cargar",
            it: "Carica",
            pt: "Cobrar",
          },
          effect: {
            en: "Attach a Lightning Energy card from your discard pile to Electrike.",
            ja: "廃棄の山からエレクトリケに稲妻エネルギーカードを取り付けます。",
            fr: "Fixez une carte d'énergie Lightning de votre tas de défausse à l'électrike.",
            de: "Befestigen Sie eine Lightning Energy -Karte von Ihrem Ablagerungsstapel an Electrike.",
            es: "Adjunte una tarjeta de energía del rayo de su pila de descarte al electríe.",
            it: "Attacca una scheda energetica Lightning dalla pila di scarto a Electrike.",
            pt: "Anexe um cartão de energia de raios da sua pilha de descarte ao elegante.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Thunder Jolt",
            ja: "サンダージョルト",
            fr: "Secousse du tonnerre",
            de: "Donnerstumpf",
            es: "Trueno",
            it: "Thunder Jolt",
            pt: "Trovão",
          },
          effect: {
            en: "Flip a coin. If tails, Electrike does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、エレクトリケはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Electrike se fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Schwänze, Electrike schädigt sich 10.",
            es: "Voltea una moneda. Si Tails, Electrice hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se le code, Electrike fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as caudas, eletirá causar 10 danos a si mesmo.",
          },
          damage: 30,
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
