import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Solrock",
         ja: "ソロック",
         fr: "Solrock",
         de: "Solrock",
         es: "Solrock",
         it: "Solrock",
         pt: "Solrock",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [338],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Luna Shade",
            ja: "ルナシェード",
            fr: "Ombre Luna",
            de: "Luna Schatten",
            es: "Tono de luna",
            it: "Luna Shade",
            pt: "Luna Shade",
          },
          effect: {
            en: "As long as you have Lunatone in play, each player's Colorless PokÃ©mon (excluding PokÃ©mon-ex) can't use any PokÃ©-Powers.",
            ja: "Lunatoneがプレイしている限り、各プレイヤーの無色のPokã©Mon（Pokã©Mon-Exを除く）はPokã©Powersを使用できません。",
            fr: "Tant que vous avez du lunatone en jeu, le Pokã © Mon incolore de chaque joueur (à l'exclusion de Pokã © Mon-EX) ne peut utiliser aucun pokã © -Powers.",
            de: "Solange Sie Lunatone im Spiel haben, kann der farblose Poké Mon (mit Ausnahme von Poké mon-ex) keine Poké-Wäsche verwenden.",
            es: "Mientras tengas lunatone en juego, el Poké Mon incoloro de cada jugador (excluyendo Poké Mon-Ex) no puede usar ninguna potencia de Poké.",
            it: "Finché hai il gioco Lunatone, il poké incolore di ogni giocatore (escluso Poké mon-ex) non può usare alcun poké-powers.",
            pt: "Enquanto você tiver Lunatone em jogo, o Poké Mon incolor de cada jogador (excluindo Poké Mon-Ex) não pode usar nenhum power-Powers.",
          },
      }],

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
            en: "Search your deck for a Lunatone and put it onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを検索してルナトンを探して、ベンチに置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour un lunatone et mettez-le sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einem Lunaton und legen Sie es auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo un lunatone y póngalo en su banco. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un Lunatone e mettilo sulla panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um Lunatone e coloque -o em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Hyper Beam",
            ja: "ハイパービーム",
            fr: "Hyper faisceau",
            de: "Hyperstrahl",
            es: "Hiper viga",
            it: "Hyper Beam",
            pt: "Hyper Beam",
          },
          effect: {
            en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia preso ao Pokémon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
