import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "キングラー",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [99],
    hp: 80,
    types: ["Water"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "塩水",
            },
            effect: {
                ja: "デッキを最大2枚の水エネルギーカードで検索し、キングラーに取り付けます。その後、デッキをシャッフルします。",
            },
        },
        {
            cost: ["Water", "Colorless"],
            name: {
                ja: "ハイパーポンプ",
            },
            effect: {
                ja: "30のダメージに加えて、キングラーに付随する基本エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
            },
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
            stamp: ["1st edition"],
        },
    ],
};

export default card
