import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Charmeleon",
         ja: "チャームレオン",
         fr: "Charmeon",
         de: "Charmeleon",
         es: "Encantador",
         it: "CAMBELEON",
         pt: "Charmeleon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [5],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Does 10 damage plus 10 more damage for each damage counter on Charmeleon.",
            ja: "CharmeLeonの各ダメージカウンターの10ダメージと10ダメージをさらに10回します。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur Charmeleon.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf Charmeleon.",
            es: "Hace 10 daños más 10 10 más de daño por cada contador de daños en Charmeleon.",
            it: "Fa 10 danni più 10 danni in più per ciascun contatore di danni su Charmeleon.",
            pt: "10 danos mais 10 mais danos para cada contador de danos em Charmeleon.",
          },
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard a Fire Energy attached to Charmeleon.",
            ja: "Charmeleonに取り付けられた火エネルギーを捨てます。",
            fr: "Jeter une énergie de feu attachée à Charmeleon.",
            de: "Legen Sie eine Feuerergie ab, die an Charmeleon gebunden ist.",
            es: "Deseche una energía de fuego unida a Charmeleon.",
            it: "Scartare un'energia di fuoco attaccata a Charmeleon.",
            pt: "Descarte uma energia de incêndio ligada ao Charmeleon.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
