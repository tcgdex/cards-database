import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "ピカチュウ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [25],
    hp: 50,
    types: ["Lightning"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "プラズマ",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、廃棄物のエネルギーカードを廃棄することを検索し、ピカチュウに取り付けます。",
            },
            damage: 10,
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
