import {Card} from "../../../interfaces"
import Set from "../PCG5"

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

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [337],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Sol Shade",
            ja: "ソルシェード",
            fr: "Sol Shade",
            de: "Sol Schatten",
            es: "Sombra de sol",
            it: "Sol Shade",
            pt: "Sol Shade",
          },
          effect: {
            en: "As long as you have Solrock in play, each player's Fire PokÃ©mon (excluding PokÃ©mon-ex) can't use any PokÃ©-Powers.",
            ja: "Solrockがプレイしている限り、各プレイヤーのFirePokã©Mon（Pokã©Mon-Exを除く）はPokã©Powersを使用できません。",
            fr: "Tant que vous avez Solrock en jeu, le feu de chaque joueur Pokã © Mon (à l'exclusion de Pokã © Mon-EX) ne peut utiliser aucun pokã © -Powers.",
            de: "Solange Sie Solrock im Spiel haben, kann der Feuerwehrpoké Mons (mit Ausnahme von Poké Mon-ex) keine Poké-Powers verwenden.",
            es: "Mientras tengas Solrock en juego, el fuego de cada jugador Poké Mon (excluyendo Poké Mon-Ex) no puede usar ninguna potencia de Poké.",
            it: "Finché hai Solrock in gioco, il fuoco di ogni giocatore Poké (escluso Poké Mon-ex) non può usare alcun poké-powers.",
            pt: "Enquanto você tiver Solrock em jogo, o fogo de cada jogador (excluindo o Poké Mon-ex) não pode usar nenhum pow-powers.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Moon Guidance",
            ja: "月の指導",
            fr: "Guidage de la lune",
            de: "Mondführung",
            es: "Guía de la luna",
            it: "Guida alla luna",
            pt: "Orientação da lua",
          },
          effect: {
            en: "Search your deck for a Trainer card (excluding Supporter cards), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、トレーナーカード（サポーターカードを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour une carte d'entraînement (à l'exclusion des cartes supporters), montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Trainerkarte (ohne Unterstützerkarten), zeigen Sie es Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de entrenador (excluyendo cartas de partidarios), muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta dell'allenatore (escluso le carte dei sostenitori), mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de treinador (excluindo cartas de apoiadores), mostre -a ao seu oponente e coloque -a em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
