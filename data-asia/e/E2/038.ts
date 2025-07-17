import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Zapdos - 038/092",
         ja: "Zapdos -038/092",
         fr: "Zapdos - 038/092",
         de: "Zapdos - 038/092",
         es: "Zapdos - 038/092",
         it: "Zapdos - 038/092",
         pt: "Zapdos - 038/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [145],
      hp: 80,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Anti-Lightning",
            ja: "ライトニング対策",
            fr: "Anti-éclairage",
            de: "Anti-Lightning",
            es: "Anti-luz",
            it: "Anti-Lightning",
            pt: "Anti-luz",
          },
          effect: {
            en: "You can't attach Lightning Energy cards from your hand to Zapdos.",
            ja: "手からザプドスに稲妻エネルギーカードを取り付けることはできません。",
            fr: "Vous ne pouvez pas attacher des cartes d'énergie Lightning de votre main aux zapdos.",
            de: "Sie können Blitzelenergiekarten nicht von Ihrer Hand an Zapdos anbringen.",
            es: "No puede conectar tarjetas de energía de rayos desde su mano a Zapdos.",
            it: "Non puoi attaccare le carte di energia dei fulmini dalla mano a Zapdos.",
            pt: "Você não pode anexar cartões de energia de raios da sua mão a Zapdos.",
          },
      }],

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
            en: "If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Zapdos.",
            ja: "廃棄パイルに稲妻エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをZapdosに取り付けます。",
            fr: "S'il y a des cartes d'énergie Lightning dans votre tas de défausse, retournez une pièce. Si les têtes, attachez 1 d'entre elles à Zapdos.",
            de: "Wenn Sie Lightning Energy -Karten in Ihrem Ablagerungsstapel enthalten, drehen Sie eine Münze um. Wenn Köpfe, befestigen Sie 1 von ihnen an Zapdos.",
            es: "Si hay tarjetas de energía de rayos en su pila de descarte, voltea una moneda. Si se dirige, adjunte 1 de ellos a Zapdos.",
            it: "Se ci sono carte di energia Lightning nella tua pila di scarto, capovolgi una moneta. Se le teste, attacca 1 a Zapdos.",
            pt: "Se houver cartas de energia raios em sua pilha de descarte, vire uma moeda. Se as cabeças, conecte 1 deles a Zapdos.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
          name: {
            en: "Lightning Storm",
            ja: "稲妻",
            fr: "Tempête de foudre",
            de: "Blitzsturm",
            es: "Tormenta de rayo",
            it: "Tempesta di fulmini",
            pt: "Tempestade de raios",
          },
          effect: {
            en: "Flip a coin. If tails, put 2 damage counters on Zapdos.",
            ja: "コインをひっくり返します。尾の場合、zapdosに2つのダメージカウンターを入れます。",
            fr: "Retourner une pièce. Si Tails, mettez 2 compteurs de dégâts sur Zapdos.",
            de: "Eine Münze drehen. Wenn Schwänze, legen Sie 2 Schadenszähler auf Zapdos.",
            es: "Voltea una moneda. Si cola, coloque 2 contadores de daño en Zapdos.",
            it: "Capovolgi una moneta. Se coda, inserisci 2 contatori di danno su Zapdos.",
            pt: "Vire uma moeda. Se a cauda, coloque 2 contadores de danos em Zapdos.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
