import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Krabby",
         ja: "クラビー",
         fr: "Krabby",
         de: "Krabby",
         es: "Cañón",
         it: "Krabby",
         pt: "Krabby",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [98],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Irongrip",
            ja: "Irongrip",
            fr: "Irongrip",
            de: "IRONGRIP",
            es: "Irongrip",
            it: "Irongrip",
            pt: "Irongrip",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
          name: {
            en: "Nap",
            ja: "昼寝",
            fr: "Somme",
            de: "Nickerchen",
            es: "Siesta",
            it: "Pisolino",
            pt: "Sesta",
          },
          effect: {
            en: "Remove 2 damage counters from Krabby (remove 1 if there is only 1).",
            ja: "Krabbyから2つのダメージカウンターを削除します（1つしかない場合は1を削除します）。",
            fr: "Retirez 2 compteurs de dégâts de Krabby (retirer 1 s'il n'y en a que 1).",
            de: "Entfernen Sie 2 Schadenszähler von Krabby (entfernen Sie 1, wenn es nur 1 gibt).",
            es: "Retire 2 contadores de daño de Krabby (elimine 1 si solo hay 1).",
            it: "Rimuovere 2 contatori di danno da Krabby (rimuovi 1 se c'è solo 1).",
            pt: "Remova 2 contadores de danos do krabby (remova 1 se houver apenas 1).",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
