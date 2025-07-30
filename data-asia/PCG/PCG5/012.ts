import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ローゼリア",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [315],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "反応性の香り",
                                                                      },
          effect: {
                        ja: "RoseliaにReact Energy Cardsが取り付けられている限り、ターンの間にReact Energy Cardを取り付けているPokã©Mon（Pokã©Mon-Exを除く）のそれぞれから1つのダメージカウンターを削除します。 1ターンを1ターン以上使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "フリック毒",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは現在毒されています。",
                                                                      },
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
