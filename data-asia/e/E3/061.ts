import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ドドゥオ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [84],
    hp: 40,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "スーパースピード",
            },
            effect: {
                ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ドドゥオに行われた損害を含む攻撃のすべての影響を防ぎます。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "リアキック",
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
