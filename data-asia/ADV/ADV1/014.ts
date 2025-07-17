import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Goldeen",
         ja: "ゴールデン",
         fr: "Or",
         de: "Goldene",
         es: "Goldeen",
         it: "Goldoen",
         pt: "Goldeen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [118],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "Does 10 damage for each damage counter on Goldeen.",
            ja: "Goldeenの各ダメージカウンターに対して10ダメージを与えます。",
            fr: "Fait 10 dégâts pour chaque compteur de dégâts sur Golden.",
            de: "Fügt 10 Schaden für jeden Schadenschalter bei Goldens.",
            es: "Hace 10 daños por cada mostrador de daño en Goldeen.",
            it: "Fa 10 danni per ciascun contatore di danni su Goldoen.",
            pt: "10 danos para cada contador de danos no Goldeen.",
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
