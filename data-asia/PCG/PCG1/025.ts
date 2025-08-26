import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "poliwag",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [60],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "スパイラル攻撃",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "尾のwhap",
            },
            damage: 20,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            stamp: ["1st edition"],
        },
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
