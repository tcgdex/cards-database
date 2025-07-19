import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Pinsir (Delta Species)",
         ja: "ピンシル（デルタ種）",
         fr: "Pinir (espèces delta)",
         de: "Pinsir (Delta -Arten)",
         es: "Pinsir (especie delta)",
         it: "Pinsir (Delta Species)",
         pt: "Pinsir (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [127],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Armor",
            ja: "鎧",
            fr: "Armure",
            de: "Rüstung",
            es: "Armadura",
            it: "Armatura",
            pt: "Armadura",
          },
          effect: {
            en: "If your opponent has 5 or more cards in his or her hand, any damage done to Pinsir by attacks is reduced by 30 (after applying Weakness and Resistance).",
            ja: "対戦相手が手に5枚以上のカードを持っている場合、攻撃によってピンシルに与えられた損害は30減少します（脱力と抵抗を適用した後）。",
            fr: "Si votre adversaire a 5 cartes ou plus dans sa main, tout dommage causé à Pinir par des attaques est réduit de 30 (après avoir appliqué une faiblesse et une résistance).",
            de: "Wenn Ihr Gegner über 5 oder mehr Karten in der Hand hat, wird durch Angriffe durch Angriffe Schäden an Pinsir angerichtet (nach Auftragen von Schwäche und Widerstand).",
            es: "Si tu oponente tiene 5 o más cartas en su mano, cualquier daño hecho a Pinsir por ataques se reduce en 30 (después de aplicar debilidad y resistencia).",
            it: "Se il tuo avversario ha 5 o più carte nella sua mano, qualsiasi danno arrecato a Pinsir dagli attacchi viene ridotto di 30 (dopo aver applicato debolezza e resistenza).",
            pt: "Se o seu oponente tiver 5 ou mais cartas na mão, qualquer dano causado ao Pinsir por ataques será reduzido em 30 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Delta Call",
            ja: "デルタコール",
            fr: "Appel delta",
            de: "Delta -Anruf",
            es: "Llamada delta",
            it: "Delta Call",
            pt: "CHAMADA DOLTA",
          },
          effect: {
            en: "Search your deck for a Pokemon that has d on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "カードにDがあるポケモンを探して、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un pokemon qui a D sur sa carte, montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Pokémon, das D auf seiner Karte hat, zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un Pokémon que tenga D en su carta, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Pokemon che ha D sulla sua carta, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho por um Pokémon que tenha D em sua carta, mostre -o ao seu oponente e coloque -o na sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Guillotine",
            ja: "ギロチン",
            fr: "Guillotine",
            de: "Guillotine",
            es: "Guillotina",
            it: "Ghigliottina",
            pt: "Guilhotina",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
