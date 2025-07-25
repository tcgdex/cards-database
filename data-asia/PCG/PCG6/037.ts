import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Metang (Delta Species)",
         ja: "メタン（デルタ種）",
         fr: "Metang (espèces delta)",
         de: "Metang (Delta -Arten)",
         es: "Metang (especie delta)",
         it: "Metang (Delta Species)",
         pt: "Metang (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [375],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sharp Claws",
            ja: "鋭い爪",
            fr: "Griffes pointues",
            de: "Scharfe Krallen",
            es: "Afilados",
            it: "Artigli affilati",
            pt: "Garras afiadas",
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
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Magnetic Blast",
            ja: "磁気爆発",
            fr: "Explosion magnétique",
            de: "Magnetische Explosion",
            es: "Explosión magnética",
            it: "Esplosione magnetica",
            pt: "Explosão magnética",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
