import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "メディチャム",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [308],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "デュアルアーマー",
                                                                      },
          effect: {
                        ja: "MedichamにはPsychic Energyカードが付いている限り、MedichamはPsychicと戦闘タイプの両方です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "PsyShock",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "スカイアッパーカット",
                                                                      },
          effect: {
                        ja: "この攻撃の損傷は抵抗の影響を受けません。",
                                                                      },
          damage: 50,
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
