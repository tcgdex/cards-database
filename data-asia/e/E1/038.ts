import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Electabuzz",
         ja: "Electabuzz",
         fr: "Electabuzz",
         de: "Electabuzz",
         es: "Electabuzz",
         it: "Electabuzz",
         pt: "Electabuzz",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [125],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Draw",
            ja: "エネルギーの引き分け",
            fr: "Tirage d'énergie",
            de: "Energieabnahme",
            es: "Sorteo",
            it: "Disegna di energia",
            pt: "Desenho de energia",
          },
          effect: {
            en: "Search your deck for a basic Energy card and attach it to Electabuzz. Shuffle your deck afterward.",
            ja: "デッキを検索して基本的なエネルギーカードを検索し、electabuzzに添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie de base et attachez-la à ElectAbuzz. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer grundlegenden Energiekarte und fügen Sie sie an Electabuzz hinzu. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía básica y adjuntela a Electabuzz. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta energetica di base e attaccalo a ElectaBuzz. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia básico e anexe -o ao Electabuzz. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Reflect Energy",
            ja: "エネルギーを反映します",
            fr: "Refléter l'énergie",
            de: "Energie widerspiegeln",
            es: "Reflejar la energía",
            it: "Riflettere l'energia",
            pt: "Refletir energia",
          },
          effect: {
            en: "If you have any Benched Pokemon and if there are any basic Energy cards attached to Electabuzz, take 1 of those Energy cards and attach it to 1 of those Pokemon.",
            ja: "ベンチ付きポケモンがあり、ElectAbuzzに基本的なエネルギーカードが付いている場合は、それらのエネルギーカードの1枚を取り、それらのポケモンの1つに取り付けます。",
            fr: "Si vous avez des Pokémon bancés et s'il y a des cartes d'énergie de base attachées à ElectAbuzz, prenez 1 de ces cartes d'énergie et attachez-la à 1 de ces Pokémon.",
            de: "Wenn Sie ein Bank -Pokémon haben und grundlegende Energiekarten an Electabuzz befinden, nehmen Sie 1 dieser Energiekarten an und befestigen Sie es an 1 dieser Pokemon.",
            es: "Si tiene algún Pokémon de banca y si hay alguna tarjeta de energía básica unidas a ElectAbuzz, tome 1 de esas tarjetas de energía y adjunte a 1 de esos Pokémon.",
            it: "Se hai dei Pokemon in panchina e se ci sono carte di energia di base collegate a Electabuzz, prendi 1 di quelle carte energetiche e attaccalo a 1 di quei Pokemon.",
            pt: "Se você tiver algum Pokemon em banco e se houver algum cartão de energia básico anexado ao Electabuzz, pegue 1 desses cartões de energia e onence -o a 1 desses Pokémon.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

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
