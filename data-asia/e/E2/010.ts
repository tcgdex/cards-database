import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Hoppip",
         ja: "ホッピップ",
         fr: "Hoppip",
         de: "Hoppip",
         es: "Hoppip",
         it: "Hoppip",
         pt: "Hoppip",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [187],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Lightweight",
            ja: "軽量",
            fr: "Léger",
            de: "Leicht",
            es: "Ligero",
            it: "Leggero",
            pt: "Leve",
          },
          effect: {
            en: "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
            ja: "あなたはそれに取り付けられた各草のエネルギーについてホッピップを後退させるために無色の少ない支払いをします。",
            fr: "Vous payez moins incolore pour retirer Hoppip pour chaque énergie de l'herbe qui y est attachée.",
            de: "Sie zahlen weniger farblos, um Hoppip für jede daran befestigte Grasenergie zurückzuziehen.",
            es: "Pagas menos incoloro para retirar Hoppip por cada energía de césped unida a él.",
            it: "Paghi incolore meno per ritirare Hoppip per ogni energia di erba attaccata ad esso.",
            pt: "Você paga menos incolor para recuar o Hoppip para cada energia da grama anexada a ele.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Careless Tackle",
            ja: "不注意なタックル",
            fr: "Tacle négligent",
            de: "Nachlässiger Tackle",
            es: "Aparejo descuidado",
            it: "Attrezzatura negligente",
            pt: "Tackle descuidado",
          },
          effect: {
            en: "Hoppip does 10 damage to itself.",
            ja: "Hoppipはそれ自体に10ダメージを与えます。",
            fr: "Hoppip fait 10 dégâts à lui-même.",
            de: "Hoppip schädigt sich 10.",
            es: "Hoppip hace 10 daños a sí mismo.",
            it: "Hoppip fa 10 danni a se stesso.",
            pt: "Hoppip causa 10 danos a si mesmo.",
          },
          damage: 20,
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
