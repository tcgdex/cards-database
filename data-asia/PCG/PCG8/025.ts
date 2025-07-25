import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Lombre",
         ja: "ロンベル",
         fr: "Lombre",
         de: "Lombre",
         es: "Lombro",
         it: "Lombre",
         pt: "Lombre",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [271],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Before doing damage, discard all Trainer cards attached to the Defending Pokemon.",
            ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
            fr: "Avant de faire des dégâts, jetez toutes les cartes d'entraîner attachées au Pokémon en défense.",
            de: "Bevor Sie Schaden anrichten, entsorgen Sie alle Trainerkarten, die an das verteidigende Pokémon angeschlossen sind.",
            es: "Antes de hacer daño, deseche todas las tarjetas de entrenador adjuntas al Pokémon defensor.",
            it: "Prima di fare danni, scartare tutte le carte dell'allenatore collegate al Pokemon in carica.",
            pt: "Antes de causar danos, descarte todos os cartões de treinador anexados ao Pokémon atual.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Wave Splash",
            ja: "波のスプラッシュ",
            fr: "Vague de vagues",
            de: "Wellenspritzer",
            es: "Salpicadería",
            it: "Splash d'onda",
            pt: "Splash de onda",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
