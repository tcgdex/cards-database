import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Quilava (Delta Species)",
         ja: "キラバ（デルタ種）",
         fr: "Quilava (espèces delta)",
         de: "Quilava (Delta -Arten)",
         es: "Quilava (especie delta)",
         it: "Quilava (Delta Species)",
         pt: "Quilava (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [156],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
          },
          damage: 20,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 20 mais danos.",
          },
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
