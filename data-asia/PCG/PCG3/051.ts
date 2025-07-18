import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Lunatone",
         ja: "ルナトン",
         fr: "Lunatone",
         de: "Lunaton",
         es: "Lunatona",
         it: "Lunatone",
         pt: "Lunatone",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [337],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Moonglow",
            ja: "ムーンロー",
            fr: "Moonglow",
            de: "Moonglow",
            es: "Moonglow",
            it: "Moonglow",
            pt: "MoongLow",
          },
          effect: {
            en: "The Retreat Cost for each Solrock you have in play is 0.",
            ja: "プレイ中の各ソロロックのリトリートコストは0です。",
            fr: "Le coût de retraite pour chaque solrock que vous avez en jeu est de 0.",
            de: "Die Rückzugskosten für jedes Solrock, das Sie im Spiel haben, beträgt 0.",
            es: "El costo de retiro para cada solrock que tienes en juego es 0.",
            it: "Il costo di ritiro per ogni solrock che hai in gioco è 0.",
            pt: "O custo do retiro para cada Solrock que você tem em jogo é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Foresight",
            ja: "先見性",
            fr: "Prévoyance",
            de: "Voraussicht",
            es: "Previsión",
            it: "Lungimiranza",
            pt: "Previsão",
          },
          effect: {
            en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
            ja: "いずれかのプレーヤーのデッキのトップ5カードを見て、そのプレイヤーのデッキの上に戻します。",
            fr: "Regardez les 5 meilleures cartes du deck de l'un ou l'autre des joueurs et remettez-les sur le deck de ce joueur dans n'importe quel ordre.",
            de: "Schauen Sie sich die Top 5 Karten des Decks eines Spielers an und stellen Sie sie in beliebiger Reihenfolge wieder auf das Deck dieses Spielers.",
            es: "Mire las 5 cartas principales de la cubierta de cualquiera de los jugadores y vuelva a colocarlas en la parte superior del mazo de ese jugador en cualquier orden.",
            it: "Guarda le 5 migliori carte del mazzo di entrambi i giocatori e rimettile in cima al mazzo di quel giocatore in qualsiasi ordine.",
            pt: "Olhe para as 5 principais cartas do baralho de jogadores e coloque -as de volta em cima do baralho desse jogador em qualquer ordem.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Target Beam",
            ja: "ターゲットビーム",
            fr: "Poutre cible",
            de: "Zielstrahl",
            es: "Haz objetivo",
            it: "Raggio target",
            pt: "Feixe de destino",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Solrock you have in play.",
            ja: "20のダメージに加えて、プレイ中のソロロックごとにさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dégâts supplémentaires pour chaque solrock que vous avez en jeu.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jedes Lastrock, das Sie im Spiel haben.",
            es: "Hace 20 daños más 10 daños más para cada solrock que tienes en juego.",
            it: "Fa 20 danni più 10 danni in più per ogni solrock che hai in gioco.",
            pt: "Causam 20 danos mais 10 mais danos para cada Solrock que você tem em jogo.",
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
