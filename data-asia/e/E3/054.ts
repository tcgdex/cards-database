import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Mankey",
         ja: "マンキー",
         fr: "Homme",
         de: "Manker",
         es: "Mankey",
         it: "Mankey",
         pt: "Mankey",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [56],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Mug",
            ja: "マグ",
            fr: "Tasse",
            de: "Becher",
            es: "Taza",
            it: "Tazza",
            pt: "Caneca",
          },
          effect: {
            en: "Before doing damage, discard all Trainer cards attached to the Defending Pokemon.",
            ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
            fr: "Avant de faire des dégâts, jetez toutes les cartes d'entraîner attachées au Pokémon en défense.",
            de: "Bevor Sie Schaden anrichten, entsorgen Sie alle Trainerkarten, die an das verteidigende Pokémon angeschlossen sind.",
            es: "Antes de hacer daño, deseche todas las tarjetas de entrenador adjuntas al Pokémon defensor.",
            it: "Prima di fare danni, scartare tutte le carte dell'allenatore collegate al Pokemon in carica.",
            pt: "Antes de causar danos, descarte todos os cartões de treinador anexados ao Pokémon atual.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rage",
            ja: "怒り",
            fr: "Rage",
            de: "Wut",
            es: "Furia",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "This attack does 10 damage plus 10 more damage for each damage counter on Mankey.",
            ja: "この攻撃は、マンキーのダメージカウンターごとに10ダメージに加えて10ダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur Mankey.",
            de: "Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter bei Manky.",
            es: "Este ataque hace 10 daños más 10 daños más por cada mostrador de daño en Mankey.",
            it: "Questo attacco infligge 10 danni più 10 danni in più per ogni danno su Mankey.",
            pt: "Este ataque causa 10 danos mais 10 mais danos para cada balcão de danos em Mankey.",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
