import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Ampharos (Delta Species)",
         ja: "アンファロス（デルタ種）",
         fr: "Ampharos (espèces delta)",
         de: "Ampharos (Delta -Arten)",
         es: "Ámpharos (especie delta)",
         it: "Ampharos (Delta Species)",
         pt: "Ampharos (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Holon Veil",
            ja: "ホロンベール",
            fr: "Voile holon",
            de: "Holon -Schleier",
            es: "Holón velo",
            it: "Holon Veil",
            pt: "Holon Veil",
          },
          effect: {
            en: "Treat each Basic PokÃ©mon and Evolution card in your deck, in your discard pile, in your hand, and in play as a PokÃ©mon that has  on its card.",
            ja: "デッキ、廃棄の山、手、そしてそのカードにあるポカモンとして遊びで、それぞれの基本的なポカモンとエボリューションカードを扱います。",
            fr: "Traitez chaque carte de base Pokã © Mon et Evolution dans votre deck, dans votre pile de défausse, dans votre main et en jeu en tant que poké qui a sur sa carte.",
            de: "Behandeln Sie jede grundlegende Poké Mon Mon und Evolutionskarte in Ihrem Deck, in Ihrem Abwurfstapel, in der Hand und im Spiel als Poké Mon Mon, das auf seiner Karte steht.",
            es: "Trate cada carta básica de Mon y Evolution en su mazo, en su pila de descarte, en su mano y en el juego como un Poké Mon que tiene en su carta.",
            it: "Tratta ogni POKES BASE POKES e la carta evolutiva nel tuo mazzo, nella tua pila di scarto, nella tua mano e in gioco come un poké mon che ha sulla sua carta.",
            pt: "Trate cada placa básica de Poké e Evolution em seu baralho, em sua pilha de descarte, na sua mão e em jogo como um Poké Mon que possui em seu cartão.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Delta Circle",
            ja: "デルタサークル",
            fr: "Delta cercle",
            de: "Delta -Kreis",
            es: "Círculo delta",
            it: "Delta Circle",
            pt: "Delta Circle",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Pokemon you have in play that has d on its card.",
            ja: "20のダメージに加えて、カードにDがあるPokemonがある各ポケモンに対してさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dégâts supplémentaires pour chaque pokemon que vous avez en jeu qui a D sur sa carte.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jedes Pokémon, das Sie im Spiel haben, das D auf seiner Karte enthält.",
            es: "Hace 20 daños más 10 daños más para cada Pokémon que tienes en juego que tiene D en su carta.",
            it: "Fa 20 danni più 10 danni in più per ogni Pokemon che hai in gioco che ha D sulla sua carta.",
            pt: "Causa 20 danos mais 10 mais danos para cada Pokémon que você tem em jogo que tem D em sua carta.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
