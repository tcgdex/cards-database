import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "キューボン",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [104],
    hp: 50,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "ビート",
            },
            damage: 10,
        },
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "線形攻撃",
            },
            effect: {
                ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
