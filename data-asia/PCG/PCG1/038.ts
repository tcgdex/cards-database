import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "ライチュ",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [26],
    hp: 80,
    types: ["Lightning"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "充電",
            },
            effect: {
                ja: "デッキを最大2枚の稲妻エネルギーカードで検索し、ライチュに添付してください。その後、デッキをシャッフルします。",
            },
        },
        {
            cost: ["Lightning", "Lightning", "Colorless"],
            name: {
                ja: "サンダーリフレクション",
            },
            effect: {
                ja: "Raichuに取り付けられた数の稲妻エネルギーカードを別のポケモンに移動できます。",
            },
            damage: 50,
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
