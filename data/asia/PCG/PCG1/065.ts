import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "クリーフ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [35],
    hp: 50,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "ジェスチャー",
            },
            effect: {
                ja: "対戦相手のベンチポケモンを1つ選択し、防御ポケモンに切り替えます。  対戦相手は、防御するポケモンを選択して切り替えます。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "ムーンキック",
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
