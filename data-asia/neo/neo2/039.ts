import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Houndour (U)",
         ja: "houndour（u）",
         fr: "Houndour (u)",
         de: "Houndour (u)",
         es: "Houndour (u)",
         it: "Houndaur (u)",
         pt: "Houndour (u)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [228],
      hp: 40,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Plunder",
            ja: "略奪",
            fr: "Pillage",
            de: "Plunder",
            es: "Saquear",
            it: "Saccheggiare",
            pt: "Pilhagem",
          },
          effect: {
            en: "Before doing damage, discard all Trainer cards attached to the Defending Pokemon (before they affect the damage).",
            ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨てます（ダメージに影響する前）。",
            fr: "Avant de faire des dégâts, jetez toutes les cartes d'entraînement attachées au Pokémon en défense (avant qu'ils affectent les dégâts).",
            de: "Bevor Sie Schaden anrichten, entsorgen Sie alle Trainerkarten, die an das verteidigende Pokémon angeschlossen sind (bevor sie den Schaden beeinflussen).",
            es: "Antes de hacer daño, deseche todas las tarjetas de entrenador unidas al Pokémon defensor (antes de que afecten el daño).",
            it: "Prima di fare danni, scartare tutte le carte dell'allenatore collegate al Pokemon in difesa (prima di influenzare il danno).",
            pt: "Antes de causar danos, descarte todas as cartas de treinador anexadas ao Pokémon atual (antes que elas afetem o dano).",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
