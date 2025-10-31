import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "パラセクト",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [47],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Grass"],
            name: {
                ja: "エネルギーパウダー",
            },
            effect: {
                ja: "デッキを最大2つの基本エネルギーカードで検索し、好きな方法でポケモン（ポケモン-Exを除く）に添付してください。その後、デッキをシャッフルします。",
            },
        },
        {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "有毒な胞子",
            },
            effect: {
                ja: "防御ポケモンは現在中毒になっています。",
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
            stamp: ["1st edition"],
        },
    ],
};

export default card
