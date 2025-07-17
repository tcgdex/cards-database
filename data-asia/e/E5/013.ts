import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Sunkern",
         ja: "サンカーン",
         fr: "Enfermer",
         de: "Gesunken",
         es: "Hundido",
         it: "Sunker",
         pt: "SUNHERN",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [191],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 10,
        },
        {
          cost: ["Grass"],
          name: {
            en: "Blot",
            ja: "ブロット",
            fr: "Tache",
            de: "Blot",
            es: "Mancha",
            it: "Macchia",
            pt: "Borrão",
          },
          effect: {
            en: "If there are any damage counters on Sunkern, remove 1 of them.",
            ja: "サンカーンにダメージカウンターがある場合は、それらの1つを削除します。",
            fr: "S'il y a des compteurs de dégâts sur Sunker, en retirez 1.",
            de: "Wenn auf Sunkern Schadenszähler vorhanden sind, entfernen Sie 1 davon.",
            es: "Si hay cualquier contador de daño en Sunkern, retire 1 de ellos.",
            it: "Se ci sono contatori di danno su Sunker, rimuoverne 1.",
            pt: "Se houver algum balcão de dano no SunKern, remova 1 deles.",
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
