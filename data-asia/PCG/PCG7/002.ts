import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Vibrava (Delta Species)",
         ja: "ビブラバ（デルタ種）",
         fr: "Vibrava (espèce delta)",
         de: "Vibrava (Delta -Arten)",
         es: "Vibrava (especie delta)",
         it: "Vibrava (specie delta)",
         pt: "Vibrava (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [329],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Knock Away",
            ja: "ノックアウトします",
            fr: "Faire tomber",
            de: "Klopfen",
            es: "Tirar",
            it: "Bussare",
            pt: "Bata",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Cutting Wind",
            ja: "風を切る",
            fr: "Vent de coupe",
            de: "Wind schneiden",
            es: "Viento cortante",
            it: "Taglio del vento",
            pt: "Vento de corte",
          },
          damage: 40,
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
