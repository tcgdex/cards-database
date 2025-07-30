import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "テンタクルエル",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [73],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "反応シールド",
                                                                      },
          effect: {
                        ja: "TentacruelにReact Energy Cardsが取り付けられている限り、対戦相手のPokã©Mon-Exからの攻撃によってプレイ中のTentacruelのいずれかに対して行われたダメージを含むすべての効果を防ぎます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "水の矢",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "フューリーストライク",
                                                                      },
          effect: {
                        ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
                                                                      },
        },
      ],


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
