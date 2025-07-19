import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Spoink",
         ja: "spoink",
         fr: "Faire un saut",
         de: "Spoink",
         es: "Chapoteo",
         it: "Spoink",
         pt: "Spoink",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [325],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psywave",
            ja: "Psywave",
            fr: "Psywave",
            de: "Psywave",
            es: "Psíquica",
            it: "Psywave",
            pt: "Psywave",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to the Defending Pokemon.",
            ja: "ディフェンディングポケモンに取り付けられたエネルギーの量を10回ダメージします。",
            fr: "Fait 10 dégâts fois la quantité d'énergie attachée au Pokémon en défense.",
            de: "Schädigt 10 Schadenszeiten der an das verteidigenden Pokémon angeschlossenen Energie.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida al Pokémon defensor.",
            it: "Fa 10 danni volte la quantità di energia collegata al Pokemon in difesa.",
            pt: "10 danos vezes a quantidade de energia ligada ao pokemon defensor.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
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
