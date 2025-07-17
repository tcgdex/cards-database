import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Lotad",
         ja: "lotad",
         fr: "Lotad",
         de: "Lotad",
         es: "Lotad",
         it: "Lotta",
         pt: "Lotad",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [270],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Rain Dish",
            ja: "雨皿",
            fr: "Plat de pluie",
            de: "Regenschale",
            es: "Plato de lluvia",
            it: "Piatto di pioggia",
            pt: "Prato de chuva",
          },
          effect: {
            en: "At any time between turns, remove 1 damage counter from Lotad.",
            ja: "ターンの間にいつでも、Lotadから1つのダメージカウンターを取り外します。",
            fr: "À tout moment entre les virages, retirez 1 compteur de dégâts de Lotad.",
            de: "Entfernen Sie jederzeit zwischen den Kurven 1 Schadenschalter von Lotad.",
            es: "En cualquier momento entre turnos, elimine 1 contador de daño de Lotad.",
            it: "In qualsiasi momento tra i turni, rimuovere 1 contatore di danni dalla lotad.",
            pt: "A qualquer momento entre as voltas, remova 1 contador de danos do LOTAD.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
