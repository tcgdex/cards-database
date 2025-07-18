import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Weedle",
         ja: "雑草",
         fr: "Faire de l'herbe",
         de: "Unkraut",
         es: "Maleza",
         it: "Diserbare",
         pt: "Weedle",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [13],
      hp: 50,
      types: ["Grass"],
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
            en: "Search your deck for up to 2 Grass Basic Pokemon and put them onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを検索して、最大2草の基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre pont jusqu'à 2 Pokémon de base Grass et mettez-les sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Gras -Basis -Pokémon und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 Pokémon básico de hierba y póngalos en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 2 Pokemon di base e mettili in panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho até 2 Pokémon básico de grama e coloque -o em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Poison Spurt",
            ja: "ポイズンスパート",
            fr: "Poussée de poison",
            de: "Giftschub",
            es: "Espurante de veneno",
            it: "Spiro veleno",
            pt: "Poison Spurt",
          },
          effect: {
            en: "Discard a Grass Energy card attached to Weedle. The Defending Pokemon is now Poisoned.",
            ja: "除草剤に取り付けられた草のエネルギーカードを捨てます。防御ポケモンは現在中毒になっています。",
            fr: "Jeter une carte d'énergie de l'herbe attachée à Weedle. Le Pokémon en défense est maintenant empoisonné.",
            de: "Verwerfen Sie eine Grasergiekarte, die an Unkraut angebracht ist. Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "Deseche una tarjeta de energía de hierba unida a la hierba. El Pokémon defensor ahora está envenenado.",
            it: "Scartare una carta di energia dell'erba attaccata a diserbo. Il Pokemon in carica è ora avvelenato.",
            pt: "Descarte um cartão de energia da grama preso ao mato. O Pokémon atual agora está envenenado.",
          },
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
