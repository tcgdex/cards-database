import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "カンガスハン",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [115],
    hp: 70,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "赤ちゃんの外出",
            },
            effect: {
                ja: "デッキのトップ3のカードを見てから、それらのカードの1枚を選択して、手に入れます。その後、残りをデッキにシャッフルします。",
            },
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "メガパンチ",
            },
            damage: 30,
        },
    ],

    retreat: 2,

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
