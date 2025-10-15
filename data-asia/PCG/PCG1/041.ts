import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Voltorb",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [100],
    hp: 50,
    types: ["Lightning"],
    stage: "Basic",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "浮遊電子",
            },
            effect: {
                ja: "Voltorbにエネルギーが付着している限り、Voltorbのリトリートコストは0です。",
            },
        }],

    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                ja: "サンダーショック",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 20,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        },
        {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
