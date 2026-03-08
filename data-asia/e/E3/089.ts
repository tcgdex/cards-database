import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "キングドラ",
    },

    rarity: "Secret Rare",
    category: "Pokemon",
    dexId: [230],
    hp: 110,
    types: ["Colorless"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "クリスタルタイプ",
            },
            effect: {
                ja: "手からキングドラに水、稲妻、またはサイキックベーシックエネルギーカードを取り付けると、キングドラのタイプ（色）はターンの終わりまでそのエネルギーカードタイプと同じになります。",
            },
        }],

    attacks: [
        {
            cost: ["Water", "Water", "Lightning"],
            name: {
                ja: "Aquabomb",
            },
            effect: {
                ja: "Kingdraはそれ自体に10ダメージを与えます。 （Kingdraがこの攻撃で損害を与える場合、衰弱や抵抗を適用しないでください。）",
            },
            damage: 40,
        },
        {
            cost: ["Psychic", "Psychic", "Lightning", "Colorless"],
            name: {
                ja: "二重火傷",
            },
            effect: {
                ja: "2つのコインをフリップします。各テールについて、Kingdraに取り付けられた1つのエネルギーカードを捨てます。",
            },
            damage: 60,
        },
    ],

    retreat: 3,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
