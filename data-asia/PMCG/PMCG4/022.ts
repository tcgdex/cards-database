import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Golduck",
         ja: "ダークゴルダック",
         fr: "Golduck foncé",
         de: "Dunkler Golduck",
         es: "Dorado oscuro",
         it: "Golduck scuro",
         pt: "Golduck escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [55],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Third Eye",
            ja: "第三の目",
            fr: "Troisième œil",
            de: "Drittes Auge",
            es: "Tercer ojo",
            it: "Terzo occhio",
            pt: "Terceiro olho",
          },
          effect: {
            en: "Discard 1 Energy card attached to Dark Golduck in order to draw up to 3 cards.",
            ja: "最大3枚のカードを作成するために、Dark Golduckに取り付けられた1つのエネルギーカードを捨てます。",
            fr: "Jetez 1 carte d'énergie attachée à Dark Golduck afin de tirer jusqu'à 3 cartes.",
            de: "Legen Sie die an Dark Golduck befestigte Energiekarte ab, um bis zu 3 Karten zu zeichnen.",
            es: "Deseche 1 tarjeta de energía unida a Dark Golduck para atraer hasta 3 cartas.",
            it: "Scartare 1 carta energetica attaccata a scuro Golduck per disegnare fino a 3 carte.",
            pt: "Descarte 1 cartão de energia anexado ao Dark Golduck para extrair até 3 cartas.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Super Psy",
            ja: "Super Psy",
            fr: "Super psy",
            de: "Super Psy",
            es: "Super psico",
            it: "Super Psy",
            pt: "Super Psy",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
