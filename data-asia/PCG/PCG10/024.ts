import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu",
         ja: "ライチュ",
         fr: "Raichu",
         de: "Raichu",
         es: "Raichu",
         it: "Raichu",
         pt: "Raichu",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [26],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

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
            en: "Search your discard pile for a Lightning Energy card and attach it to Raichu.",
            ja: "廃棄物のエネルギーカードを廃棄することを検索し、ライチュに添付してください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie Lightning et attachez-la à Raichu.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach einer Blitzelenergiekarte und befestigen Sie sie an Raichu.",
            es: "Busque en su pila de descarte una tarjeta de energía Lightning y adjunte a Raichu.",
            it: "Cerca il tuo mucchio di scarti per una fulmine e attaccalo a Raichu.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia Lightning e anexe -o a Raichu.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Thunderbolt",
            ja: "落雷",
            fr: "Coup de tonnerre",
            de: "Blitz",
            es: "Rayo",
            it: "Fulmine",
            pt: "Raio",
          },
          effect: {
            en: "Discard all Energy cards attached to Raichu.",
            ja: "Raichuに取り付けられたすべてのエネルギーカードを捨てます。",
            fr: "Jeter toutes les cartes d'énergie attachées à Raichu.",
            de: "Verwerfen Sie alle an Raichu verbundenen Energiekarten.",
            es: "Deseche todas las tarjetas de energía unidas a Raichu.",
            it: "Scartare tutte le carte energetiche collegate a Raichu.",
            pt: "Descarte todos os cartões de energia anexados a Raichu.",
          },
          damage: 100,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
