import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "雑草",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [13],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "家族を呼びます",
            },
            effect: {
                ja: "デッキを検索して、最大2草の基本的なポケモンを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
            },
        },
        {
            cost: ["Grass"],
            name: {
                ja: "ポイズンスパート",
            },
            effect: {
                ja: "除草剤に取り付けられた草のエネルギーカードを捨てます。防御ポケモンは現在中毒になっています。",
            },
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
