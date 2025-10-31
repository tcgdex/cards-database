import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "チンチョウ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [170],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "フロート",
            },
            effect: {
                ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、チンチョウに行われた損害を含む攻撃のすべての影響を防ぎます。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "ヘッドバット",
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
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
