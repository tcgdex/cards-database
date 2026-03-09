import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Bellossom",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [182],
    hp: 90,
    types: ["Grass"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "フラワーサプリメント",
            },
            effect: {
                ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、手から1つのベンチポクモンに1つの基本エネルギーカードを取り付けます。 Bellossomが特別な状態の影響を受けている場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                ja: "ナイフの葉",
            },
            effect: {
                ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            },
        },
    ],

    retreat: 2,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
