import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Plusle",
         ja: "プラスレ",
         fr: "Plus",
         de: "Plusle",
         es: "Adhesivo",
         it: "Plusle",
         pt: "Plusle",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [311],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Family",
            ja: "家族を呼びます",
            fr: "Appel à la famille",
            de: "Rufen Sie nach Familie",
            es: "Llamar a la familia",
            it: "Chiama per la famiglia",
            pt: "Ligue para a família",
          },
          effect: {
            en: "Search your deck for up to 2 Basic Pokemon and put them onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを最大2つの基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 Pokémon de base et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Basic -Pokemon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 Pokémon básicos y colóquelos en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo fino a 2 Pokemon di base e mettili sulla panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho até 2 Pokémon básico e coloque -os em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Positive Spark",
            ja: "ポジティブな火花",
            fr: "Étincelle positive",
            de: "Positiver Funken",
            es: "Chispa positiva",
            it: "Scintilla positiva",
            pt: "Faísca positiva",
          },
          effect: {
            en: "Does 20 damage to each of your opponent's Pokemon that has any Poké-Powers. Don't apply Weakness and Resistance.",
            ja: "ポケパウアーを持つ相手の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 20 dégâts à chacun des pokemon de votre adversaire qui a des poké-powers. N'appliquez pas la faiblesse et la résistance.",
            de: "Schädigt 20 Pokémon Ihres Gegners, das Poké-Powers hat, 20 Schäden. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 20 daños a cada Pokémon de tu oponente que tiene algún Poké-Power. No aplique debilidad y resistencia.",
            it: "Fa 20 danni a ciascuno dei Pokemon del tuo avversario che ha dei Poké-Powers. Non applicare debolezza e resistenza.",
            pt: "Causam 20 danos a cada um dos Pokémon do seu oponente que tem algum poké. Não aplique fraqueza e resistência.",
          },
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
