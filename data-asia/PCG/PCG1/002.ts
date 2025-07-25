import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Metapod",
         ja: "メタポッド",
         fr: "Métapode",
         de: "Metapod",
         es: "Metapod",
         it: "Metapode",
         pt: "Metapod",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [11],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Energy Protection",
            ja: "エネルギー保護",
            fr: "Protection de l'énergie",
            de: "Energieschutz",
            es: "Protección contra la energía",
            it: "Protezione energetica",
            pt: "Proteção de energia",
          },
          effect: {
            en: "Any damage done to Metapod by attacks is reduced by 10 for each Energy attached to Metapod. You can't reduce more than 30 damage in this way.",
            ja: "攻撃によってメタポッドに与えられた損傷は、メタポッドに付着した各エネルギーに対して10倍に減少します。この方法で30を超えるダメージを減らすことはできません。",
            fr: "Tout dommage causé à Metapod par les attaques est réduit de 10 pour chaque énergie attachée à Metapod. Vous ne pouvez pas réduire plus de 30 dégâts de cette manière.",
            de: "Alle Schäden, die durch Angriffe durch Metapod angerichtet wurden, wird für jede an Metapod befestigte Energie um 10 reduziert. Auf diese Weise können Sie nicht mehr als 30 Schäden reduzieren.",
            es: "Cualquier daño hecho a Metapod por ataques se reduce en 10 por cada energía unida a Metapod. No puede reducir más de 30 daños de esta manera.",
            it: "Qualsiasi danno arrecato al metapod dagli attacchi è ridotto di 10 per ogni energia attaccata al metapod. Non puoi ridurre più di 30 danni in questo modo.",
            pt: "Qualquer dano causado ao Metapod por ataques é reduzido em 10 para cada energia ligada ao Metapod. Você não pode reduzir mais de 30 danos dessa maneira.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sharpen",
            ja: "シャープ",
            fr: "Aiguiser",
            de: "Schärfen",
            es: "Afilar",
            it: "Affilare",
            pt: "Afiado",
          },
          damage: 20,
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
