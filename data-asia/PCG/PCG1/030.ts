import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "シェルダー",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [90],
    hp: 50,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "最小化します",
            },
            effect: {
                ja: "対戦相手の次のターン中、攻撃によってシェルダーに与えられた損害は20増加します（脱力と抵抗を適用した後）。",
            },
        },
        {
            cost: ["Water"],
            name: {
                ja: "波のスプラッシュ",
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
            stamp: ["1st edition"],
        },
    ],
};

export default card
