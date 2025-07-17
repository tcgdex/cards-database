import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix",
         ja: "Vulpix",
         fr: "Vulpix",
         de: "Vulpix",
         es: "Vulpix",
         it: "Vulpix",
         pt: "Vulpix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [37],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
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
            en: "If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Vulpix.",
            ja: "廃棄パイルに火災エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをVulpixに取り付けます。",
            fr: "S'il y a des cartes d'énergie de feu dans votre tas de défausse, retournez une pièce. Si les têtes, attachez 1 d'entre elles à Vulpix.",
            de: "Wenn Sie Brandenergiekarten in Ihrem Ablagerungsstapel enthalten, drehen Sie eine Münze um. Wenn Köpfe, befestigen Sie 1 von ihnen an Vulpix.",
            es: "Si hay tarjetas de energía de fuego en tu pila de descarte, voltea una moneda. Si se dirige, adjunte 1 de ellos a Vulpix.",
            it: "Se ci sono delle carte di energia del fuoco nella tua pila di scarto, capovolgi una moneta. Se le teste, attaccano 1 a Vulpix.",
            pt: "Se houver cartas de energia de incêndio em sua pilha de descarte, vire uma moeda. Se as cabeças, anexe 1 deles ao Vulpix.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
