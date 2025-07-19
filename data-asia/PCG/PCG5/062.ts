import {Card} from "../../../interfaces"
import Set from "../PCG5"

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

      rarity: "Common",
      category: "Pokemon",
      dexId: [300],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Important Errands",
            ja: "重要な用事",
            fr: "Des courses importantes",
            de: "Wichtige Besorgungen",
            es: "Recados importantes",
            it: "Commissioni importanti",
            pt: "Recados importantes",
          },
          effect: {
            en: "Search your deck for a React Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索してReact Energyカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie React, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer React -Energiekarte, zeigen Sie es Ihrem Gegner an und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía React, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia React, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia React, mostre -o ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Jump On",
            ja: "ジャンプします",
            fr: "Sauter",
            de: "Springen",
            es: "Ponerse",
            it: "Salta",
            pt: "Pule em frente",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos.",
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
