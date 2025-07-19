import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Eevee (Delta Species)",
         ja: "Eevee（デルタ種）",
         fr: "Eevee (espèces delta)",
         de: "Eevee (Delta -Arten)",
         es: "Eevee (especie delta)",
         it: "Eevee (specie delta)",
         pt: "Eevee (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [133],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Metal Scoop",
            ja: "金属スクープ",
            fr: "Scoop de métal",
            de: "Metallschaufel",
            es: "Cucharada de metal",
            it: "Scoopta metallica",
            pt: "Colher de metal",
          },
          effect: {
            en: "Search your discard pile for a Metal Energy card and attach it to Eevee.",
            ja: "廃棄物の山を検索して、金属エネルギーカードを添付し、Eeveeに取り付けます。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie en métal et attachez-la à Eevee.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach einer Metall -Energiekarte und befestigen Sie sie an Eevee.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía de metal y adhiérase a Eevee.",
            it: "Cerca il tuo mucchio di scarti una scheda di energia metallica e attaccalo a Eevee.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia de metal e anexe -o a Eevee.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
