import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Nidoqueen",
         ja: "nidoqueen",
         fr: "Nidaqueen",
         de: "Nidoqueen",
         es: "Nidoqueen",
         it: "Nidoqueen",
         pt: "NidoQueen",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [31],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Boyfriends",
            ja: "彼氏",
            fr: "Petit ami",
            de: "Freunde",
            es: "Novios",
            it: "Fidanzati",
            pt: "Namorados",
          },
          effect: {
            en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
            ja: "20のダメージに加えて、プレイ中のニドキングごとに20ダメージをさらに20回かけます。",
            fr: "Fait 20 dégâts plus 20 dégâts supplémentaires pour chaque nidoking que vous avez en jeu.",
            de: "Fügt 20 Schäden plus 20 weitere Schäden für jede Nidokie, die Sie im Spiel haben.",
            es: "Hace 20 daños más 20 más de daño por cada nidoking que tienes en juego.",
            it: "Fa 20 danni più 20 danni in più per ogni nidoking che hai in gioco.",
            pt: "20 danos mais 20 mais danos para cada uma que você tem em jogo.",
          },
          damage: None,
        },
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless"],
          name: {
            en: "Mega Punch",
            ja: "メガパンチ",
            fr: "Mega Punch",
            de: "Mega Punch",
            es: "Mega Punch",
            it: "Mega pugno",
            pt: "Mega soco",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
