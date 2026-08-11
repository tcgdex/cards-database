import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "スローブロ",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [80],
    hp: 80,
    types: ["Water"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "濃い体",
            },
            effect: {
                ja: "Basic Pokemon（Baby Pokemonを除く）からの攻撃によってSlowbroに与えられた損害は20倍に減少します。",
            },
        }],

    attacks: [
        {
            cost: ["Water", "Colorless"],
            name: {
                ja: "エネルギー大砲",
            },
            effect: {
                ja: "この攻撃は、スローブロに付着した各エネルギーに対して30のダメージと10ダメージを10件以上ダメージしますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            },
        },
    ],

    retreat: 2,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
