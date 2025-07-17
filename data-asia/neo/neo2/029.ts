import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Espeon",
         ja: "エスペオン",
         fr: "Espeon",
         de: "Espeon",
         es: "Espíritu",
         it: "Espeon",
         pt: "Espeon",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [196],
      hp: 80,
      types: ["Psychic"],
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
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Psychic",
            ja: "サイキック",
            fr: "Psychique",
            de: "Psychisch",
            es: "Psíquico",
            it: "Psichico",
            pt: "Psíquico",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each Energy card attached to the Defending Pokemon.",
            ja: "防御ポケモンに取り付けられたエネルギーカードごとに30のダメージと10ダメージを与えます。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque carte d'énergie attachée au Pokémon en défense.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jede an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Hace 30 daños más 10 daños más por cada tarjeta de energía unida al Pokémon defensor.",
            it: "Fa 30 danni più 10 danni in più per ogni carta di energia collegata al Pokemon in difesa.",
            pt: "Causam 30 danos mais 10 mais danos para cada cartão de energia ligado ao pokemon atual.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
