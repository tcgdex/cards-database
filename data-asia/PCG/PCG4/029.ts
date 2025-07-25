import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Remoraid",
         ja: "REMORAID",
         fr: "Remoraid",
         de: "Remoraid",
         es: "Remorada",
         it: "Rimorso",
         pt: "Remoraid",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [223],
      hp: 50,
      types: ["Water"],
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
            en: "Search your deck for a Basic Pokemon and put it onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un Pokémon de base et mettez-le sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem einfachen Pokémon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon básico y colóquelo en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon di base e mettilo in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por um Pokémon básico e coloque -o em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Splash",
            ja: "スプラッシュ",
            fr: "Éclabousser",
            de: "Spritzen",
            es: "Chapoteo",
            it: "Spruzzare",
            pt: "Respingo",
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
          stamp: ["1st edition"],
        },
      ],
};
