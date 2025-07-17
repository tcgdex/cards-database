import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Moltres - 018/088",
         ja: "モルトレス-018/088",
         fr: "Moltres - 018/088",
         de: "Moltres - 018/088",
         es: "Moltres - 018/088",
         it: "Moltres - 018/088",
         pt: "Moltres - 018/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [146],
      hp: 80,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Fire Immunity",
            ja: "火災免疫",
            fr: "Immunité de feu",
            de: "Feuerimmunität",
            es: "Inmunidad al fuego",
            it: "Immunità al fuoco",
            pt: "Imunidade ao fogo",
          },
          effect: {
            en: "You can't attach Fire Energy cards from your hand to Moltres.",
            ja: "手からモルトレスにファイアエネルギーカードを取り付けることはできません。",
            fr: "Vous ne pouvez pas attacher des cartes d'énergie de feu de votre main à Moltres.",
            de: "Sie können keine Feuerergiekarten von Ihrer Hand an Moltres anbringen.",
            es: "No puedes colocar tarjetas de energía de fuego de tu mano a Moltres.",
            it: "Non puoi attaccare le carte di energia del fuoco dalla mano ai Moltres.",
            pt: "Você não pode conectar cartões de energia de incêndio da sua mão a Moltres.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Collect Fire",
            ja: "火を集めます",
            fr: "Percevoir",
            de: "Feuer sammeln",
            es: "Recoger fuego",
            it: "Raccogli il fuoco",
            pt: "Colete fogo",
          },
          effect: {
            en: "If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.",
            ja: "廃棄パイルに火災エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをモルトレスに取り付けます。",
            fr: "S'il y a des cartes d'énergie de feu dans votre tas de défausse, retournez une pièce. Si les têtes, attachez 1 d'entre elles à Moltres.",
            de: "Wenn Sie Brandenergiekarten in Ihrem Ablagerungsstapel enthalten, drehen Sie eine Münze um. Wenn Köpfe, befestigen Sie 1 von ihnen an Moltres.",
            es: "Si hay tarjetas de energía de fuego en tu pila de descarte, voltea una moneda. Si se dirige, adjunte 1 de ellos a Moltres.",
            it: "Se ci sono delle carte di energia del fuoco nella tua pila di scarto, capovolgi una moneta. Se le teste, attaccano 1 di essi a Moltres.",
            pt: "Se houver cartas de energia de incêndio em sua pilha de descarte, vire uma moeda. Se as cabeças, prenda 1 a Moltres.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Burning Tail",
            ja: "燃えている尾",
            fr: "Queue brûlante",
            de: "Verbrennender Schwanz",
            es: "Cola ardiente",
            it: "Coda in fiamme",
            pt: "Cauda ardente",
          },
          effect: {
            en: "Flip a coin. If tails, discard a Fire Energy card attached to Moltres.",
            ja: "コインをひっくり返します。尾の場合、モルトレスに取り付けられた消防剤カードを捨ててください。",
            fr: "Retourner une pièce. Si les queues, jettent une carte d'énergie de feu attachée à Moltres.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie eine an Moltres befestigte Brandenergiekarte.",
            es: "Voltea una moneda. Si las colas, deseche una tarjeta de energía de fuego unida a Moltres.",
            it: "Capovolgi una moneta. Se coda, scartare una carta di energia antincendio attaccata ai moltres.",
            pt: "Vire uma moeda. Se as caudas, descarte um cartão de energia de incêndio conectado a Moltres.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

};
