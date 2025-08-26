import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "メタポッド",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [11],
    hp: 80,
    types: ["Grass"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "エネルギー保護",
            },
            effect: {
                ja: "攻撃によってメタポッドに与えられた損傷は、メタポッドに付着した各エネルギーに対して10倍に減少します。この方法で30を超えるダメージを減らすことはできません。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "シャープ",
            },
            damage: 20,
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
