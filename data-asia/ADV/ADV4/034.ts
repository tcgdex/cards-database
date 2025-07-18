import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Huntail",
         ja: "ハンテイル",
         fr: "Huntail",
         de: "Huntail",
         es: "Cazar",
         it: "Huntail",
         pt: "Huntail",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [367],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Dark Splash",
            ja: "暗いスプラッシュ",
            fr: "Éclaboussures sombres",
            de: "Dunkler Spritzer",
            es: "Salpicadura oscura",
            it: "Splash scuro",
            pt: "Splash escuro",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each Darkness Pokemon in play.",
            ja: "プレイ中の暗闇のポケモンごとに40のダメージと10ダメージを与えます。",
            fr: "Fait 40 dégâts plus 10 dommages supplémentaires pour chaque Pokémon de l'obscurité en jeu.",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jedes Dunkelheitspokémon im Spiel.",
            es: "Hace 40 daños más 10 daños más para cada Pokémon de oscuridad en juego.",
            it: "Fa 40 danni più 10 danni in più per ogni Pokemon di Oscurità in gioco.",
            pt: "40 danos mais 10 mais danos para cada escuridão Pokémon em jogo.",
          },
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
