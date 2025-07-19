import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Seviper",
         ja: "セビパー",
         fr: "Seviper",
         de: "Seviper",
         es: "Seviper",
         it: "Seviper",
         pt: "Seviper",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [336],
      hp: 70,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sharp Fang",
            ja: "鋭い牙",
            fr: "Croc pointu",
            de: "Scharfer Fang",
            es: "Colmillo afilado",
            it: "Fang affilato",
            pt: "Fang afiado",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Toxic",
            ja: "有毒",
            fr: "Toxique",
            de: "Giftig",
            es: "Tóxico",
            it: "Tossico",
            pt: "Tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokemon between turns.",
            ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Mettez 2 compteurs de dégâts au lieu de 1 sur le Pokémon en défense entre les virages.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Setzen Sie 2 Schadenszähler anstelle von 1 auf das verteidigende Pokémon zwischen den Kurven.",
            es: "El Pokémon defensor ahora está envenenado. Coloque 2 contadores de daño en lugar de 1 en el Pokémon defensor entre giros.",
            it: "Il Pokemon in carica è ora avvelenato. Metti 2 contatori di danno invece di 1 sul Pokemon in difesa tra le curve.",
            pt: "O Pokémon atual agora está envenenado. Coloque 2 contadores de danos em vez de 1 no Pokémon atual entre as voltas.",
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
