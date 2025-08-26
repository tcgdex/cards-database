import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Magikarp",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [129],
    hp: 30,
    types: ["Water"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "奇襲",
            },
            effect: {
                ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            },
            damage: 10,
        },
        {
            cost: ["Water", "Colorless"],
            name: {
                ja: "上昇",
            },
            effect: {
                ja: "Magikarpから進化するカードをデッキで検索し、Magikarpに置いてください。 （これは進化するMagikarpとしてカウントされます。）その後、デッキをシャッフルします。",
            },
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
