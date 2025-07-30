import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "照らされます",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [314],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ビーコン保護",
                                                                      },
          effect: {
                        ja: "Volbeatがプレイされている限り、その名前が暗くなっている相手のPokã©Monからの攻撃によって照らされるために、損傷を含むすべての効果を防ぎます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "家族を呼びます",
                                                                      },
          effect: {
                        ja: "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。  その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "奇妙なラスピン",
                                                                      },
          effect: {
                        ja: "防御ポケモンが進化したポケモンである場合、防御ポケモンは混乱しています。",
                                                                      },
          damage: 20,
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
