import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Shelgon",
         ja: "シェルゴン",
         fr: "Shelgon",
         de: "Shelgon",
         es: "Shelgon",
         it: "Shelgon",
         pt: "Shelgon",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [372],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
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
            en: "Does 10 damage plus 10 more damage for each damage counter on Shelgon.",
            ja: "シェルゴンのダメージカウンターごとに10のダメージと10ダメージがさらに10件のダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Shelgon.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Shelgon.",
            es: "Hace 10 daños más 10 10 más de daño por cada mostrador de daño en Shelgon.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Shelgon.",
            pt: "10 danos mais 10 mais danos para cada contador de danos em Shelgon.",
          },
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Rolling Tackle",
            ja: "ローリングタックル",
            fr: "Tacle roulant",
            de: "Rolling Tackle",
            es: "Tacleada",
            it: "Attrezzatura rotolante",
            pt: "Tackle rolante",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
