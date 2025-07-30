import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "タンゲラ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [114],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "反応性癒し",
                                                                      },
          effect: {
                        ja: "React Energyカードを手からTangelaに取り付けるときはいつでも、Tangelaからすべてのダメージカウンターを削除します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "絡み合っているブドウ",
                                                                      },
          effect: {
                        ja: "防御ポケモンが基本的なポケモンである場合、そのポケモンは相手の次のターン中に攻撃することはできません。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
                        ja: "穏やかなラップ",
                                                                      },
          effect: {
                        ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
