import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Dratini",
         ja: "ドラチーニ",
         fr: "Dratini",
         de: "Dratini",
         es: "Dratini",
         it: "Dratini",
         pt: "Dratini",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [147],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Dragon Dew",
            ja: "ドラゴンデュー",
            fr: "Dragon Dew",
            de: "Dragon Dew",
            es: "Dragón rocío",
            it: "Dragon Dew",
            pt: "Dragão Dew",
          },
          effect: {
            en: "Remove 2 damage counters from 1 of your Pokemon (remove 1 if there is only 1).",
            ja: "ポケモンの1つから2つのダメージカウンターを削除します（1つしかない場合は1を削除します）。",
            fr: "Retirez 2 compteurs de dégâts de 1 de votre Pokémon (retirer 1 s'il n'y en a que 1).",
            de: "Entfernen Sie 2 Schadenszähler von 1 Ihres Pokémons (entfernen Sie 1, wenn es nur 1 gibt).",
            es: "Retire 2 contadores de daño de 1 de su Pokémon (elimine 1 si solo hay 1).",
            it: "Rimuovi 2 contatori di danno da 1 del tuo Pokemon (rimuovi 1 se c'è solo 1).",
            pt: "Remova 2 contadores de danos de 1 do seu Pokémon (remova 1 se houver apenas 1).",
          },
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
