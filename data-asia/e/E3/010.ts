import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Victreebel",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [71],
    hp: 90,
    types: ["Grass"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "フレグランストラップ",
            },
            effect: {
                ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、対戦相手のベンチポクモンの1つを選択し、防御するポクモンをそれで切り替えます。 Victreebelが特別な状態の影響を受けている場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                ja: "腐食性酸",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。",
            },
            damage: 40,
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
