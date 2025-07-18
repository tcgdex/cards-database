import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp",
         ja: "Magikarp",
         fr: "Magikarp",
         de: "Magikarp",
         es: "Magikarp",
         it: "Magikarp",
         pt: "Magikarp",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Leap Out",
            ja: "飛び出します",
            fr: "Sauter",
            de: "Springen",
            es: "Saltar",
            it: "Saltare fuori",
            pt: "Saltar",
          },
          effect: {
            en: "Switch Magikarp with 1 of your Benched Pokemon.",
            ja: "ベンチ付きポケモンの1つでMagikarpを切り替えます。",
            fr: "Communiquez MAGIKARP avec 1 de votre Pokémon banc.",
            de: "Wechseln Sie Magikarp mit 1 Ihrer Bank -Pokemon.",
            es: "Cambia de magikarp con 1 de tu pokemon de banca.",
            it: "Cambia Magikarp con 1 del tuo Pokemon in panchina.",
            pt: "Mudar Magikarp com 1 do seu Pokémon em banco.",
          },
        },
        {
          cost: ["Water", "Colorless"],
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
            en: "Does 10 damage plus 10 more damage for each damage counter on Magikarp.",
            ja: "Magikarpのダメージカウンターごとに10のダメージと10ダメージがさらに10件のダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Magikarp.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Magikarp.",
            es: "Hace 10 daños más 10 10 más de daño por cada mostrador de daño en Magikarp.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Magikarp.",
            pt: "10 danos mais 10 mais danos para cada contador de danos no Magikarp.",
          },
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
