import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "レディアン",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [166],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            ja: "花粉シールド",
          },
          effect: {
            ja: "対戦相手の次のターン中に、Ledianは特別な状態の影響を受けることはできません。 （攻撃、pok？-powers、pok？-bodies、およびトレーナーカードの他の効果はまだ発生しています。）",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            ja: "迅速",
          },
          effect: {
            ja: "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
          },
          damage: 50,
        },
      ],


      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
