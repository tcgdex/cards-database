import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "馬",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [116],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "逆スラスト",
            },
            effect: {
                ja: "ベンチ付きポケモンを1枚馬に切り替えます。",
            },
            damage: 20,
        },
    ],

    retreat: 1,

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
