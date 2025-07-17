import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Skitty",
         ja: "スキッティ",
         fr: "Gigantesque",
         de: "Skitty",
         es: "Skitty",
         it: "Skitty",
         pt: "Skitty",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [300],
      hp: 40,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Minor Errand-Running",
            ja: "マイナーな用事が走る",
            fr: "Correction des courses mineures",
            de: "Kleiner Besorgnis",
            es: "Corriente de recados menores",
            it: "Minore commissioni",
            pt: "Pequenas recados",
          },
          effect: {
            en: "Search your deck for 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
            ja: "デッキを2枚の基本的なエネルギーカードで検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour 2 cartes d'énergie de base, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach 2 grundlegenden Energiekarten, zeigen Sie sie Ihrem Gegner an und legen Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo 2 cartas de energía básicas, muéstrelas a su oponente y póngalas en tu mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo 2 carte di energia di base, mostrale al tuo avversario e mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por duas cartas básicas de energia, mostre -as ao seu oponente e coloque -as em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Lullaby",
            ja: "子守lulaby",
            fr: "Berceuse",
            de: "Wiegenlied",
            es: "Canción de cuna",
            it: "Ninna nanna",
            pt: "Canção de ninar",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
