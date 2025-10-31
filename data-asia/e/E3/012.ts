import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "exeggcute",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [102],
    hp: 40,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "成長が急上昇します",
            },
            effect: {
                ja: "手からexeggcuteにエネルギーカードを取り付けます。",
            },
        },
        {
            cost: ["Grass"],
            name: {
                ja: "スリープパウダー",
            },
            effect: {
                ja: "防御ポケモンは今眠っています。",
            },
            damage: 10,
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
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
